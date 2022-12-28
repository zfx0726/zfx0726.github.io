// Chart Setup

// Set up the chart for Large Language Models
const width = 800;
const height = 600;
const svg = d3.select('#chart')
  .append('svg')
  .attr('width', width)
  .attr('height', height);


// Set up the chart for Financial Markets
const financialWidth = 800;
const financialHeight = 600;
const financialSvg = d3.select('#financial-markets-chart')
  .append('svg')
  .attr('width', financialWidth)
  .attr('height', financialHeight);



// Data

// Data for the Large Language Models graph
const nodes = [
  {id: 'GPT-3'},
  {id: 'BERT'},
  {id: 'XLNet'},
  {id: 'RoBERTa'},
  {id: 'ALBERT'},
  {id: 'ELECTRA'}
];

const links = [
  {source: 'GPT-3', target: 'BERT'},
  {source: 'GPT-3', target: 'XLNet'},
  {source: 'GPT-3', target: 'RoBERTa'},
  {source: 'GPT-3', target: 'ALBERT'},
  {source: 'GPT-3', target: 'ELECTRA'},
  {source: 'BERT', target: 'XLNet'},
  {source: 'BERT', target: 'RoBERTa'},
  {source: 'BERT', target: 'ALBERT'},
  {source: 'BERT', target: 'ELECTRA'},
  {source: 'XLNet', target: 'RoBERTa'},
  {source: 'XLNet', target: 'ALBERT'},
  {source: 'XLNet', target: 'ELECTRA'},
  {source: 'RoBERTa', target: 'ALBERT'},
  {source: 'RoBERTa', target: 'ELECTRA'},
  {source: 'ALBERT', target: 'ELECTRA'}
];

// Data for the Financial Markets graph
const financialNodes = [
  {id: 'Stock Market'},
  {id: 'Bond Market'},
  {id: 'Forex Market'},
  {id: 'Commodity Market'}
];

const financialLinks = [
  {source: 'Stock Market', target: 'Bond Market'},
  {source: 'Stock Market', target: 'Forex Market'},
  {source: 'Stock Market', target: 'Commodity Market'},
  {source: 'Bond Market', target: 'Forex Market'},
  {source: 'Bond Market', target: 'Commodity Market'},
  {source: 'Forex Market', target: 'Commodity Market'}
];



// Force-directed layouts

// Set up the force-directed layout for the Large Language Models graph
const simulation = d3.forceSimulation()
  .force('link', d3.forceLink().id(d => d.id))
  .force('charge', d3.forceManyBody().strength(-500))
  .force('center', d3.forceCenter(width / 2, height / 2));
  
// Set up the force-directed layout for Financial Markets
const financialSimulation = d3.forceSimulation()
  .force('link', d3.forceLink().id(d => d.id))
  .force('charge', d3.forceManyBody().strength(-500))
  .force('center', d3.forceCenter(financialWidth / 2, financialHeight / 2));
  
  
// Set up the drag functions
function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}


// Link elements

// Set up the Large Langage Models link elements
const link = svg.append('g')
  .attr('class', 'links')
  .selectAll('line')
  .data(links)
  .enter().append('line');

// Set up the Financial Markets link elements
const financialLink = financialSvg.append('g')
  .attr('class', 'financial-links')
  .selectAll('line')
  .data(financialLinks)
  .enter().append('line');



// Node elements

// Set up the Large Language Models node elements
const node = svg.append('g')
  .attr('class', 'nodes')
  .selectAll('circle')
  .data(nodes)
  .enter().append('circle')
  .attr('r', 10)
  .call(d3.drag()
    .on("start", dragstarted)
    .on("drag", dragged)
    .on("end", dragended));
  

// Set up the Financial Markets node elements
const financialNode = financialSvg.append('g')
  .attr('class', 'financial-nodes')
  .selectAll('circle')
  .data(financialNodes)
  .enter().append('circle')
  .attr('r', 10)
  .call(d3.drag()
    .on("start", dragstarted)
    .on("drag", dragged)
    .on("end", dragended));

  

// Labels

// Create the labels for the Large Language Models graph
const label = svg.append('g')
  .attr('class', 'labels')
  .selectAll('text')
  .data(nodes)
  .enter().append('text')
  .text(d => d.id)
  .attr('dy', '0.35em');
  
const financialLabel = financialSvg.append('g')
  .attr('class', 'financial-labels')
  .selectAll('text')
  .data(financialNodes)
  .enter().append('text')
  .text(d => d.id)
  .attr('dy', '0.35em');
  


// Update positions

// Update the position of the nodes and links
function ticked() {
  link
    .attr('x1', d => d.source.x)
    .attr('y1', d => d.source.y)
    .attr('x2', d => d.target.x)
    .attr('y2', d => d.target.y);

  node
    .attr('cx', d => d.x)
    .attr('cy', d => d.y);

  label
    .attr('x', d => d.x)
    .attr('y', d => d.y);
}
  

// Update the position of the nodes and links for the Financial Markets graph
function financialTicked() {
  financialLink
    .attr('x1', d => d.source.x)
    .attr('y1', d => d.source.y)
    .attr('x2', d => d.target.x)
    .attr('y2', d => d.target.y);

  financialNode
    .attr('cx', d => d.x)
    .attr('cy', d => d.y);

  financialLabel
    .attr('x', d => d.x)
    .attr('y', d => d.y);
}


// Set nodes, links, and simulation

// Set the nodes, links, and simulation for the Large Language Models graph
simulation
  .nodes(nodes)
  .on('tick', ticked);

simulation.force('link')
  .links(links);

// Set the nodes, links, and simulation for the Financial Markets graph
financialSimulation
  .nodes(financialNodes)
  .on('tick', financialTicked);

financialSimulation.force('link')
  .links(financialLinks);

// Set up the sidebar
const sidebar = d3.select('#sidebar');

sidebar.selectAll('li')
  .on('click', function() {
    // Get the graph name
    const graphName = d3.select(this).attr('data-graph');

    // Update the selected item
    sidebar.selectAll('li').classed('selected', false);
    d3.select(this).classed('selected', true);

    // Update the displayed graph
    d3.selectAll('.graph').classed('selected', false);
    d3.select(`#${graphName}`).classed('selected', true);
  });
