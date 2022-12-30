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
var nodes = [  
{id: "Alex Krizhevsky", name: "Alex Krizhevsky"},
{id: "Ali Ghodsi", name: "Ali Ghodsi"},
{id: "BERT", name: "BERT"},
{id: "BioBERT", name: "BioBERT"},
{id: "BioMedical Corpus", name: "BioMedical Corpus"},
{id: "biomedical text mining", name: "biomedical text mining"},
{id: "BookCorpus", name: "BookCorpus"},
{id: "Christopher J.C. Burges", name: "Christopher J.C. Burges"},
{id: "CIFAR", name: "CIFAR"},
{id: "Common Crawl", name: "Common Crawl"},
{id: "Corinna Cortes", name: "Corinna Cortes"},
{id: "Dario Amodei", name: "Dario Amodei"},
{id: "Deng et al.", name: "Deng et al."},
{id: "dependency parsing", name: "dependency parsing"},
{id: "Google", name: "Google"},
{id: "Google Brain", name: "Google Brain"},
{id: "GPT", name: "GPT"},
{id: "GPT-3", name: "GPT-3"},
{id: "Ian Goodfellow", name: "Ian Goodfellow"},
{id: "Ilya Sutskever", name: "Ilya Sutskever"},
{id: "image classification", name: "image classification"},
{id: "ImageNet", name: "ImageNet"},
{id: "Jacob Devlin", name: "Jacob Devlin"},
{id: "John Schulman", name: "John Schulman"},
{id: "Joonseong Kim", name: "Joonseong Kim"},
{id: "Kenton Lee", name: "Kenton Lee"},
{id: "Kristina Toutanova", name: "Kristina Toutanova"},
{id: "language generation", name: "language generation"},
{id: "language modeling", name: "language modeling"},
{id: "LeCun et al.", name: "LeCun et al."},
{id: "Libin Sun", name: "Libin Sun"},
{id: "Liu et al.", name: "Liu et al."},
{id: "machine translation", name: "machine translation"},
{id: "Ming-Wei Chang", name: "Ming-Wei Chang"},
{id: "MIT", name: "MIT"},
{id: "MNIST", name: "MNIST"},
{id: "named entity recognition", name: "named entity recognition"},
{id: "News Crawl", name: "News Crawl"},
{id: "Ningyu Zhang", name: "Ningyu Zhang"},
{id: "NLP", name: "NLP"},
{id: "object detection", name: "object detection"},
{id: "OpenAI", name: "OpenAI"},
{id: "part-of-speech tagging", name: "part-of-speech tagging"},
{id: "Pieter Abbeel", name: "Pieter Abbeel"},
{id: "question answering", name: "question answering"},
{id: "relation extraction", name: "relation extraction"},
{id: "Saumya Debray", name: "Saumya Debray"},
{id: "scene classification", name: "scene classification"},
{id: "sentiment analysis", name: "sentiment analysis"},
{id: "sequence-to-sequence models", name: "sequence-to-sequence models"},
{id: "Stanford University", name: "Stanford University"},
{id: "summarization", name: "summarization"},
{id: "text classification", name: "text classification"},
{id: "Transformer", name: "Transformer"},
{id: "translation", name: "translation"},
{id: "Université de Montréal", name: "Université de Montréal"},
{id: "University of Washington", name: "University of Washington"},
{id: "Vaswani et al.", name: "Vaswani et al."},
{id: "Vikas Sindhwani", name: "Vikas Sindhwani"},
{id: "Vinod Kurur", name: "Vinod Kurur"},
{id: "WebText", name: "WebText"},
{id: "Wei Dong", name: "Wei Dong"},
{id: "Wikipedia", name: "Wikipedia"},
{id: "Wikipedia Foundation", name: "Wikipedia Foundation"},
{id: "Yejin Choi", name: "Yejin Choi"},
{id: "Yoshua Bengio", name: "Yoshua Bengio"},
];


