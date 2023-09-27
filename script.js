document.addEventListener('DOMContentLoaded', function() {
    // Load the JSON data file
    d3.json('visualization_data.json').then(function(data) {
        // Select the tabs container
        var tabsContainer = d3.select('#tabs-container');
        
        if (tabsContainer.empty()) {
            console.error('Unable to find #tabs-container');
            return;
        }

        // Load the JSON data file
        d3.json('https://zfx0726.github.io/data/visualization_data.json').then(function(data) {
            // Select the tabs container
            var tabsContainer = d3.select('#tabs-container');

            // Create tabs for each billing code
            for (var code in data) {
                tabsContainer.append('div')
                    .attr('class', 'tab')
                    .text(code + ' - ' + data[code].billing_code_name)
                    .on('click', function(d, i) {
                        // Handle tab click, update visualization
                        d3.selectAll('.tab').classed('active-tab', false);
                        d3.select(this).classed('active-tab', true);
                        updateVisualization(data[d3.select(this).datum()]);
                    })
                    .datum(code); // Bind the billing code to the tab element as data
            }

            // Initial visualization update
            updateVisualization(data[Object.keys(data)[0]]);
            d3.select('.tab').classed('active-tab', true);
        });

        function updateVisualization(data) {
            // Update the visualization based on the selected billing code data
            var visualizationContainer = d3.select('#visualization-container');
            visualizationContainer.selectAll('*').remove(); // Clear previous visualization
            
            // Append the billing_code_name as a title
            visualizationContainer.append('h2').text(data.billing_code_name);
            
            // Create bar chart for provider_state
            createBarChart(visualizationContainer, data.state_data, 'Average Negotiated Rate by State');
            
            // Create bar chart for billing_class
            createBarChart(visualizationContainer, data.class_data, 'Average Negotiated Rate by Billing Class');

            // Create bar chart for negotiation_arrangement
            createBarChart(visualizationContainer, data.arrangement_data, 'Average Negotiated Rate by Negotiation Arrangement');
        }

        function createBarChart(container, data, title) {
            // Set the dimensions and margins of the graph
            var margin = {top: 30, right: 30, bottom: 70, left: 60},
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
                .attr("x", function(d) { return x(d[0]); })
                .attr("y", function(d) { return y(d[1]); })
                .attr("width", x.bandwidth())
                .attr("height", function(d) { return height - y(d[1]); })
                .attr("fill", "#69b3a2")
                .on("mouseover", function(event, d) {
                    d3.select(this).attr("fill", "#405d55");
                    // Show tooltip
                    div.transition()
                        .duration(200)
                        .style("opacity", 0.9);
                    div.html(d[0] + "<br>" + d[1])
                        .style("left", (event.pageX) + "px")
                        .style("top", (event.pageY - 28) + "px");
                })
                .on("mouseout", function(d) {
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

    });
});




