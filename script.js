
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

// Create a tooltip
const tooltip = d3.select('body').append('div')
    .attr('class', 'tooltip')
    .style('opacity', 0);

// Load and render the map
d3.json(geojsonUrl).then(stateData => {
    // Load and render the bar chart
    d3.csv(csvUrl).then(csvData => {
        // Calculate average negotiated rates per state
        const stateRates = {};
        csvData.forEach(d => {
            const state = d.provider_state;
            if (!stateRates[state]) stateRates[state] = [];
            stateRates[state].push(+d.negotiated_rate);
        });

        // Calculate the minimum and maximum average rate
        const avgRates = Object.values(stateRates).map(rates => d3.mean(rates));
        const minRate = d3.min(avgRates);
        const maxRate = d3.max(avgRates);

        // Update the domain of the color scale
        colorScale.domain([minRate, maxRate]);

        // Update the color of the map based on average negotiated rates
        svgMap.selectAll('path')
            .data(stateData.features)
            .enter()
            .append('path')
            .attr('d', path)
            .attr('fill', d => {
                const state = d.properties.STUSPS;
                const avgRate = stateRates[state] ? d3.mean(stateRates[state]) : minRate;
                return colorScale(avgRate);
            })
            .attr('stroke', 'white')
            .on('mouseover', d => {
                tooltip.transition()
                    .duration(200)
                    .style('opacity', .9);
                tooltip.html(d.properties.NAME)
                    .style('left', (d3.event.pageX) + 'px')
                    .style('top', (d3.event.pageY - 28) + 'px');
            })
            .on('mouseout', d => {
                tooltip.transition()
                    .duration(500)
                    .style('opacity', 0);
            });

        // Add a title to the map visualization
        svgMap.append('text')
            .attr('x', width / 2)
            .attr('y', 20)
            .attr('text-anchor', 'middle')
            .attr('font-size', '20px')
            .attr('font-weight', 'bold')
            .text('Average Negotiated Rates by State');

        // Set up the SVG container for the bar chart
        const svgBar = d3.select('#bar-chart')
            .append('svg')
            .attr('width', width)
            .attr('height', height);

        // Create the bar chart visualization based on the stateRates
        const barData = Object.keys(stateRates).map(state => {
            return {
                state: state,
                avgRate: d3.mean(stateRates[state])
            };
        });

        // Create scales for the bar chart
        const xScale = d3.scaleBand()
            .domain(barData.map(d => d.state))
            .range([0, width])
            .padding(0.1);

        const yScale = d3.scaleLinear()
            .domain([0, maxRate])
            .range([height, 0]);

        // Add bars to the bar chart
        svgBar.selectAll('rect')
            .data(barData)
            .enter()
            .append('rect')
            .attr('x', d => xScale(d.state))
            .attr('y', d => yScale(d.avgRate))
            .attr('width', xScale.bandwidth())
            .attr('height', d => height - yScale(d.avgRate))
            .attr('fill', d => colorScale(d.avgRate))
            .on('mouseover', d => {
                tooltip.transition()
                    .duration(200)
                    .style('opacity', .9);
                tooltip.html(d.state + '<br>' + d.avgRate.toFixed(2))
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
            .text('Average Negotiated Rates by State');
    });
});