var links = [
{ source: "BERT", target: "NLP", type: "belongs to" },
{ source: "BERT", target: "text classification", type: "applies to" },
{ source: "BERT", target: "question answering", type: "applies to" },
{ source: "BERT", target: "sentiment analysis", type: "applies to" },
{ source: "BERT", target: "named entity recognition", type: "applies to" },
{ source: "BERT", target: "part-of-speech tagging", type: "applies to" },
{ source: "BERT", target: "dependency parsing", type: "applies to" },
{ source: "BERT", target: "Google", type: "developed by" },
{ source: "BERT", target: "Jacob Devlin", type: "developed by" },
{ source: "BERT", target: "Ming-Wei Chang", type: "developed by" },
{ source: "BERT", target: "Kenton Lee", type: "developed by" },
{ source: "BERT", target: "Kristina Toutanova", type: "developed by" },
{ source: "GPT", target: "NLP", type: "belongs to" },
{ source: "GPT", target: "language generation", type: "applies to" },
{ source: "GPT", target: "summarization", type: "applies to" },
{ source: "GPT", target: "OpenAI", type: "developed by" },
{ source: "GPT", target: "Ilya Sutskever", type: "developed by" },
{ source: "GPT", target: "Vinod Kurur", type: "developed by" },
{ source: "Transformer", target: "NLP", type: "belongs to" },
{ source: "Transformer", target: "machine translation", type: "applies to" },
{ source: "Transformer", target: "sequence-to-sequence models", type: "applies to" },
{ source: "Transformer", target: "Google", type: "developed by" },
{ source: "Transformer", target: "Vaswani et al.", type: "developed by" },
{ source: "BioBERT", target: "biomedical text mining", type: "belongs to" },
{ source: "BioBERT", target: "text classification", type: "applies to" },
{ source: "BioBERT", target: "named entity recognition", type: "applies to" },
{ source: "BioBERT", target: "relation extraction", type: "applies to" },
{ source: "BioBERT", target: "University of Washington", type: "developed by" },
{ source: "BioBERT", target: "Joonseong Kim", type: "developed by" },
{ source: "BioBERT", target: "Yejin Choi", type: "developed by" },
{ source: "GPT-3", target: "NLP", type: "belongs to" },
{ source: "GPT-3", target: "language generation", type: "applies to" },
{ source: "GPT-3", target: "question answering", type: "applies to" },
{ source: "GPT-3", target: "summarization", type: "applies to" },
{ source: "GPT-3", target: "translation", type: "applies to" },
{ source: "GPT-3", target: "text classification", type: "applies to" },
{ source: "GPT-3", target: "language modeling", type: "applies to" },
{ source: "GPT-3", target: "OpenAI", type: "developed by" },
{ source: "GPT-3", target: "Ali Ghodsi", type: "developed by" },
{ source: "GPT-3", target: "Pieter Abbeel", type: "developed by" },
{ source: "GPT-3", target: "John Schulman", type: "developed by" },
{ source: "MIT", target: "Ian Goodfellow", type: "affiliated with" },
{ source: "MIT", target: "Yoshua Bengio", type: "affiliated with" },
{ source: "MIT", target: "Alex Krizhevsky", type: "affiliated with" },
{ source: "MIT", target: "Saumya Debray", type: "affiliated with" },
{ source: "MIT", target: "Vikas Sindhwani", type: "affiliated with" },
{ source: "OpenAI", target: "Dario Amodei", type: "affiliated with" },
{ source: "OpenAI", target: "Ian Goodfellow", type: "affiliated with" },
{ source: "OpenAI", target: "John Schulman", type: "affiliated with" },
{ source: "OpenAI", target: "Pieter Abbeel", type: "affiliated with" },
{ source: "Ian Goodfellow", target: "MIT", type: "affiliated with" },
{ source: "Ian Goodfellow", target: "OpenAI", type: "affiliated with" },
{ source: "Ian Goodfellow", target: "Google Brain", type: "affiliated with" },
{ source: "Ian Goodfellow", target: "Université de Montréal", type: "affiliated with" },
{ source: "Yoshua Bengio", target: "MIT", type: "affiliated with" },
{ source: "Yoshua Bengio", target: "Université de Montréal", type: "affiliated with" },
{ source: "Yoshua Bengio", target: "CIFAR", type: "affiliated with" },
{ source: "Dario Amodei", target: "OpenAI", type: "affiliated with" },
{ source: "Dario Amodei", target: "Stanford University", type: "affiliated with" },
{ source: "MNIST", target: "BERT", type: "used by" },
{ source: "MNIST", target: "GPT", type: "used by" },
{ source: "MNIST", target: "image classification", type: "applies to" },
{ source: "MNIST", target: "LeCun et al.", type: "developed by" },
{ source: "MNIST", target: "Corinna Cortes", type: "developed by" },
{ source: "MNIST", target: "Christopher J.C. Burges", type: "developed by" },
{ source: "BioMedical Corpus", target: "BioBERT", type: "used by" },
{ source: "BioMedical Corpus", target: "biomedical text mining", type: "applies to" },
{ source: "BioMedical Corpus", target: "named entity recognition", type: "applies to" },
{ source: "BioMedical Corpus", target: "relation extraction", type: "applies to" },
{ source: "BioMedical Corpus", target: "Liu et al.", type: "developed by" },
{ source: "WebText", target: "GPT-3", type: "used by" },
{ source: "WebText", target: "language modeling", type: "applies to" },
{ source: "WebText", target: "OpenAI", type: "developed by" },
{ source: "BookCorpus", target: "GPT-3", type: "used by" },
{ source: "BookCorpus", target: "language modeling", type: "applies to" },
{ source: "BookCorpus", target: "OpenAI", type: "developed by" },
{ source: "Common Crawl", target: "GPT-3", type: "used by" },
{ source: "Common Crawl", target: "language modeling", type: "applies to" },
{ source: "Common Crawl", target: "OpenAI", type: "developed by" },
{ source: "Wikipedia", target: "GPT-3", type: "used by" },
{ source: "Wikipedia", target: "language modeling", type: "applies to" },
{ source: "Wikipedia", target: "Wikipedia Foundation", type: "developed by" },
{ source: "News Crawl", target: "GPT-3", type: "used by" },
{ source: "News Crawl", target: "language modeling", type: "applies to" },
{ source: "News Crawl", target: "OpenAI", type: "developed by" },
{ source: "ImageNet", target: "BERT", type: "used by" },
{ source: "ImageNet", target: "GPT", type: "used by" },
{ source: "ImageNet", target: "image classification", type: "applies to" },
{ source: "ImageNet", target: "object detection", type: "applies to" },
{ source: "ImageNet", target: "scene classification", type: "applies to" },
{ source: "ImageNet", target: "Deng et al.", type: "developed by" },
{ source: "ImageNet", target: "Wei Dong", type: "developed by" },
{ source: "ImageNet", target: "Libin Sun", type: "developed by" },
{ source: "ImageNet", target: "Ningyu Zhang", type: "developed by" }
];


