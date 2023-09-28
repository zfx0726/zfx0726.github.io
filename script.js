
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
    // Select the SVG container
    var svg = d3.select('#visualization');

    if (svg.empty()) {
        console.error('Unable to find #visualization');
        return;
    }

    // Clear any existing visualization
    svg.selectAll('*').remove();

    // Append the tooltip div to the body
    var tooltip = d3.select("body").append("div").attr("class", "tooltip").style("opacity", 0);

    // Define the projection and path
    var projection = d3.geoAlbersUsa().fitSize([960, 600], us);
    var path = d3.geoPath().projection(projection);

    // Draw states
    svg.selectAll('path')
        .data(us.features)
        .enter()
        .append('path')
        .attr('d', path)
        .style('fill', function (d) {
            return data.prices[stateCodeMapping[d.properties.STATE]] ? 'blue' : 'grey';
        })
        .on('mouseover', function (event, d) {
            var stateCode = stateCodeMapping[d.properties.STATE];
            var price = data.prices[stateCode] ? data.prices[stateCode].price : 'N/A';
            tooltip.transition()
                .duration(200)
                .style("opacity", .9);
            tooltip.html("State: " + stateCode + "<br/>" + "Price: " + price)
                .style("left", (event.pageX) + "px")
                .style("top", (event.pageY - 28) + "px");
        })
        .on('mouseout', function (d) {
            tooltip.transition()
                .duration(500)
                .style("opacity", 0);
        });
}