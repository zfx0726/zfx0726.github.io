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
  { id: "GPT-3", organization: "OpenAI" },
  { id: "BERT", organization: "Google Research" },
  { id: "RoBERTa", organization: "Facebook AI Research" },
  { id: "ALBERT", organization: "Google Research" },
  { id: "ELECTRA", organization: "Google Research" },
  { id: "XLNet", organization: "Google Research" },
  { id: "Davinci", organization: "OpenAI" },
  { id: "T5", organization: "Google Research" },
  { id: "Megatron", organization: "OpenAI" },
  { id: "Reformer", organization: "Google Research" },
  { id: "LAMB", organization: "Google Research" },
  { id: "ADAM", organization: "Google Research" },
  { id: "MT-DNN", organization: "Microsoft Research Asia" },
  { id: "XLM", organization: "Facebook AI Research" },
  { id: "MASS", organization: "Google Research" },
  { id: "BART", organization: "Facebook AI Research" },
  { id: "GPT-2", organization: "OpenAI" },
  { id: "XLM-RoBERTa", organization: "Facebook AI Research" },
  { id: "NEZHA", organization: "Baidu Research" },
  { id: "ERNIE", organization: "Baidu Research" },
  { id: "ERNIE 2.0", organization: "Baidu Research" },
  { id: "Transformer-XL", organization: "Google Research" },
  { id: "CTRL", organization: "OpenAI" },
  { id: "PEGASUS", organization: "Google Research" },
  { id: "LXMERT", organization: "Baidu Research" },
  { id: "SpanBERT", organization: "Google Research" },
  { id: "Longformer", organization: "Facebook AI Research" },
  { id: "XLM-ProphetNet", organization: "Facebook AI Research" },
  { id: "DeBERTa", organization: "Baidu Research" },
  { id: "TextGPT", organization: "Microsoft Research Asia" },
  { id: "BaiduNet", organization: "Baidu Research" },
  { id: "ERNIE-Vi", organization: "Baidu Research" },
  { id: "DistilBERT", organization: "Hugging Face" },
  { id: "XLNet-base", organization: "Google Research" },
  { id: "OmegleBERT", organization: "Omegle" },
  { id: "OpenAI GPT", organization: "OpenAI" },
  { id: "BaiduBERT", organization: "Baidu Research" },
  { id: "GPT", organization: "OpenAI" },
  { id: "xlnet-base-cased", organization: "Google Research" },
  { id: "GPT-1", organization: "OpenAI" },
  { id: "Transformer-XL-wt103", organization: "Google Research"},
  { id: "Transformer-XL-wt103", organization: "Google Research" },
  { id: "Bert-base", organization: "Google Research" },
  { id: "DistilGPT2", organization: "Hugging Face" },
  { id: "GPT-2-117M", organization: "OpenAI" },
  { id: "RoBERTa-base", organization: "Facebook AI Research" },
  { id: "Roberta-base", organization: "Facebook AI Research" },
  { id: "GPT-2-small", organization: "OpenAI" },
  { id: "GPT-2-medium", organization: "OpenAI" },
  { id: "GPT-2-large", organization: "OpenAI" },
  { id: "GPT-2-xl", organization: "OpenAI" }
];

const links = [
  { source: "GPT-3", target: "GPT-2" },
  { source: "GPT-2", target: "GPT-1" },
  { source: "GPT-1", target: "GPT" },
  { source: "GPT", target: "OpenAI GPT" },
  { source: "RoBERTa", target: "BERT" },
  { source: "ALBERT", target: "BERT" },
  { source: "ELECTRA", target: "BERT" },
  { source: "XLNet", target: "Transformer-XL" },
  { source: "T5", target: "Transformer-XL" },
  { source: "Megatron", target: "GPT-2" },
  { source: "Reformer", target: "Transformer-XL" },
  { source: "LAMB", target: "BERT" },
  { source: "ADAM", target: "BERT" },
  { source: "MT-DNN", target: "BERT" },
  { source: "XLM", target: "BERT" },
  { source: "MASS", target: "BERT" },
  { source: "BART", target: "BERT" },
  { source: "XLM-RoBERTa", target: "RoBERTa" },
  { source: "ERNIE", target: "BERT" },
  { source: "ERNIE 2.0", target: "ERNIE" },
  { source: "PEGASUS", target: "Transformer-XL" },
  { source: "LXMERT", target: "BERT" },
  { source: "SpanBERT", target: "BERT" },
  { source: "Longformer", target: "Transformer-XL" },
  { source: "XLM-ProphetNet", target: "XLM" },
  { source: "DeBERTa", target: "BERT" },
  { source: "TextGPT", target: "GPT-2" },
  { source: "BaiduNet", target: "BERT" },
  { source: "ERNIE-Vi", target: "ERNIE" },
  { source: "DistilBERT", target: "BERT" },
  { source: "XLNet-base", target: "XLNet" },
  { source: "BaiduBERT", target: "BERT" },
  { source: "xlnet-base-cased", target: "XLNet" },
  { source: "Transformer-XL-wt103", target: "Transformer-XL" },
  { source: "Bert-base", target: "BERT" },
  { source: "DistilGPT2", target: "GPT-2" },
  { source: "GPT-2-117M", target: "GPT-2" },
  { source: "RoBERTa-base", target: "RoBERTa" },
  { source: "Roberta-base", target: "RoBERTa" },
  { source: "GPT-2-small", target: "GPT-2" },
  { source: "GPT-2-medium", target: "GPT-2" },
  { source: "GPT-2-large", target: "GPT-2" },
  { source: "GPT-2-xl", target: "GPT-2" }
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
  .force('charge', d3.forceManyBody().strength(-500).distanceMax(100))
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


// Set up the zoom behavior
const zoom = d3.zoom()
  .scaleExtent([-1, 100])
  .on('zoom', zoomed);

// Add the zoom behavior to the SVG element
// Set the initial zoom level
zoom.transform(svg, d3.zoomIdentity.scale(.7));

svg.call(zoom);

// Set up the zoom function
function zoomed() {
  // Update the transform attribute of the nodes and labels group
  node.attr('transform', d3.event.transform);
  label.attr('transform', d3.event.transform);

  // Update the transform attribute of the links group
  link.attr('transform', d3.event.transform);
}

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