// Data for the Financial Markets graph
const financialNodes = [
{id: "401(k) Plan", name: "401(k) Plan"},
{id: "ABC Company", name: "ABC Company"},
{id: "Annuity", name: "Annuity"},
{id: "Apple Inc.", name: "Apple Inc."},
{id: "Bank", name: "Bank"},
{id: "Bank of America", name: "Bank of America"},
{id: "Bond Market", name: "Bond Market"},
{id: "Certificate of Deposit (CD)", name: "Certificate of Deposit (CD)"},
{id: "Citigroup", name: "Citigroup"},
{id: "City of New York", name: "City of New York"},
{id: "Corporate Bond", name: "Corporate Bond"},
{id: "Emerging Markets Stock", name: "Emerging Markets Stock"},
{id: "Employee", name: "Employee"},
{id: "Employer", name: "Employer"},
{id: "Endowment Fund", name: "Endowment Fund"},
{id: "Exchange-Traded Fund (ETF)", name: "Exchange-Traded Fund (ETF)"},
{id: "Exxon Mobil", name: "Exxon Mobil"},
{id: "Foundation", name: "Foundation"},
{id: "Freddie Mac", name: "Freddie Mac"},
{id: "General Electric", name: "General Electric"},
{id: "Goldman Sachs", name: "Goldman Sachs"},
{id: "Google", name: "Google"},
{id: "Government", name: "Government"},
{id: "Government of Japan", name: "Government of Japan"},
{id: "Hedge Fund", name: "Hedge Fund"},
{id: "High Yield Bond", name: "High Yield Bond"},
{id: "IBM", name: "IBM"},
{id: "Index Fund", name: "Index Fund"},
{id: "Individual Investor", name: "Individual Investor"},
{id: "Individual Retirement Account (IRA)", name: "Individual Retirement Account (IRA)"},
{id: "Insurance Company", name: "Insurance Company"},
{id: "International Bond", name: "International Bond"},
{id: "JP Morgan Chase", name: "JP Morgan Chase"},
{id: "Large Cap Stock", name: "Large Cap Stock"},
{id: "Mitsubishi UFJ Financial Group", name: "Mitsubishi UFJ Financial Group"},
{id: "Mortgage-Backed Security", name: "Mortgage-Backed Security"},
{id: "Municipal Bond", name: "Municipal Bond"},
{id: "Mutual Fund", name: "Mutual Fund"},
{id: "National Association of Real Estate Investment Trusts (NAREIT)", name: "National Association of Real Estate Investment Trusts (NAREIT)"},
{id: "New York Stock Exchange", name: "New York Stock Exchange"},
{id: "Nonprofit Organization", name: "Nonprofit Organization"},
{id: "Pension Fund", name: "Pension Fund"},
{id: "Private Equity Fund", name: "Private Equity Fund"},
{id: "Real Estate Investment Trust (REIT)", name: "Real Estate Investment Trust (REIT)"},
{id: "Retail Investor", name: "Retail Investor"},
{id: "Retiree", name: "Retiree"},
{id: "Saver", name: "Saver"},
{id: "Secondary Market", name: "Secondary Market"},
{id: "Shanghai Stock Exchange", name: "Shanghai Stock Exchange"},
{id: "Sovereign Wealth Fund", name: "Sovereign Wealth Fund"},
{id: "Startup", name: "Startup"},
{id: "Stock Market", name: "Stock Market"},
{id: "Target-Date Fund", name: "Target-Date Fund"},
{id: "Taxpayer", name: "Taxpayer"},
{id: "Toyota", name: "Toyota"},
{id: "US Department of the Treasury", name: "US Department of the Treasury"},
{id: "US Savings Bond", name: "US Savings Bond"},
{id: "US Treasury Bond", name: "US Treasury Bond"},
{id: "Venture Capital Fund", name: "Venture Capital Fund"},
{id: "Wells Fargo", name: "Wells Fargo"},
{id: "XYZ Company", name: "XYZ Company"}
];

