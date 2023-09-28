
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
            .on('mouseover', (event, d) => { // Receive event as the first argument
                                const stateNumber = d.properties.STATE; // Correctly access the state number from GeoJSON data
                                const state = stateNumberMapping[stateNumber] || 'Unknown State'; // Correctly access the state abbreviation
                                const avgRate = stateRates[state] || [];
                                const avgRateValue = avgRate.length > 0 ? d3.mean(avgRate) : 'Unknown Rate';
                tooltip.transition()
                    .duration(200)
                    .style('opacity', .9);
                tooltip.html(state + '<br>' + (avgRateValue !== 'Unknown Rate' ? '$' + avgRateValue.toLocaleString('en-US', { maximumFractionDigits: 0 }) : avgRateValue))

                            .style('left', (event.pageX) + 'px')
                            .style('top', (event.pageY - 28) + 'px')
                    .attr('stroke', '#ff4500') // Or any color that suits your design
                    .attr('stroke-width', '2');
            })


                    

            .on('mouseout', d => {
                tooltip.transition()
                    .duration(500)
                    .style('opacity', 0)
                    .attr('stroke', 'white')
                    .attr('stroke-width', '1');
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
            .on('mouseover', (event, d) => { // Receive event as the first argument
                const state = d.state || 'Unknown State'; // Access state abbreviation directly from d.state
                const avgRateStr = d.avgRate ? `$${d.avgRate.toFixed(0).toLocaleString('en-US', { maximumFractionDigits: 0 })}` : 'Unknown Rate';
                tooltip.transition()
                    .duration(200)
                    .style('opacity', .9);
                tooltip.html(state + '<br>' + avgRateStr) // Updated tooltip content

                    .style('left', (event.pageX - tooltip.node().offsetWidth / 2) + 'px')  // Center the tooltip horizontally relative to the cursor
                    .style('top', (event.pageY - tooltip.node().offsetHeight - 10) + 'px')  // Position the tooltip above the cursor
                    .attr('fill', '#ff4500'); // Or any color that suits your design

            })

            .on('mouseout', d => {
                tooltip.transition()
                    .duration(500)
                    .style('opacity', 0)
                    .attr('fill', d => colorScale(d.avgRate));

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
