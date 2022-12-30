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
var nodes = [  { id: "BERT", type: "language model", domain: "NLP", applications: ["text classification", "question answering"] },
  { id: "GPT", type: "language model", domain: "NLP", applications: ["language generation"] },
  { id: "Transformer", type: "language model", domain: "NLP", applications: ["machine translation"] },
  { id: "BioBERT", type: "language model", domain: "biomedical text mining", applications: ["text classification"] },
  { id: "GPT-3", type: "language model", domain: "NLP", applications: ["language generation", "question answering"] },
  { id: "NLP", type: "domain" },
  { id: "text classification", type: "application" },
  { id: "question answering", type: "application" },
  { id: "language generation", type: "application" },
  { id: "machine translation", type: "application" },
  { id: "biomedical text mining", type: "domain" },
  { id: "MIT", type: "research group", researchers: ["Ian Goodfellow", "Yoshua Bengio"] },
  { id: "OpenAI", type: "research group", researchers: ["Dario Amodei", "Ian Goodfellow"] },
  { id: "Ian Goodfellow", type: "researcher", research_groups: ["MIT", "OpenAI"] },
  { id: "Yoshua Bengio", type: "researcher", research_groups: ["MIT"] },
  { id: "Dario Amodei", type: "researcher", research_groups: ["OpenAI"] },
  { id: "MNIST", type: "dataset", language_models: ["BERT", "GPT"] },
  { id: "BioMedical Corpus", type: "dataset", language_models: ["BioBERT"] },
  { id: "WebText", type: "dataset", language_models: ["GPT-3"] }
];


var links = [
  { source: "BERT", target: "NLP", type: "belongs to" },
  { source: "BERT", target: "text classification", type: "applies to" },
  { source: "BERT", target: "question answering", type: "applies to" },
  { source: "GPT", target: "NLP", type: "belongs to" },
  { source: "GPT", target: "language generation", type: "applies to" },
  { source: "Transformer", target: "NLP", type: "belongs to" },
  { source: "Transformer", target: "machine translation", type: "applies to" },
  { source: "BioBERT", target: "biomedical text mining", type: "belongs to" },
  { source: "BioBERT", target: "text classification", type: "applies to" },
  { source: "GPT-3", target: "NLP", type: "belongs to" },
  { source: "GPT-3", target: "language generation", type: "applies to" },
  { source: "GPT-3", target: "question answering", type: "applies to" },
  { source: "MIT", target: "Ian Goodfellow", type: "affiliated with" },
  { source: "MIT", target: "Yoshua Bengio", type: "affiliated with" },
  { source: "OpenAI", target: "Dario Amodei", type: "affiliated with" },
  { source: "OpenAI", target: "Ian Goodfellow", type: "affiliated with" },
  { source: "Ian Goodfellow", target: "MIT", type: "affiliated with" },
  { source: "Ian Goodfellow", target: "OpenAI", type: "affiliated with" },
  { source: "Yoshua Bengio", target: "MIT", type: "affiliated with" },
  { source: "Dario Amodei", target: "OpenAI", type: "affiliated with" },
  { source: "MNIST", target: "BERT", type: "used by" },
  { source: "MNIST", target: "GPT", type: "used by" },
  { source: "BioMedical Corpus", target: "BioBERT", type: "used by" },
  { source: "WebText", target: "GPT-3", type: "used by" }
];


// Data for the Financial Markets graph
const financialNodes = [
{id: "Stock Markets", type: "market"},
{id: "Forex Markets", type: "market"},
{id: "Commodity Markets", type: "market"},
{id: "Bond Markets", type: "market"},
{id: "Derivatives Markets", type: "market"},
{id: "Real Estate Markets", type: "market"},
{id: "Cryptocurrency Markets", type: "market"},
{id: "Investment Banks", type: "financial institution"},
{id: "Hedge Funds", type: "financial institution"},
{id: "Government Regulators", type: "regulatory agency"},
{id: "Economic Indicators", type: "data"},
{id: "Traders", type: "professional"},
{id: "Brokers", type: "professional"},
{id: "Trading Strategies", type: "tool"},
{id: "Financial Instruments", type: "tool"},
{id: "Market Participants", type: "category"},
{id: "Market Data", type: "data"}
];