const financialLinks = [
    {source: "Individual Investor", target: "Large Cap Stock", type: "buys"},
    {source: "Hedge Fund", target: "Emerging Markets Stock", type: "buys"},
    {source: "Pension Fund", target: "Real Estate Investment Trust (REIT)", type: "buys"},
    {source: "Sovereign Wealth Fund", target: "Private Equity Fund", type: "buys"},
    {source: "Endowment Fund", target: "Venture Capital Fund", type: "invests in"},
    {source: "Retail Investor", target: "Exchange-Traded Fund (ETF)", type: "buys"},
    {source: "Individual Retirement Account (IRA)", target: "Index Fund", type: "buys"},
    {source: "401(k) Plan", target: "Target-Date Fund", type: "invests in"},
    {source: "Large Cap Stock", target: "New York Stock Exchange", type: "listed on"},
    {source: "Emerging Markets Stock", target: "Shanghai Stock Exchange", type: "listed on"},
    {source: "Real Estate Investment Trust (REIT)", target: "National Association of Real Estate Investment Trusts (NAREIT)", type: "listed on"},
    {source: "Private Equity Fund", target: "Secondary Market", type: "sold on"},
    {source: "Venture Capital Fund", target: "Startup", type: "invests in"},
    {source: "Exchange-Traded Fund (ETF)", target: "Stock Market", type: "trades on"},
    {source: "Index Fund", target: "Stock Market", type: "tracks"},
    {source: "Target-Date Fund", target: "Bond Market", type: "invests in"},
    {source: "New York Stock Exchange", target: "Pension Fund", type: "sells to"},
    {source: "Shanghai Stock Exchange", target: "Sovereign Wealth Fund", type: "sells to"},
    {source: "National Association of Real Estate Investment Trusts (NAREIT)", target: "Individual Investor", type: "sells to"},
    {source: "Secondary Market", target: "Hedge Fund", type: "sells to"},
    {source: "Startup", target: "Venture Capital Fund", type: "sells to"},
    {source: "Stock Market", target: "Exchange-Traded Fund (ETF)", type: "sells to"},
    {source: "Stock Market", target: "Index Fund", type: "sells to"},
    {source: "Bond Market", target: "Target-Date Fund", type: "sells to"},
    {source: "Pension Fund", target: "US Treasury Bond", type: "buys"},
    {source: "Sovereign Wealth Fund", target: "Municipal Bond", type: "buys"},
    {source: "Individual Investor", target: "Corporate Bond", type: "buys"},
    {source: "Hedge Fund", target: "High Yield Bond", type: "buys"},
    {source: "Endowment Fund", target: "International Bond", type: "buys"},
    {source: "Retail Investor", target: "Mortgage-Backed Security", type: "buys"},
    {source: "Individual Retirement Account (IRA)", target: "US Savings Bond", type: "buys"},
    {source: "401(k) Plan", target: "Certificate of Deposit (CD)", type: "buys"},
    {source: "US Treasury Bond", target: "US Department of the Treasury", type: "issued by"},
    {source: "Municipal Bond", target: "City of New York", type: "issued by"},
    {source: "Corporate Bond", target: "XYZ Company", type: "issued by"},
    {source: "High Yield Bond", target: "ABC Company", type: "issued by"},
    {source: "International Bond", target: "Government of Japan", type: "issued by"},
    {source: "Mortgage-Backed Security", target: "Freddie Mac", type: "issued by"},
    {source: "US Savings Bond", target: "US Department of the Treasury", type: "issued by"},
    {source: "Certificate of Deposit (CD)", target: "Bank", type: "issued by"},
    {source: "US Department of the Treasury", target: "JP Morgan Chase", type: "borrows from"},
    {source: "City of New York", target: "Wells Fargo", type: "borrows from"},
    {source: "XYZ Company", target: "Bank of America", type: "borrows from"},
    {source: "ABC Company", target: "Citigroup", type: "borrows from"},
    {source: "Government of Japan", target: "Mitsubishi UFJ Financial Group", type: "borrows from"},
    {source: "Freddie Mac", target: "Goldman Sachs", type: "borrows from"},
    {source: "JP Morgan Chase", target: "General Electric", type: "lends to"},
    {source: "Wells Fargo", target: "Apple Inc.", type: "lends to"},
    {source: "Bank of America", target: "IBM", type: "lends to"},
    {source: "Citigroup", target: "Google", type: "lends to"},
    {source: "Mitsubishi UFJ Financial Group", target: "Toyota", type: "lends to"},
    {source: "Goldman Sachs", target: "Exxon Mobil", type: "lends to"},
    {source: "General Electric", target: "Insurance Company", type: "sells to"},
    {source: "Apple Inc.", target: "Mutual Fund", type: "sells to"},
    {source: "IBM", target: "Endowment Fund", type: "sells to"},
    {source: "Google", target: "Retail Investor", type: "sells to"},
    {source: "Toyota", target: "Sovereign Wealth Fund", type: "sells to"},
    {source: "Exxon Mobil", target: "Pension Fund", type: "sells to"},
    {source: "Insurance Company", target: "Annuity", type: "sells to"},
    {source: "Mutual Fund", target: "401(k) Plan", type: "sells to"},
    {source: "Endowment Fund", target: "Foundation", type: "sells to"},
    {source: "Retail Investor", target: "Individual Retirement Account (IRA)", type: "sells to"},
    {source: "Sovereign Wealth Fund", target: "Government", type: "sells to"},
    {source: "Pension Fund", target: "Employer", type: "sells to"},
    {source: "Annuity", target: "Retiree", type: "sells to"},
    {source: "401(k) Plan", target: "Employee", type: "sells to"},
    {source: "Foundation", target: "Nonprofit Organization", type: "sells to"},
    {source: "Individual Retirement Account (IRA)", target: "Saver", type: "sells to"},
    {source: "Government", target: "Taxpayer", type: "sells to"},
    {source: "Employer", target: "Employee", type: "sells to"}
];



