
const stateNumberMapping = {"01": "AL", "02": "AK", "04": "AZ", "05": "AR", "06": "CA", "08": "CO", "09": "CT", "10": "DE", "11": "DC", "12": "FL", "13": "GA", "15": "HI", "16": "ID", "17": "IL", "18": "IN", "19": "IA", "20": "KS", "21": "KY", "22": "LA", "23": "ME", "24": "MD", "25": "MA", "26": "MI", "27": "MN", "28": "MS", "29": "MO", "30": "MT", "31": "NE", "32": "NV", "33": "NH", "34": "NJ", "35": "NM", "36": "NY", "37": "NC", "38": "ND", "39": "OH", "40": "OK", "41": "OR", "42": "PA", "44": "RI", "45": "SC", "46": "SD", "47": "TN", "48": "TX", "49": "UT", "50": "VT", "51": "VA", "53": "WA", "54": "WV", "55": "WI", "56": "WY", "72": "PR"};


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


    .on('mouseover', function(event, d) {
        const stateName = d.properties.NAME || 'Unknown State'; // Handle undefined state name
        const stateNumber = d.properties.STATE;
        const state = stateNumberMapping[stateNumber] || 'Unknown State';
        const avgRate = stateRates[state] || [];
        const avgRateValue = avgRate.length > 0 ? d3.mean(avgRate) : 'No Data Available';
        tooltip.transition()
            .duration(200)
            .style('opacity', .9);
        tooltip.html('<strong>' + stateName + '</strong><br>Avg Rate: ' + avgRateValue)
            .style('left', (event.pageX) + 'px')
            .style('top', (event.pageY - 28) + 'px');
    })
    .on('mouseout', function(d) {
        tooltip.transition()
            .duration(500)
            .style('opacity', 0);
    });

    .attr('fill', d => {
        const stateNumber = d.properties.STATE;
        const state = stateNumberMapping[stateNumber] || 'Unknown State';
        const avgRate = stateRates[state] || [];
        if (avgRate.length === 0) return 'url(#noDataPattern)'; // Use pattern for states with no data
        const avgRateValue = d3.mean(avgRate);
        return colorScale(avgRateValue);
    })

    // Add labels and axes to the bar chart
    const barSvg = d3.select('#bar-chart').append('svg').attr('width', width).attr('height', height);
    const xScale = d3.scaleBand().domain(Object.keys(stateRates)).range([0, width]).padding(0.1);
    const yScale = d3.scaleLinear().domain([0, maxRate]).range([height, 0]);

    // Create bars
    barSvg.selectAll('.bar').data(csvData).enter().append('rect')
        .attr('class', 'bar')
        .attr('x', d => xScale(d.provider_state))
        .attr('y', d => yScale(d.negotiated_rate))
        .attr('width', xScale.bandwidth())
        .attr('height', d => height - yScale(d.negotiated_rate))
        .attr('fill', 'steelblue');

    // Add x-axis
    barSvg.append('g').attr('transform', 'translate(0,' + height + ')').call(d3.axisBottom(xScale));

    // Add y-axis
    barSvg.append('g').call(d3.axisLeft(yScale));

    // Add x-axis label
    barSvg.append('text')
        .attr('transform', 'translate(' + (width / 2) + ' ,' + (height + margin.top + 20) + ')')
        .style('text-anchor', 'middle')
        .text('State');

    // Add y-axis label
    barSvg.append('text')
        .attr('transform', 'rotate(-90)')
        .attr('y', 0 - margin.left)
        .attr('x', 0 - (height / 2))
        .attr('dy', '1em')
        .style('text-anchor', 'middle')
        .text('Negotiated Rate ($)');
// Load and render the map
d3.json(geojsonUrl).then(stateData => {
    // Load and render the bar chart
    d3.csv(csvUrl).then(csvData => {
        const stateRates = {};
        csvData.forEach(d => {
            const state = d.provider_state;
            if (!stateRates[state]) stateRates[state] = [];
            stateRates[state].push(+d.negotiated_rate);
        });

        const avgRates = Object.values(stateRates).map(rates => d3.mean(rates));
        const minRate = d3.min(avgRates);
        const maxRate = d3.max(avgRates);

        colorScale.domain([minRate, maxRate]);

        // Correctly match states and handle undefined values
        svgMap.selectAll('path')
            .data(stateData.features)
            .enter()
            .append('path')
            .attr('d', path)
            .attr('fill', d => {
                
    const stateNumber = d.properties.STATE;
    const state = stateNumberMapping[stateNumber] || 'Unknown State'; // Correctly access the state abbreviation from GeoJSON data
                    const avgRate = stateRates[state] || [];
    const avgRateValue = avgRate.length > 0 ? d3.mean(avgRate) : minRate;
                    return colorScale(avgRateValue);
            })
            .attr('stroke', 'white')
            .on('mouseover', function(d) {
                const stateName = d.properties.NAME || 'Unknown State'; // Handle undefined state name
                tooltip.transition()
                    .duration(200)
                    .style('opacity', .9);
                tooltip.html(stateName)
                    .style('left', (d3.event.pageX) + 'px')
                    .style('top', (d3.event.pageY - 28) + 'px');
            })
            .on('mouseout', function(d) {
                tooltip.transition()
                    .duration(500)
                    .style('opacity', 0);
            });

        svgMap.append('text')
            .attr('x', width / 2)
            .attr('y', 20)
            .attr('text-anchor', 'middle')
            .attr('font-size', '20px')
            .attr('font-weight', 'bold')
            .text('Average Negotiated Rates by State');

        const svgBar = d3.select('#bar-chart')
            .append('svg')
            .attr('width', width)
            .attr('height', height);

        const barData = Object.keys(stateRates).map(state => {
            return {
                state: state,
                avgRate: d3.mean(stateRates[state]) || 0 // Handle undefined average rate
            };
        });

        const xScale = d3.scaleBand()
            .domain(barData.map(d => d.state))
            .range([0, width])
            .padding(0.1);

        const yScale = d3.scaleLinear()
            .domain([0, maxRate])
            .range([height, 0]);

        svgBar.selectAll('rect')
            .data(barData)
            .enter()
            .append('rect')
            .attr('x', d => xScale(d.state))
            .attr('y', d => yScale(d.avgRate))
            .attr('width', xScale.bandwidth())
            .attr('height', d => height - yScale(d.avgRate))
            .attr('fill', d => colorScale(d.avgRate))
            .on('mouseover', function(d) {
                const avgRateStr = d.avgRate ? d.avgRate.toFixed(2) : 'Unknown Rate'; // Handle undefined average rate
                tooltip.transition()
                    .duration(200)
                    .style('opacity', .9);
                    tooltip.html(stateNumberMapping[d.state] + ' (' + d.state + ')' + '<br>' + avgRateStr)
                    .style('left', (d3.event.pageX) + 'px')
                    .style('top', (d3.event.pageY - 28) + 'px');
            })
            .on('mouseout', function(d) {
                tooltip.transition()
                    .duration(500)
                    .style('opacity', 0);
            });

        svgBar.append('text')
            .attr('x', width / 2)
            .attr('y', 20)
            .attr('text-anchor', 'middle')
            .attr('font-size', '20px')
            .attr('font-weight', 'bold')
            .text('Average Negotiated Rates by State');
    });
});