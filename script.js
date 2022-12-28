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
var nodes = [ {id: "Alex Krizhevsky"},
{id: "Ali Ghodsi"},
{id: "BERT"},
{id: "BioBERT"},
{id: "BioMedical Corpus"},
{id: "biomedical text mining"},
{id: "BookCorpus"},
{id: "Bowman et al."},
{id: "caption generation"},
{id: "Carnegie Mellon University"},
{id: "Cer et al."},
{id: "Christopher J.C. Burges"},
{id: "CIFAR"},
{id: "CoLA"},
{id: "Common Crawl"},
{id: "Conneau et al."},
{id: "Corinna Cortes"},
{id: "corpus-level annotation"},
{id: "cross-lingual classification"},
{id: "Dagan et al."},
{id: "Dario Amodei"},
{id: "Deng et al."},
{id: "dependency parsing"},
{id: "Dolan et al."},
{id: "entailment"},
{id: "Facebook Artificial Intelligence"},
{id: "GLUE"},
{id: "Google"},
{id: "Google Brain"},
{id: "GPT"},
{id: "GPT-3"},
{id: "Harman et al."},
{id: "Harvard University"},
{id: "Hebrew University"},
{id: "Ian Goodfellow"},
{id: "Ilya Sutskever"},
{id: "image classification"},
{id: "ImageNet"},
{id: "Jacob Devlin"},
{id: "John Schulman"},
{id: "Joonseong Kim"},
{id: "Kenton Lee"},
{id: "Kristina Toutanova"},
{id: "language generation"},
{id: "language modeling"},
{id: "LeCun et al."},
{id: "Libin Sun"},
{id: "Lin et al."},
{id: "Liu et al."},
{id: "machine translation"},
{id: "Microsoft Research"},
{id: "Ming-Wei Chang"},
{id: "miscellaneous tasks"},
{id: "MIT"},
{id: "MNIST"},
{id: "MRPC"},
{id: "MS COCO"},
{id: "MultiNLI"},
{id: "named entity recognition"},
{id: "New York University"},
{id: "News Crawl"},
{id: "Ningyu Zhang"},
{id: "NLP"},
{id: "object detection"},
{id: "OpenAI"},
{id: "Other"},
{id: "paraphrase detection"},
{id: "part-of-speech tagging"},
{id: "PAWS"},
{id: "Pieter Abbeel"},
{id: "QNLI"},
{id: "QQP"},
{id: "question answering"},
{id: "Rajpurkar et al."},
{id: "relation extraction"},
{id: "RTE"},
{id: "Saumya Debray"},
{id: "scene classification"},
{id: "sentence similarity"},
{id: "sentiment analysis"},
{id: "sequence-to-sequence models"},
{id: "SNLI"},
{id: "SQuAD"},
{id: "Stanford University"},
{id: "STS"},
{id: "summarization"},
{id: "Tel Aviv University"},
{id: "text classification"},
{id: "Transformer"},
{id: "translation"},
{id: "TREC"},
{id: "Université de Montréal"},
{id: "University of Maryland"},
{id: "University of Washington"},
{id: "Various authors"},
{id: "Various institutions"},
{id: "Vaswani et al."},
{id: "Vikas Sindhwani"},
{id: "Vinod Kurur"},
{id: "Wang et al."},
{id: "WebText"},
{id: "Wei Dong"},
{id: "Wikipedia"},
{id: "Wikipedia Foundation"},
{id: "Williams et al."},
{id: "WNLI"},
{id: "word sense disambiguation"},
{id: "XNLI"},
{id: "Yale University"},
{id: "Yejin Choi"},
{id: "Yoshua Bengio"},
{id: "Zhang et al."}
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
  { source: "ImageNet", target: "Ningyu Zhang", type: "developed by" },
  { source: "MS COCO", target: "BERT", type: "used by" },
  { source: "MS COCO", target: "GPT", type: "used by" },
  { source: "MS COCO", target: "image classification", type: "applies to" },
  { source: "MS COCO", target: "object detection", type: "applies to" },
  { source: "MS COCO", target: "caption generation", type: "applies to" },
  { source: "MS COCO", target: "Lin et al.", type: "developed by" },
  { source: "MS COCO", target: "Microsoft Research", type: "developed by" },
  { source: "TREC", target: "BERT", type: "used by" },
  { source: "TREC", target: "GPT", type: "used by" },
  { source: "TREC", target: "question answering", type: "applies to" },
  { source: "TREC", target: "text classification", type: "applies to" },
  { source: "TREC", target: "Harman et al.", type: "developed by" },
  { source: "TREC", target: "Carnegie Mellon University", type: "developed by" },
  { source: "GLUE", target: "BERT", type: "used by" },
  { source: "GLUE", target: "GPT", type: "used by" },
  { source: "GLUE", target: "NLP", type: "applies to" },
  { source: "GLUE", target: "text classification", type: "applies to" },
  { source: "GLUE", target: "question answering", type: "applies to" },
  { source: "GLUE", target: "Wang et al.", type: "developed by" },
  { source: "GLUE", target: "New York University", type: "developed by" },
  { source: "GLUE", target: "Yale University", type: "developed by" },
  { source: "GLUE", target: "University of Washington", type: "developed by" },
  { source: "SQuAD", target: "BERT", type: "used by" },
  { source: "SQuAD", target: "GPT", type: "used by" },
  { source: "SQuAD", target: "question answering", type: "applies to" },
  { source: "SQuAD", target: "text classification", type: "applies to" },
  { source: "SQuAD", target: "Rajpurkar et al.", type: "developed by" },
  { source: "SQuAD", target: "Stanford University", type: "developed by" },
  { source: "SNLI", target: "BERT", type: "used by" },
  { source: "SNLI", target: "GPT", type: "used by" },
  { source: "SNLI", target: "NLP", type: "applies to" },
  { source: "SNLI", target: "text classification", type: "applies to" },
  { source: "SNLI", target: "entailment", type: "applies to" },
  { source: "SNLI", target: "Bowman et al.", type: "developed by" },
  { source: "SNLI", target: "New York University", type: "developed by" },
  { source: "MultiNLI", target: "BERT", type: "used by" },
  { source: "MultiNLI", target: "GPT", type: "used by" },
  { source: "MultiNLI", target: "NLP", type: "applies to" },
  { source: "MultiNLI", target: "text classification", type: "applies to" },
  { source: "MultiNLI", target: "entailment", type: "applies to" },
  { source: "MultiNLI", target: "Williams et al.", type: "developed by" },
  { source: "MultiNLI", target: "New York University", type: "developed by" },
  { source: "MultiNLI", target: "Yale University", type: "developed by" },
  { source: "MultiNLI", target: "Harvard University", type: "developed by" },
  { source: "STS", target: "BERT", type: "used by" },
  { source: "STS", target: "GPT", type: "used by" },
  { source: "STS", target: "NLP", type: "applies to" },
  { source: "STS", target: "text classification", type: "applies to" },
  { source: "STS", target: "sentence similarity", type: "applies to" },
  { source: "STS", target: "Cer et al.", type: "developed by" },
  { source: "STS", target: "New York University", type: "developed by" },
  { source: "STS", target: "Yale University", type: "developed by" },
  { source: "STS", target: "Harvard University", type: "developed by" },
  { source: "PAWS", target: "BERT", type: "used by" },
  { source: "PAWS", target: "GPT", type: "used by" },
  { source: "PAWS", target: "NLP", type: "applies to" },
  { source: "PAWS", target: "text classification", type: "applies to" },
  { source: "PAWS", target: "paraphrase detection", type: "applies to" },
  { source: "PAWS", target: "Zhang et al.", type: "developed by" },
  { source: "PAWS", target: "New York University", type: "developed by" },
  { source: "PAWS", target: "Yale University", type: "developed by" },
  { source: "PAWS", target: "Harvard University", type: "developed by" },
  { source: "CoLA", target: "BERT", type: "used by" },
  { source: "CoLA", target: "GPT", type: "used by" },
  { source: "CoLA", target: "NLP", type: "applies to" },
  { source: "CoLA", target: "text classification", type: "applies to" },
  { source: "CoLA", target: "corpus-level annotation", type: "applies to" },
  { source: "CoLA", target: "Wang et al.", type: "developed by" },
  { source: "CoLA", target: "New York University", type: "developed by" },
  { source: "CoLA", target: "Yale University", type: "developed by" },
  { source: "CoLA", target: "Harvard University", type: "developed by" },
  { source: "MRPC", target: "BERT", type: "used by" },
  { source: "MRPC", target: "GPT", type: "used by" },
  { source: "MRPC", target: "NLP", type: "applies to" },
  { source: "MRPC", target: "text classification", type: "applies to" },
  { source: "MRPC", target: "paraphrase detection", type: "applies to" },
  { source: "MRPC", target: "Dolan et al.", type: "developed by" },
  { source: "MRPC", target: "Microsoft Research", type: "developed by" },
  { source: "MRPC", target: "University of Maryland", type: "developed by" },
  { source: "QQP", target: "BERT", type: "used by" },
  { source: "QQP", target: "GPT", type: "used by" },
  { source: "QQP", target: "NLP", type: "applies to" },
  { source: "QQP", target: "text classification", type: "applies to" },
  { source: "QQP", target: "paraphrase detection", type: "applies to" },
  { source: "QQP", target: "Wang et al.", type: "developed by" },
  { source: "QQP", target: "New York University", type: "developed by" },
  { source: "QQP", target: "Yale University", type: "developed by" },
  { source: "QQP", target: "Harvard University", type: "developed by" },
  { source: "QNLI", target: "BERT", type: "used by" },
  { source: "QNLI", target: "GPT", type: "used by" },
  { source: "QNLI", target: "NLP", type: "applies to" },
  { source: "QNLI", target: "text classification", type: "applies to" },
  { source: "QNLI", target: "question answering", type: "applies to" },
  { source: "QNLI", target: "Wang et al.", type: "developed by" },
  { source: "QNLI", target: "New York University", type: "developed by" },
  { source: "QNLI", target: "Yale University", type: "developed by" },
  { source: "QNLI", target: "Harvard University", type: "developed by" },
  { source: "RTE", target: "BERT", type: "used by" },
  { source: "RTE", target: "GPT", type: "used by" },
  { source: "RTE", target: "NLP", type: "applies to" },
  { source: "RTE", target: "text classification", type: "applies to" },
  { source: "RTE", target: "entailment", type: "applies to" },
  { source: "RTE", target: "Dagan et al.", type: "developed by" },
  { source: "RTE", target: "Tel Aviv University", type: "developed by" },
  { source: "RTE", target: "Hebrew University", type: "developed by" },
  { source: "WNLI", target: "BERT", type: "used by" },
  { source: "WNLI", target: "GPT", type: "used by" },
  { source: "WNLI", target: "NLP", type: "applies to" },
  { source: "WNLI", target: "text classification", type: "applies to" },
  { source: "WNLI", target: "word sense disambiguation", type: "applies to" },
  { source: "WNLI", target: "Williams et al.", type: "developed by" },
  { source: "WNLI", target: "New York University", type: "developed by" },
  { source: "WNLI", target: "Yale University", type: "developed by" },
  { source: "WNLI", target: "Harvard University", type: "developed by" },
  { source: "XNLI", target: "BERT", type: "used by" },
  { source: "XNLI", target: "GPT", type: "used by" },
  { source: "XNLI", target: "NLP", type: "applies to" },
  { source: "XNLI", target: "text classification", type: "applies to" },
  { source: "XNLI", target: "cross-lingual classification", type: "applies to" },
  { source: "XNLI", target: "Conneau et al.", type: "developed by" },
    { source: "XNLI", target: "Facebook Artificial Intelligence Research", type: "developed by" },
    { source: "XNLI", target: "New York University", type: "developed by" },
    { source: "XNLI", target: "Yale University", type: "developed by" },
    { source: "XNLI", target: "Harvard University", type: "developed by" },
    { source: "Other", target: "BERT", type: "used by" },
    { source: "Other", target: "GPT", type: "used by" },
    { source: "Other", target: "NLP", type: "applies to" },
    { source: "Other", target: "text classification", type: "applies to" },
    { source: "Other", target: "miscellaneous tasks", type: "applies to" },
    { source: "Other", target: "Various authors", type: "developed by" },
    { source: "Other", target: "Various institutions", type: "developed by" }

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


// Add a label to each link showing its type
const linkLabel = svg.append('g')
  .attr('class', 'link-labels')
  .selectAll('text')
  .data(links)
  .enter().append('text')
  .style("font-size", "7px")
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

// Create the labels for the nodes and links
const label = svg.append('g')
  .attr('class', 'labels')
  .selectAll('text')
  .data(nodes.concat(links))
  .enter().append('text')
  .text(function(d) {
    if (d.id) {
      return d.id;
    } else {
      return d.type;
    }
  })
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