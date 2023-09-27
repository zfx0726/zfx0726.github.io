
// Initialize the SVG element and set its dimensions
const svg = d3.select("#us-map");
const width = +svg.attr("width");
const height = +svg.attr("height");

// Load GeoJSON data for US States
d3.json("data/gadm41_USA_1.json", function(geoData) {

    // Load the healthcare data
    d3.csv("data/th_sample_visualization.csv", function(data) {

        // Initialize the map projection
        const projection = d3.geoAlbersUsa().fitSize([width, height], geoData);
        const path = d3.geoPath().projection(projection);

        // Initialize the color scale
        const color = d3.scaleSequential(d3.interpolateBlues)
            .domain([d3.min(data, d => +d.negotiated_rate), d3.max(data, d => +d.negotiated_rate)]);

        // Create a dropdown for filtering by billing class
        d3.select("#billing-class-filter")
            .selectAll("option")
            .data([...new Set(data.map(d => d.billing_class))])
            .enter().append("option")
            .attr("value", d => d)
            .text(d => d);

        // Draw the map
        svg.selectAll("path")
            .data(geoData.features)
            .enter().append("path")
            .attr("d", path)
            .attr("fill", d => {
                const stateData = data.filter(row => row.provider_state === d.properties.name);
                return color(d3.mean(stateData, d => +d.negotiated_rate));
            })
            .on("mouseover", function(d) {
                // Display tooltip with state name and average negotiated rate
            })
            .on("mouseout", function(d) {
                // Hide tooltip
            });

        // Update the map based on the selected billing class
        d3.select("#billing-class-filter").on("change", function() {
            const selectedClass = this.value;
            svg.selectAll("path")
                .attr("fill", d => {
                    const stateData = data.filter(row => row.provider_state === d.properties.name && row.billing_class === selectedClass);
                    return color(d3.mean(stateData, d => +d.negotiated_rate));
                });
        });
    });
});
