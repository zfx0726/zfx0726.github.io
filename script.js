
const stateNumberMapping = {"01": "AL", "02": "AK", "04": "AZ", "05": "AR", "06": "CA", "08": "CO", "09": "CT", "10": "DE", "11": "DC", "12": "FL", "13": "GA", "15": "HI", "16": "ID", "17": "IL", "18": "IN", "19": "IA", "20": "KS", "21": "KY", "22": "LA", "23": "ME", "24": "MD", "25": "MA", "26": "MI", "27": "MN", "28": "MS", "29": "MO", "30": "MT", "31": "NE", "32": "NV", "33": "NH", "34": "NJ", "35": "NM", "36": "NY", "37": "NC", "38": "ND", "39": "OH", "40": "OK", "41": "OR", "42": "PA", "44": "RI", "45": "SC", "46": "SD", "47": "TN", "48": "TX", "49": "UT", "50": "VT", "51": "VA", "53": "WA", "54": "WV", "55": "WI", "56": "WY", "72": "PR"};

// The top billing codes with their names
const billingCodes = {
    '47562': 'LAPAROSCOPY SURG CHOLECYSTECTOMY',
    '15777': 'IMPLNT BIO IMPLNT FOR SOFT TISSUE REINFORCEMENT',
    '33249': 'INSJ//RPLCMT PERM DFB W//TRNSVNS LDS 1//DUAL CHMBR',
    '77373': 'STEREOTACTIC BODY RADIATION DELIVERY',
    '36522': 'PHOTOPHERESIS EXTRACORPOREAL'
};

// Initialize with a default billing code
let selectedBillingCode = '47562';

// Load the GeoJSON and CSV data
const geojsonUrl = 'https://zfx0726.github.io/data/gz_2010_us_040_00_5m.json';
const csvUrl = 'https://zfx0726.github.io/data/th.csv';

// Set up the SVG dimensions
const width = 900;
const height = 500;

// Create a color scale
const colorScale = d3.scaleSequential().interpolator(d3.interpolateBlues);

// Set up the map projection
const projection = d3.geoAlbersUsa().translate([width / 2, height / 2]).scale(1000);
const path = d3.geoPath().projection(projection);

// Create the SVG container for the map
const svgMap = d3.select('#visualization-section').append('svg').attr('width', width).attr('height', height);

// Create a tooltip
const tooltip = d3.select('body').append('div').attr('class', 'tooltip').style('opacity', 0);

function renderVisualizations(stateData, csvData) {
    const stateRates = {};
    csvData.filter(d => d.billing_code == selectedBillingCode).forEach(d => {
        const state = d.provider_state;
        if (!stateRates[state]) stateRates[state] = [];
        stateRates[state].push(+d.negotiated_rate);
    });

    const avgRates = Object.values(stateRates).map(rates => d3.mean(rates));
    const minRate = d3.min(avgRates);
    const maxRate = d3.max(avgRates);

    colorScale.domain([minRate, maxRate]);

    // Correctly match states and handle undefined values
    svgMap.selectAll('path').remove();
    svgMap.selectAll('path')
        .data(stateData.features)
        .enter()
        .append('path')
        .attr('d', path)
        .attr('fill', d => {
            const stateNumber = d.properties.STATE;
            const state = stateNumberMapping[stateNumber] || 'Unknown State';
            const avgRate = stateRates[state] || [];
            const avgRateValue = avgRate.length > 0 ? d3.mean(avgRate) : minRate;
            return colorScale(avgRateValue);
        })
        .attr('stroke', 'white')
        .on('mouseover', (event, d) => {
            const stateNumber = d.properties.STATE;
            const state = stateNumberMapping[stateNumber] || 'Unknown State';
            const avgRate = stateRates[state] || [];
            const avgRateValue = avgRate.length > 0 ? d3.mean(avgRate) : 'Unknown Rate';
            tooltip.transition().duration(200).style('opacity', .9);
            tooltip.html(state + '<br>' + (avgRateValue !== 'Unknown Rate' ? '$' + avgRateValue.toLocaleString('en-US', { maximumFractionDigits: 0 }) : avgRateValue))
                   .style('left', (event.pageX) + 'px')
                   .style('top', (event.pageY - 28) + 'px')
                   .attr('stroke', '#ff4500')
                   .attr('stroke-width', '2');
        })
        .on('mouseout', d => {
            tooltip.transition().duration(500).style('opacity', 0).attr('stroke', 'white').attr('stroke-width', '1');
        });

    // Code to render the bar chart can be added here similar to the map rendering, ensure to remove the previous bars before appending new ones

            // Remove the existing bar chart SVG
        d3.select('#visualization-section').selectAll('svg.bar-chart').remove();


        // Bar Chart Rendering
        // Create a new SVG container for the bar chart
    const svgBar = d3.select('#visualization-section').append('svg')
        .attr('width', width)
        .attr('height', height)
        .attr('class', 'bar-chart');

            const barData = Object.keys(stateRates).map(state => {
                return {
                    state: state,
                    avgRate: d3.mean(stateRates[state]) || 0
                };
            });

            // Sort the barData array in descending order by avgRate
            barData.sort((a, b) => b.avgRate - a.avgRate);

            const xScale = d3.scaleBand().domain(barData.map(d => d.state)).range([0, width]).padding(0.1);
            const yScale = d3.scaleLinear().domain([0, maxRate]).range([height, 0]);

            svgBar.selectAll('rect').remove();
            svgBar.selectAll('rect')
                .data(barData)
                .enter()
                .append('rect')
                .attr('x', d => xScale(d.state))
                .attr('y', d => yScale(d.avgRate))
                .attr('width', xScale.bandwidth())
                .attr('height', d => height - yScale(d.avgRate))
                .attr('fill', d => colorScale(d.avgRate))
                .on('mouseover', (event, d) => {
                    const state = d.state || 'Unknown State';
                    const avgRateStr = d.avgRate ? `$${d.avgRate.toFixed(0).toLocaleString('en-US', { maximumFractionDigits: 0 })}` : 'Unknown Rate';
                    tooltip.transition().duration(200).style('opacity', .9);
                    tooltip.html(state + '<br>' + avgRateStr)
                           .style('left', (event.pageX - tooltip.node().offsetWidth / 2) + 'px')
                           .style('top', (event.pageY - tooltip.node().offsetHeight - 10) + 'px')
                           .attr('fill', '#ff4500');
                })
                .on('mouseout', d => {
                    tooltip.transition().duration(500).style('opacity', 0).attr('fill', d => colorScale(d.avgRate));
                });

}

// Load and render the map and bar chart
d3.json(geojsonUrl).then(stateData => {
    d3.csv(csvUrl).then(csvData => {
        renderVisualizations(stateData, csvData);

        // Event listener for the dropdown change event
        document.getElementById('billing-code-filter').addEventListener('change', function (e) {
            selectedBillingCode = e.target.value;
            renderVisualizations(stateData, csvData);
        });
    });
});