// Force-directed layouts

// Set up the force-directed layout for the Large Language Models graph
const simulation = d3.forceSimulation()
  .force('link', d3.forceLink().id(d => d.id))
  .force('charge', d3.forceManyBody().strength(-500).distanceMax(300))
  .force('center', d3.forceCenter(width / 2, height / 2));
  
// Set up the force-directed layout for Financial Markets
const financialSimulation = d3.forceSimulation()
  .force('link', d3.forceLink().id(d => d.id))
  .force('charge', d3.forceManyBody().strength(-300).distanceMax(300))
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



// Set up the financial drag functions
function financialDragstarted(d) {
  if (!d3.event.active) financialSimulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function financialDragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function financialDragended(d) {
  if (!d3.event.active) financialSimulation.alphaTarget(0);
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


    // Add a label to each link showing its type
    const financialLinkLabel = financialSvg.append('g')
      .attr('class', 'financial-link-labels')
      .selectAll('text')
      .data(financialLinks)
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
    .on("start", financialDragstarted)
    .on("drag", financialDragged)
    .on("end", financialDragended));

  

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

    // Position the link labels halfway between the source and target nodes
      financialLinkLabel
        .attr('x', d => (d.source.x + d.target.x) / 2)
        .attr('y', d => (d.source.y + d.target.y) / 2);

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

  linkLabel.attr('transform', d3.event.transform);

  // Update the transform attribute of the links group
  link.attr('transform', d3.event.transform);
}




// Set up the zoom behavior
const financialZoom = d3.zoom()
  .scaleExtent([-1, 100])
  .on('zoom', financialZoomed);

// Add the zoom behavior to the SVG element
// Set the initial zoom level
financialZoom.transform(financialSvg, d3.zoomIdentity.scale(.7));

financialSvg.call(financialZoom);

// Set up the zoom function
function financialZoomed() {
  // Update the transform attribute of the nodes and labels group
  financialNode.attr('transform', d3.event.transform);
  financialLabel.attr('transform', d3.event.transform);
  financialLinkLabel.attr('transform', d3.event.transform);

  // Update the transform attribute of the links group
  financialLink.attr('transform', d3.event.transform);
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