const financialLinks = var links = [
{source: "Stock Markets", target: "Investment Banks", type: "participant"},
{source: "Stock Markets", target: "Hedge Funds", type: "participant"},
{source: "Stock Markets", target: "Government Regulators", type: "regulatory"},
{source: "Forex Markets", target: "Investment Banks", type: "participant"},
{source: "Forex Markets", target: "Hedge Funds", type: "participant"},
{source: "Forex Markets", target: "Government Regulators", type: "regulatory"},
{source: "Commodity Markets", target: "Investment Banks", type: "participant"},
{source: "Commodity Markets", target: "Hedge Funds", type: "participant"},
{source: "Commodity Markets", target: "Government Regulators", type: "regulatory"},
{source: "Bond Markets", target: "Investment Banks", type: "participant"},
{source: "Bond Markets", target: "Hedge Funds", type: "participant"},
{source: "Bond Markets", target: "Government Regulators", type: "regulatory"},
{source: "Derivatives Markets", target: "Investment Banks", type: "participant"},
{source: "Derivatives Markets", target: "Hedge Funds", type: "participant"},
{source: "Derivatives Markets", target: "Government Regulators", type: "regulatory"},
{source: "Real Estate Markets", target: "Investment Banks", type: "participant"},
{source: "Real Estate Markets", target: "Hedge Funds", type: "participant"},
{source: "Real Estate Markets", target: "Government Regulators", type: "regulatory"},
{source: "Cryptocurrency Markets", target: "Investment Banks", type: "participant"},
{source: "Cryptocurrency Markets", target: "Hedge Funds", type: "participant"},
{source: "Cryptocurrency Markets", target: "Government Regulators", type: "regulatory"},
{source: "Investment Banks", target: "Traders", type: "employee"},
{source: "Investment Banks", target: "Brokers", type: "employee"},
{source: "Hedge Funds", target: "Traders", type: "employee"},
{source: "Hedge Funds", target: "Brokers", type: "employee"},
{source: "Government Regulators", target: "Economic Indicators", type: "data"},
{source: "Traders", target: "Trading Strategies", type: "tool"},
{source: "Traders", target: "Financial Instruments", type: "tool"},
{source: "Brokers", target: "Trading Strategies", type: "tool"},
{source: "Brokers", target: "Financial Instruments", type: "tool"},
{source: "Financial Instruments", target: "Market Data", type: "data"},
{source: "Market Participants", target: "Market Data", type: "data"}
];



// Force-directed layouts

// Set up the force-directed layout for the Large Language Models graph
const simulation = d3.forceSimulation()
  .force('link', d3.forceLink().id(d => d.id))
  .force('charge', d3.forceManyBody().strength(-300).distanceMax(150))
  .force('center', d3.forceCenter(width / 2, height / 2));
 
// Set up the force-directed layout for Financial Markets
const financialSimulation = d3.forceSimulation()
  .force('link', d3.forceLink().id(d => d.id))
  .force('charge', d3.forceManyBody().strength(-300).distanceMax(150))
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


// Add a label to each link showing its type
const linkLabel = svg.append('g')
  .attr('class', 'link-labels')
  .selectAll('text')
  .data(links)
  .enter().append('text')
  .style("font-size", "8px")
  .style("fill", "white")
  .text(function(d) { return d.type; })
  .attr("text-anchor", "middle")
  .attr("dy", "0");


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
   
// Position the link labels halfway between the source and target nodes
  linkLabel
    .attr('x', d => (d.source.x + d.target.x) / 2)
    .attr('y', d => (d.source.y + d.target.y) / 2);
   
// Rotate the link labels to follow the links
  linkLabel.attr('transform', d => {
    const x = (d.source.x + d.target.x) / 2;
    const y = (d.source.y + d.target.y) / 2;
    const dx = d.target.x - d.source.x;
    const dy = d.target.y - d.source.y;
    const angle = Math.atan2(dy, dx) * 180 / Math.PI;
    return `rotate(${angle}, ${x}, ${y}) translate(${d3.event.transform.x},${d3.event.transform.y}) scale(${d3.event.transform.k})`;
  });
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
zoom.transform(svg, d3.zoomIdentity.scale(1));

svg.call(zoom);

// Set up the zoom function
function zoomed() {
  // Update the transform attribute of the nodes and labels group
  node.attr('transform', d3.event.transform);
  label.attr('transform', d3.event.transform);
  linkLabel.attr('transform', d3.event.transform);

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
