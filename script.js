
// Load the GeoJSON and CSV data
const geojsonUrl = 'https://zfx0726.github.io/data/gz_2010_us_040_00_5m.json'; // Update the path as per your hosting
const csvUrl = 'https://zfx0726.github.io/data/th.csv'; // Update the path as per your hosting

// Set up the SVG dimensions
const width = 900;
const height = 500;

// Create a color scale
const colorScale = d3.scaleSequential()
    .interpolator(d3.interpolateBlues);

// Set up the map projection
const projection = d3.geoAlbersUsa()
    .translate([width / 2, height / 2])
    .scale(1000);

const path = d3.geoPath().projection(projection);

// Create the SVG container for the map
const svgMap = d3.select('#map')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

// Create the SVG container for the bar chart
const svgBar = d3.select('#bar-chart')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

// Create a tooltip
const tooltip = d3.select('body').append('div')
    .attr('class', 'tooltip')
    .style('opacity', 0);

// Function to render the bar chart
const renderBarChart = (data, field = 'negotiation_arrangement') => {
    svgBar.selectAll("*").remove();  // Clear previous bar chart

    const groupedData = d3.nest()
        .key(d => d[field])
        .rollup(leaves => d3.mean(leaves, d => d.negotiated_rate))
        .entries(data);

    const xScale = d3.scaleBand()
        .domain(groupedData.map(d => d.key))
        .range([0, width])
        .padding(0.1);

    const maxRate = d3.max(groupedData, d => d.value);
    const yScale = d3.scaleLinear()
        .domain([0, maxRate])
        .range([height, 0]);

    svgBar.selectAll('rect')
        .data(groupedData)
        .enter()
        .append('rect')
        .attr('x', d => xScale(d.key))
        .attr('y', d => yScale(d.value))
        .attr('width', xScale.bandwidth())
        .attr('height', d => height - yScale(d.value))
        .attr('fill', d => colorScale(d.value))
        .on('mouseover', d => {
            tooltip.transition()
                .duration(200)
                .style('opacity', .9);
            tooltip.html(d.key + '<br>' + d.value.toFixed(2))
                .style('left', (d3.event.pageX) + 'px')
                .style('top', (d3.event.pageY - 28) + 'px');
        })
        .on('mouseout', d => {
            tooltip.transition()
                .duration(500)
                .style('opacity', 0);
        });

    // Add title to the bar chart
    svgBar.append('text')
        .attr('x', width / 2)
        .attr('y', 20)
        .attr('text-anchor', 'middle')
        .attr('font-size', '20px')
        .attr('font-weight', 'bold')
        .text('Average Rates by ' + field.charAt(0).toUpperCase() + field.slice(1));
}

// Load and render the map
d3.json(geojsonUrl).then(stateData => {
    // Load and render the bar chart
    d3.csv(csvUrl).then(csvData => {
        // Render the default bar chart with a breakdown by negotiation arrangement
        renderBarChart(csvData);

        // Update the color of the map based on average negotiated rates
        svgMap.selectAll('path')
            .data(stateData.features)
            .enter()
            .append('path')
            .attr('d', path)
            .attr('fill', d => {
                const state = d.properties.STUSPS;
                const stateData = csvData.filter(d => d.provider_state === state);
                const avgRate = stateData.length ? d3.mean(stateData, d => d.negotiated_rate) : 0;
                return colorScale(avgRate);
            })
            .attr('stroke', 'white')
            .on('mouseover', d => {
                const state = d.properties.STUSPS;
                const stateData = csvData.filter(d => d.provider_state === state);
                renderBarChart(stateData); // Update the bar chart for the hovered state
            })
            .on('mouseout', d => {
                renderBarChart(csvData); // Render the default bar chart again
            });

        // Add a title to the map visualization
        svgMap.append('text')
            .attr('x', width / 2)
            .attr('y', 20)
            .attr('text-anchor', 'middle')
            .attr('font-size', '20px')
            .attr('font-weight', 'bold')
            .text('Average Negotiated Rates by State');
    });
});
