// Define the state code mapping
    const stateCodeMapping = {
    '01': 'AL', '02': 'AK', '04': 'AZ', '05': 'AR', '06': 'CA', '08': 'CO', 
    '09': 'CT', '10': 'DE', '11': 'DC', '12': 'FL', '13': 'GA', '15': 'HI', 
    '16': 'ID', '17': 'IL', '18': 'IN', '19': 'IA', '20': 'KS', '21': 'KY', 
    '22': 'LA', '23': 'ME', '24': 'MD', '25': 'MA', '26': 'MI', '27': 'MN', 
    '28': 'MS', '29': 'MO', '30': 'MT', '31': 'NE', '32': 'NV', '33': 'NH', 
    '34': 'NJ', '35': 'NM', '36': 'NY', '37': 'NC', '38': 'ND', '39': 'OH', 
    '40': 'OK', '41': 'OR', '42': 'PA', '44': 'RI', '45': 'SC', '46': 'SD', 
    '47': 'TN', '48': 'TX', '49': 'UT', '50': 'VT', '51': 'VA', '53': 'WA', 
    '54': 'WV', '55': 'WI', '56': 'WY', '72': 'PR'
};

document.addEventListener('DOMContentLoaded', function () {
    Promise.all([
        d3.json('https://zfx0726.github.io/data/visualization_data.json'),
        d3.json('https://zfx0726.github.io/data/gz_2010_us_040_00_5m.json') // Loading GeoJSON file
    ]).then(function ([data, us]) {
        // Select the tabs container
        var tabsContainer = d3.select('#tabs-container');

        if (tabsContainer.empty()) {
            console.error('Unable to find #tabs-container');
            return;
        }

        // Create tabs for each billing code
        for (var code in data) {
            tabsContainer.append('div')
                .attr('class', 'tab')
                .text(code + ' - ' + data[code].billing_code_name)
                .on('click', function (d, i) {
                    // Handle tab click, update visualization
                    d3.selectAll('.tab').classed('active-tab', false);
                    d3.select(this).classed('active-tab', true);
                    updateVisualization(data[d3.select(this).datum()], us);
                })
                .datum(code);
        }

        // Initial visualization update
        updateVisualization(data[Object.keys(data)[0]], us);
        d3.select('.tab').classed('active-tab', true);
    });
});

function updateVisualization(data, us) {
    // Update the visualization based on the selected billing code data
    var visualizationContainer = d3.select('#visualization-container');
    visualizationContainer.selectAll('*').remove(); // Clear previous visualization

    // Append the billing_code_name as a title
    visualizationContainer.append('h2').text(data.billing_code_name);

    // Create map visualization for provider_state
    createMapVisualization(visualizationContainer, data.state_data, 'Average Negotiated Rate by State', us);

    // Create bar chart for billing_class
    createBarChart(visualizationContainer, data.class_data, 'Average Negotiated Rate by Billing Class');

    // Create bar chart for negotiation_arrangement
    createBarChart(visualizationContainer, data.arrangement_data, 'Average Negotiated Rate by Negotiation Arrangement');
}

function createMapVisualization(container, data, title, us) {
    // Define width and height
    var width = 960,
        height = 600;

    // Create SVG container
    var svg = container.append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g');

    // Define map projection
    var projection = d3.geoAlbersUsa()
        .translate([width / 2, height / 2]);

    var path = d3.geoPath().projection(projection);

    // Create a tooltip
    var div = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

  // Determine the maximum value in your data to adjust the color scale dynamically
    var maxValue = d3.max(Object.values(data));

    // Create a logarithmic color scale based on the maximum value
    var colorScale = d3.scaleSequential(d3.interpolateBlues).domain([0, Math.log(maxValue + 1)]);



    svg.selectAll("path")
            .data(us.features)
            .enter()
            .append("path")
            .attr("d", path)
            .style("stroke", "#fff")
            .style("stroke-width", "1")
            .style("fill", function (d) {
                var stateAlphaCode = stateCodeMapping[d];
                var value = data[stateAlphaCode];
                
                // Use the logarithmic color scale to determine the fill color
                return value ? colorScale(Math.log(value + 1)) : "#ccc";
            })


        .on("mouseover", function (event, d) {
          console.log(d); // log the data object to inspect its structure

            var stateAlphaCode = stateCodeMapping[d];
            var value = data[stateAlphaCode] || 0;

            div.transition()
                .duration(200)
                .style("opacity", .9);
            div.html(stateAlphaCode + "<br>" + "$" + value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }))
                .style("left", (event.pageX) + "px")
                .style("top", (event.pageY - 28) + "px");
        })

        .on("mouseout", function (d) {
            // Hide tooltip on mouseout
            div.transition()
                .duration(500)
                .style("opacity", 0);
        });


    // Append title to the map
        svg.append("text")
            .attr("x", width / 2)
            .attr("y", 30)
            .attr("text-anchor", "middle")
            .style("font-size", "20px")
            .text(title);
    }



function createBarChart(container, data, title) {
    // Set the dimensions and margins of the graph
    var margin = { top: 30, right: 30, bottom: 70, left: 60 },
        width = 460 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

    // Append SVG and group element
    var svg = container.append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // X axis
    var x = d3.scaleBand()
        .range([0, width])
        .domain(Object.keys(data))
        .padding(0.2);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");

    // Add Y axis
    var y = d3.scaleLinear()
        .domain([0, d3.max(Object.values(data))])
        .range([height, 0]);
    svg.append("g").call(d3.axisLeft(y));

    // Bars
    svg.selectAll("mybar")
        .data(Object.entries(data))
        .enter()
        .append("rect")
        .attr("x", function (d) { return x(d[0]); })
        .attr("y", function (d) { return y(d[1]); })
        .attr("width", x.bandwidth())
        .attr("height", function (d) { return height - y(d[1]); })
        .attr("fill", "#69b3a2")
        .on("mouseover", function (event, d) {
            d3.select(this).attr("fill", "#405d55");
            // Show tooltip
            div.transition()
                .duration(200)
                .style("opacity", 0.9);
            div.html(d[0] + "<br>" + d[1])
                .style("left", (event.pageX) + "px")
                .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", function (d) {
            d3.select(this).attr("fill", "#69b3a2");
            // Hide tooltip
            div.transition()
                .duration(500)
                .style("opacity", 0);
        });

    // Title
    svg.append("text")
        .attr("x", width / 2)
        .attr("y", 0 - (margin.top / 2))
        .attr("text-anchor", "middle")
        .style("font-size", "16px")
        .style("text-decoration", "underline")
        .text(title);

    // Tooltip
    var div = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);
}
