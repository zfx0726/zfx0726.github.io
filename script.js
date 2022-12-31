// Chart Setup

// Set up the chart for Large Language Models
const width = 800;
const height = 600;
const svg = d3.select('#chart')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

  // Set up the chart for Clinical Trials
  const ctWidth = 800;
  const ctHeight = 600;
  const ctSvg = d3.select('#clinical-trials-chart')
    .append('svg')
    .attr('width', ctWidth)
    .attr('height', ctHeight);


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
{id: "Bowman et al.", name: "Bowman et al."},
{id: "caption generation", name: "caption generation"},
{id: "Carnegie Mellon University", name: "Carnegie Mellon University"},
{id: "Cer et al.", name: "Cer et al."},
{id: "Christopher J.C. Burges", name: "Christopher J.C. Burges"},
{id: "CIFAR", name: "CIFAR"},
{id: "CoLA", name: "CoLA"},
{id: "Common Crawl", name: "Common Crawl"},
{id: "Conneau et al.", name: "Conneau et al."},
{id: "Corinna Cortes", name: "Corinna Cortes"},
{id: "corpus-level annotation", name: "corpus-level annotation"},
{id: "cross-lingual classification", name: "cross-lingual classification"},
{id: "Dagan et al.", name: "Dagan et al."},
{id: "Dario Amodei", name: "Dario Amodei"},
{id: "Deng et al.", name: "Deng et al."},
{id: "dependency parsing", name: "dependency parsing"},
{id: "Dolan et al.", name: "Dolan et al."},
{id: "entailment", name: "entailment"},
{id: "Facebook Artificial Intelligence Research", name: "Facebook Artificial Intelligence Research"},
{id: "GLUE", name: "GLUE"},
{id: "Google", name: "Google"},
{id: "Google Brain", name: "Google Brain"},
{id: "GPT", name: "GPT"},
{id: "GPT-3", name: "GPT-3"},
{id: "Harman et al.", name: "Harman et al."},
{id: "Harvard University", name: "Harvard University"},
{id: "Hebrew University", name: "Hebrew University"},
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
{id: "Lin et al.", name: "Lin et al."},
{id: "Liu et al.", name: "Liu et al."},
{id: "machine translation", name: "machine translation"},
{id: "Microsoft Research", name: "Microsoft Research"},
{id: "Ming-Wei Chang", name: "Ming-Wei Chang"},
{id: "miscellaneous tasks", name: "miscellaneous tasks"},
{id: "MIT", name: "MIT"},
{id: "MNIST", name: "MNIST"},
{id: "MRPC", name: "MRPC"},
{id: "MS COCO", name: "MS COCO"},
{id: "MultiNLI", name: "MultiNLI"},
{id: "named entity recognition", name: "named entity recognition"},
{id: "New York University", name: "New York University"},
{id: "News Crawl", name: "News Crawl"},
{id: "Ningyu Zhang", name: "Ningyu Zhang"},
{id: "NLP", name: "NLP"},
{id: "object detection", name: "object detection"},
{id: "OpenAI", name: "OpenAI"},
{id: "Other", name: "Other"},
{id: "paraphrase detection", name: "paraphrase detection"},
{id: "part-of-speech tagging", name: "part-of-speech tagging"},
{id: "PAWS", name: "PAWS"},
{id: "Pieter Abbeel", name: "Pieter Abbeel"},
{id: "QNLI", name: "QNLI"},
{id: "QQP", name: "QQP"},
{id: "question answering", name: "question answering"},
{id: "Rajpurkar et al.", name: "Rajpurkar et al."},
{id: "relation extraction", name: "relation extraction"},
{id: "RTE", name: "RTE"},
{id: "Saumya Debray", name: "Saumya Debray"},
{id: "scene classification", name: "scene classification"},
{id: "sentence similarity", name: "sentence similarity"},
{id: "sentiment analysis", name: "sentiment analysis"},
{id: "sequence-to-sequence models", name: "sequence-to-sequence models"},
{id: "SNLI", name: "SNLI"},
{id: "SQuAD", name: "SQuAD"},
{id: "Stanford University", name: "Stanford University"},
{id: "STS", name: "STS"},
{id: "summarization", name: "summarization"},
{id: "Tel Aviv University", name: "Tel Aviv University"},
{id: "text classification", name: "text classification"},
{id: "Transformer", name: "Transformer"},
{id: "translation", name: "translation"},
{id: "TREC", name: "TREC"},
{id: "Université de Montréal", name: "Université de Montréal"},
{id: "University of Maryland", name: "University of Maryland"},
{id: "University of Washington", name: "University of Washington"},
{id: "Various authors", name: "Various authors"},
{id: "Various institutions", name: "Various institutions"},
{id: "Vaswani et al.", name: "Vaswani et al."},
{id: "Vikas Sindhwani", name: "Vikas Sindhwani"},
{id: "Vinod Kurur", name: "Vinod Kurur"},
{id: "Wang et al.", name: "Wang et al."},
{id: "WebText", name: "WebText"},
{id: "Wei Dong", name: "Wei Dong"},
{id: "Wikipedia", name: "Wikipedia"},
{id: "Wikipedia Foundation", name: "Wikipedia Foundation"},
{id: "Williams et al.", name: "Williams et al."},
{id: "WNLI", name: "WNLI"},
{id: "word sense disambiguation", name: "word sense disambiguation"},
{id: "XNLI", name: "XNLI"},
{id: "Yale University", name: "Yale University"},
{id: "Yejin Choi", name: "Yejin Choi"},
{id: "Yoshua Bengio", name: "Yoshua Bengio"},
{id: "Zhang et al.", name: "Zhang et al."}
];


var links = [
    { source: "BERT", target: "NLP", type: "belongs to" },
    { source: "BERT", target: "text classification", type: "applies to" },
    { source: "BERT", target: "question answering", type: "applies to" },
    { source: "BERT", target: "Google", type: "developed by" },
    { source: "GPT", target: "NLP", type: "belongs to" },
    { source: "GPT", target: "language generation", type: "applies to" },
    { source: "GPT", target: "OpenAI", type: "developed by" },
    { source: "Transformer", target: "NLP", type: "belongs to" },
    { source: "Transformer", target: "machine translation", type: "applies to" },
    { source: "Transformer", target: "Google", type: "developed by" },
    { source: "BioBERT", target: "biomedical text mining", type: "belongs to" },
    { source: "BioBERT", target: "text classification", type: "applies to" },
    { source: "BioBERT", target: "University of Washington", type: "developed by" },
    { source: "GPT-3", target: "NLP", type: "belongs to" },
    { source: "GPT-3", target: "language generation", type: "applies to" },
    { source: "GPT-3", target: "question answering", type: "applies to" },
    { source: "GPT-3", target: "OpenAI", type: "developed by" },
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
    { source: "WebText", target: "GPT-3", type: "used by" },
    { source: "BookCorpus", target: "GPT-3", type: "used by" },
    { source: "Common Crawl", target: "GPT-3", type: "used by" },
    { source: "Wikipedia", target: "GPT-3", type: "used by" },
    { source: "News Crawl", target: "GPT-3", type: "used by" },
    { source: "ImageNet", target: "BERT", type: "used by" },
    { source: "ImageNet", target: "GPT", type: "used by" },
    { source: "MS COCO", target: "BERT", type: "used by" },
    { source: "MS COCO", target: "GPT", type: "used by" },
    { source: "TREC", target: "BERT", type: "used by" },
    { source: "TREC", target: "GPT", type: "used by" },
    { source: "SNLI", target: "BERT", type: "used by" },
    { source: "SNLI", target: "GPT", type: "used by" },
    { source: "GLUE", target: "BERT", type: "used by" },
    { source: "GLUE", target: "GPT", type: "used by" },
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


// Data for the Clinical Trials graph
var ctNodes = [  
    {id: "Abstract", name: "Abstract"},
    {id: "Adaptive", name: "Adaptive"},
    {id: "Adverse Event Reporting", name: "Adverse Event Reporting"},
    {id: "Adverse Events", name: "Adverse Events"},
    {id: "Blinding", name: "Blinding"},
    {id: "Blocked Randomization", name: "Blocked Randomization"},
    {id: "China Clinical Trial Registry", name: "China Clinical Trial Registry"},
    {id: "China Clinical Trial Registry Identifier", name: "China Clinical Trial Registry Identifier"},
    {id: "Clinical Endpoint", name: "Clinical Endpoint"},
    {id: "Clinical Outcome", name: "Clinical Outcome"},
    {id: "Clinical Study Report", name: "Clinical Study Report"},
    {id: "Clinical Trial", name: "Clinical Trial"},
    {id: "Clinical Trial Protocol", name: "Clinical Trial Protocol"},
    {id: "ClinicalTrials.gov", name: "ClinicalTrials.gov"},
    {id: "ClinicalTrials.gov Identifier", name: "ClinicalTrials.gov Identifier"},
    {id: "Collaboration", name: "Collaboration"},
    {id: "Conclusions", name: "Conclusions"},
    {id: "Conference", name: "Conference"},
    {id: "Control Group", name: "Control Group"},
    {id: "Country", name: "Country"},
    {id: "Cross-Over", name: "Cross-Over"},
    {id: "Data Collection", name: "Data Collection"},
    {id: "Data Entry", name: "Data Entry"},
    {id: "Data Management Plan", name: "Data Management Plan"},
    {id: "Data Monitoring Committee", name: "Data Monitoring Committee"},
    {id: "Data Monitoring Plan", name: "Data Monitoring Plan"},
    {id: "Data Quality Assurance", name: "Data Quality Assurance"},
    {id: "Data Safety Monitoring Plan", name: "Data Safety Monitoring Plan"},
    {id: "Data Security", name: "Data Security"},
    {id: "Data Sharing", name: "Data Sharing"},
    {id: "Data Sharing Agreement", name: "Data Sharing Agreement"},
    {id: "Data Sharing Plan", name: "Data Sharing Plan"},
    {id: "Demographic Characteristic", name: "Demographic Characteristic"},
    {id: "Device", name: "Device"},
    {id: "Disease", name: "Disease"},
    {id: "Disease Characteristic", name: "Disease Characteristic"},
    {id: "Double-Blind", name: "Double-Blind"},
    {id: "Drug", name: "Drug"},
    {id: "Efficacy", name: "Efficacy"},
    {id: "Efficacy Analysis", name: "Efficacy Analysis"},
    {id: "Endpoint", name: "Endpoint"},
    {id: "Enrollment", name: "Enrollment"},
    {id: "Enrollment Status", name: "Enrollment Status"},
    {id: "Enrollment Target", name: "Enrollment Target"},
    {id: "Ethics Committee", name: "Ethics Committee"},
    {id: "EudraCT", name: "EudraCT"},
    {id: "EudraCT Identifier", name: "EudraCT Identifier"},
    {id: "European Medicines Agency", name: "European Medicines Agency"},
    {id: "Exclusion Criteria", name: "Exclusion Criteria"},
    {id: "Exploratory Outcome", name: "Exploratory Outcome"},
    {id: "Factorial", name: "Factorial"},
    {id: "Food and Drug Administration", name: "Food and Drug Administration"},
    {id: "Foundation", name: "Foundation"},
    {id: "Funding Source", name: "Funding Source"},
    {id: "Futility Analysis", name: "Futility Analysis"},
    {id: "Government Agency", name: "Government Agency"},
    {id: "Inclusion Criteria", name: "Inclusion Criteria"},
    {id: "Inclusion/Exclusion Criteria", name: "Inclusion/Exclusion Criteria"},
    {id: "Independent Ethics Committee", name: "Independent Ethics Committee"},
    {id: "Industry", name: "Industry"},
    {id: "Informed Consent", name: "Informed Consent"},
    {id: "Informed Consent Form", name: "Informed Consent Form"},
    {id: "Institution", name: "Institution"},
    {id: "Institutional Review Board", name: "Institutional Review Board"},
    {id: "Intention-To-Treat", name: "Intention-To-Treat"},
    {id: "Interim Analysis", name: "Interim Analysis"},
    {id: "Intervention", name: "Intervention"},
    {id: "Interventions", name: "Interventions"},
    {id: "Investigator", name: "Investigator"},
    {id: "Japan Pharmaceutical Information Center", name: "Japan Pharmaceutical Information Center"},
    {id: "Japan Pharmaceutical Information Center Identifier", name: "Japan Pharmaceutical Information Center Identifier"},
    {id: "Journal", name: "Journal"},
    {id: "Mechanism of Action", name: "Mechanism of Action"},
    {id: "Minimization", name: "Minimization"},
    {id: "Ministry of Health", name: "Ministry of Health"},
    {id: "Parallel Group", name: "Parallel Group"},
    {id: "Patient", name: "Patient"},
    {id: "Patient Characteristics", name: "Patient Characteristics"},
    {id: "Patient-Reported Outcome", name: "Patient-Reported Outcome"},
    {id: "Per Protocol", name: "Per Protocol"},
    {id: "Pharmaceutical Company", name: "Pharmaceutical Company"},
    {id: "Pharmacodynamics", name: "Pharmacodynamics"},
    {id: "Pharmacokinetics", name: "Pharmacokinetics"},
    {id: "Phase", name: "Phase"},
    {id: "Phase I", name: "Phase I"},
    {id: "Phase II", name: "Phase II"},
    {id: "Phase III", name: "Phase III"},
    {id: "Phase IV", name: "Phase IV"},
    {id: "Population", name: "Population"},
    {id: "Power", name: "Power"},
    {id: "Primary Analysis", name: "Primary Analysis"},
    {id: "Primary Analysis Set", name: "Primary Analysis Set"},
    {id: "Primary Outcome", name: "Primary Outcome"},
    {id: "Primary Outcomes", name: "Primary Outcomes"},
    {id: "Principal Investigator", name: "Principal Investigator"},
    {id: "Procedure", name: "Procedure"},
    {id: "Protocol", name: "Protocol"},
    {id: "Publication", name: "Publication"},
    {id: "Randomization", name: "Randomization"},
    {id: "Regulatory Agency", name: "Regulatory Agency"},
    {id: "Regulatory Authority", name: "Regulatory Authority"},
    {id: "Results", name: "Results"},
    {id: "Safety", name: "Safety"},
    {id: "Safety Analysis", name: "Safety Analysis"},
    {id: "Sample Size", name: "Sample Size"},
    {id: "Secondary Outcome", name: "Secondary Outcome"},
    {id: "Secondary Outcomes", name: "Secondary Outcomes"},
    {id: "Sensitivity Analysis", name: "Sensitivity Analysis"},
    {id: "Simple Randomization", name: "Simple Randomization"},
    {id: "Single-Blind", name: "Single-Blind"},
    {id: "Sponsor", name: "Sponsor"},
    {id: "Statistical Analysis Plan", name: "Statistical Analysis Plan"},
    {id: "Statistician", name: "Statistician"},
    {id: "Stop Rules", name: "Stop Rules"},
    {id: "Stratified Randomization", name: "Stratified Randomization"},
    {id: "Study Design", name: "Study Design"},
    {id: "Study Objectives", name: "Study Objectives"},
    {id: "Study Results", name: "Study Results"},
    {id: "Subgroup Analysis", name: "Subgroup Analysis"},
    {id: "Surrogate Endpoint", name: "Surrogate Endpoint"},
    {id: "Surrogate Outcome", name: "Surrogate Outcome"},
    {id: "Treatment Characteristic", name: "Treatment Characteristic"},
    {id: "Triple-Blind", name: "Triple-Blind"}
  ];


  var ctLinks = [
    {source: "Clinical Trial", target: "Drug", type: "Tests"},
    {source: "Clinical Trial", target: "Disease", type: "Targets"},
    {source: "Clinical Trial", target: "Sponsor", type: "Funded By"},
    {source: "Sponsor", target: "Pharmaceutical Company", type: "Affiliation"},
    {source: "Clinical Trial", target: "Patient", type: "Enrolls"},
    {source: "Clinical Trial", target: "Investigator", type: "Conducted By"},
    {source: "Clinical Trial", target: "Institution", type: "Conducted At"},
    {source: "Clinical Trial", target: "Protocol", type: "Follows"},
    {source: "Protocol", target: "Inclusion Criteria", type: "Specifies"},
    {source: "Protocol", target: "Exclusion Criteria", type: "Specifies"},
    {source: "Drug", target: "Mechanism of Action", type: "Has"},
    {source: "Drug", target: "Pharmacokinetics", type: "Has"},
    {source: "Drug", target: "Pharmacodynamics", type: "Has"},
    {source: "Clinical Trial", target: "Regulatory Agency", type: "Approved By"},
    {source: "Regulatory Agency", target: "Country", type: "Located In"},
    {source: "Clinical Trial", target: "Ethics Committee", type: "Reviewed By"},
    {source: "Ethics Committee", target: "Institution", type: "Affiliated With"},
    {source: "Clinical Trial", target: "Primary Outcome", type: "Measures"},
    {source: "Clinical Trial", target: "Secondary Outcome", type: "Measures"},
    {source: "Clinical Trial", target: "Randomization", type: "Uses"},
    {source: "Clinical Trial", target: "Blinding", type: "Uses"},
    {source: "Clinical Trial", target: "Control Group", type: "Uses"},    
    {source: "Clinical Trial", target: "Phase", type: "Is In"},
    {source: "Phase", target: "Phase I", type: "Includes"},
    {source: "Phase", target: "Phase II", type: "Includes"},
    {source: "Phase", target: "Phase III", type: "Includes"},
    {source: "Phase", target: "Phase IV", type: "Includes"},
    {source: "Clinical Trial", target: "Intervention", type: "Uses"},
    {source: "Intervention", target: "Drug", type: "Includes"},
    {source: "Intervention", target: "Device", type: "Includes"},
    {source: "Intervention", target: "Procedure", type: "Includes"},
    {source: "Clinical Trial", target: "Population", type: "Studies"},
    {source: "Clinical Trial", target: "Endpoint", type: "Uses"},
    {source: "Endpoint", target: "Surrogate Endpoint", type: "Includes"},
    {source: "Endpoint", target: "Clinical Endpoint", type: "Includes"},
    {source: "Endpoint", target: "Patient-Reported Outcome", type: "Includes"},
    {source: "Clinical Trial", target: "Sample Size", type: "Determined By"},
    {source: "Clinical Trial", target: "Power", type: "Determined By"},
    {source: "Clinical Trial", target: "Statistical Analysis Plan", type: "Follows"},
    {source: "Clinical Trial", target: "Data Monitoring Committee", type: "Monitored By"},
    {source: "Data Monitoring Committee", target: "Statistician", type: "Includes"},
    {source: "Clinical Trial", target: "Publication", type: "Results Published In"},
    {source: "Publication", target: "Journal", type: "Published In"},
    {source: "Clinical Trial", target: "Abstract", type: "Results Presented In"},
    {source: "Abstract", target: "Conference", type: "Presented At"},
    {source: "Clinical Trial", target: "ClinicalTrials.gov Identifier", type: "Registered With"},
    {source: "Clinical Trial", target: "Results", type: "Has"},
    {source: "Results", target: "Efficacy", type: "Includes"},
    {source: "Results", target: "Safety", type: "Includes"},
    {source: "Results", target: "Subgroup Analysis", type: "Includes"},
    {source: "Clinical Trial", target: "ClinicalTrials.gov Identifier", type: "Registered With"},
    {source: "ClinicalTrials.gov Identifier", target: "ClinicalTrials.gov", type: "Registered With"},
    {source: "Clinical Trial", target: "EudraCT Identifier", type: "Registered With"},
    {source: "EudraCT Identifier", target: "EudraCT", type: "Registered With"},
    {source: "Clinical Trial", target: "Japan Pharmaceutical Information Center Identifier", type: "Registered With"},
    {source: "Japan Pharmaceutical Information Center Identifier", target: "Japan Pharmaceutical Information Center", type: "Registered With"},
    {source: "Clinical Trial", target: "China Clinical Trial Registry Identifier", type: "Registered With"},
    {source: "China Clinical Trial Registry Identifier", target: "China Clinical Trial Registry", type: "Registered With"},
    {source: "Clinical Trial", target: "Collaboration", type: "Involves"},
    {source: "Collaboration", target: "Institution", type: "Includes"},
    {source: "Collaboration", target: "Principal Investigator", type: "Includes"},
    {source: "Clinical Trial", target: "Funding Source", type: "Funded By"},
    {source: "Funding Source", target: "Government Agency", type: "Includes"},
    {source: "Funding Source", target: "Foundation", type: "Includes"},
    {source: "Funding Source", target: "Industry", type: "Includes"},
    {source: "Clinical Trial", target: "Data Sharing Plan", type: "Has"},
    {source: "Data Sharing Plan", target: "Data Sharing Agreement", type: "Includes"},
    {source: "Clinical Trial", target: "Study Design", type: "Has"},
    {source: "Study Design", target: "Parallel Group", type: "Includes"},
    {source: "Study Design", target: "Cross-Over", type: "Includes"},
    {source: "Study Design", target: "Factorial", type: "Includes"},
    {source: "Study Design", target: "Adaptive", type: "Includes"},
    {source: "Clinical Trial", target: "Primary Analysis Set", type: "Uses"},
    {source: "Primary Analysis Set", target: "Intention-To-Treat", type: "Includes"},
    {source: "Primary Analysis Set", target: "Per Protocol", type: "Includes"},
    {source: "Clinical Trial", target: "Interim Analysis", type: "Conducts"},
    {source: "Interim Analysis", target: "Futility Analysis", type: "Includes"},
    {source: "Interim Analysis", target: "Efficacy Analysis", type: "Includes"},
    {source: "Interim Analysis", target: "Safety Analysis", type: "Includes"},
    {source: "Clinical Trial", target: "Blinding", type: "Uses"},
    {source: "Blinding", target: "Single-Blind", type: "Includes"},
    {source: "Blinding", target: "Double-Blind", type: "Includes"},
    {source: "Blinding", target: "Triple-Blind", type: "Includes"},
    {source: "Clinical Trial", target: "Randomization", type: "Uses"},
    {source: "Randomization", target: "Simple Randomization", type: "Includes"},
    {source: "Randomization", target: "Stratified Randomization", type: "Includes"},
    {source: "Randomization", target: "Blocked Randomization", type: "Includes"},
    {source: "Randomization", target: "Minimization", type: "Includes"},
    {source: "Clinical Trial", target: "Informed Consent", type: "Obtains"},
    {source: "Informed Consent", target: "Informed Consent Form", type: "Includes"},
    {source: "Clinical Trial", target: "Primary Outcome", type: "Measures"},
    {source: "Primary Outcome", target: "Surrogate Outcome", type: "Includes"},
    {source: "Primary Outcome", target: "Clinical Outcome", type: "Includes"},
    {source: "Primary Outcome", target: "Patient-Reported Outcome", type: "Includes"},
    {source: "Clinical Trial", target: "Secondary Outcome", type: "Measures"},
    {source: "Secondary Outcome", target: "Surrogate Outcome", type: "Includes"},
    {source: "Secondary Outcome", target: "Clinical Outcome", type: "Includes"},
    {source: "Secondary Outcome", target: "Patient-Reported Outcome", type: "Includes"},
    {source: "Clinical Trial", target: "Exploratory Outcome", type: "Measures"},
    {source: "Exploratory Outcome", target: "Surrogate Outcome", type: "Includes"},
    {source: "Exploratory Outcome", target: "Clinical Outcome", type: "Includes"},
    {source: "Exploratory Outcome", target: "Patient-Reported Outcome", type: "Includes"},
    {source: "Clinical Trial", target: "Inclusion Criteria", type: "Uses"},
    {source: "Inclusion Criteria", target: "Demographic Characteristic", type: "Includes"},
    {source: "Inclusion Criteria", target: "Disease Characteristic", type: "Includes"},
    {source: "Inclusion Criteria", target: "Treatment Characteristic", type: "Includes"},
    {source: "Clinical Trial", target: "Exclusion Criteria", type: "Uses"},
    {source: "Exclusion Criteria", target: "Demographic Characteristic", type: "Includes"},
    {source: "Exclusion Criteria", target: "Disease Characteristic", type: "Includes"},
    {source: "Exclusion Criteria", target: "Treatment Characteristic", type: "Includes"},
    {source: "Clinical Trial", target: "Enrollment", type: "Has"},
    {source: "Enrollment", target: "Enrollment Target", type: "Includes"},
    {source: "Enrollment", target: "Enrollment Status", type: "Includes"},
    {source: "Clinical Trial", target: "Data Management Plan", type: "Has"},
    {source: "Data Management Plan", target: "Data Collection", type: "Includes"},
    {source: "Data Management Plan", target: "Data Entry", type: "Includes"},
    {source: "Data Management Plan", target: "Data Quality Assurance", type: "Includes"},
    {source: "Data Management Plan", target: "Data Security", type: "Includes"},
    {source: "Data Management Plan", target: "Data Sharing", type: "Includes"},
    {source: "Clinical Trial", target: "Data Monitoring Committee", type: "Has"},
    {source: "Data Monitoring Committee", target: "Data Safety Monitoring Plan", type: "Follows"},
    {source: "Data Monitoring Committee", target: "Stop Rules", type: "Uses"},
    {source: "Clinical Trial", target: "Statistical Analysis Plan", type: "Has"},
    {source: "Statistical Analysis Plan", target: "Primary Analysis", type: "Includes"},
    {source: "Statistical Analysis Plan", target: "Sensitivity Analysis", type: "Includes"},
    {source: "Statistical Analysis Plan", target: "Subgroup Analysis", type: "Includes"},
    {source: "Clinical Trial", target: "Clinical Study Report", type: "Generates"},
    {source: "Clinical Study Report", target: "Protocol", type: "Includes"},
    {source: "Clinical Study Report", target: "Patient Characteristics", type: "Includes"},
    {source: "Clinical Study Report", target: "Interventions", type: "Includes"},
    {source: "Clinical Study Report", target: "Study Results", type: "Includes"},
    {source: "Clinical Study Report", target: "Adverse Events", type: "Includes"},
    {source: "Clinical Study Report", target: "Conclusions", type: "Includes"},
    {source: "Clinical Trial", target: "Clinical Trial Protocol", type: "Follows"},
    {source: "Clinical Trial Protocol", target: "Study Objectives", type: "Includes"},
    {source: "Clinical Trial Protocol", target: "Study Design", type: "Includes"},
    {source: "Clinical Trial Protocol", target: "Inclusion/Exclusion Criteria", type: "Includes"},
    {source: "Clinical Trial Protocol", target: "Interventions", type: "Includes"},
    {source: "Clinical Trial Protocol", target: "Primary Outcomes", type: "Includes"},
    {source: "Clinical Trial Protocol", target: "Secondary Outcomes", type: "Includes"},
    {source: "Clinical Trial Protocol", target: "Sample Size", type: "Includes"},
    {source: "Clinical Trial Protocol", target: "Data Management Plan", type: "Includes"},
    {source: "Clinical Trial Protocol", target: "Statistical Analysis Plan", type: "Includes"},
    {source: "Clinical Trial Protocol", target: "Data Monitoring Plan", type: "Includes"},
    {source: "Clinical Trial Protocol", target: "Adverse Event Reporting", type: "Includes"},
    {source: "Clinical Trial", target: "Ethics Committee", type: "Approved By"},
    {source: "Ethics Committee", target: "Institutional Review Board", type: "Includes"},
    {source: "Ethics Committee", target: "Independent Ethics Committee", type: "Includes"},
    {source: "Clinical Trial", target: "Regulatory Authority", type: "Approved By"},
    {source: "Regulatory Authority", target: "Food and Drug Administration", type: "Includes"},
    {source: "Regulatory Authority", target: "European Medicines Agency", type: "Includes"},
    {source: "Regulatory Authority", target: "Ministry of Health", type: "Includes"},
    {source: "Clinical Trial", target: "Publication", type: "Results Published In"},
    {source: "Publication", target: "Journal", type: "Includes"}

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
  .force('charge', d3.forceManyBody().strength(-1000).distanceMax(1000))
  .force('center', d3.forceCenter(width / 2, height / 2));
  

// Set up the force-directed layout for the Clinical Trial graph
const ctSimulation = d3.forceSimulation()
  .force('link', d3.forceLink().id(d => d.id))
  .force('charge', d3.forceManyBody().strength(-1000).distanceMax(1000))
  .force('center', d3.forceCenter(ctWidth / 2, ctHeight / 2));


// Set up the force-directed layout for Financial Markets
const financialSimulation = d3.forceSimulation()
  .force('link', d3.forceLink().id(d => d.id))
  .force('charge', d3.forceManyBody().strength(-300).distanceMax(300))
  .force('center', d3.forceCenter(financialWidth / 2, financialHeight / 2));

  


// Set up the drag functions

// Set up the Large Language Model drag functions
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


// Set up the Clinical Trial drag functions
function ctDragstarted(d) {
  if (!d3.event.active) ctSimulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function ctDragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function ctDragended(d) {
  if (!d3.event.active) ctSimulation.alphaTarget(0);
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

// Set up the Clinical Trial link elements
const ctLink = ctSvg.append('g')
  .attr('class', 'links')
  .selectAll('line')
  .data(ctLinks)
  .enter().append('line');  

// Set up the Financial Markets link elements
const financialLink = financialSvg.append('g')
  .attr('class', 'financial-links')
  .selectAll('line')
  .data(financialLinks)
  .enter().append('line');





  // Add a label to each link showing its type

  // Add a LLM labels to each link
  const linkLabel = svg.append('g')
    .attr('class', 'link-labels')
    .selectAll('text')
    .data(links)
    .enter().append('text')
    // .style("font-size", "8px")
    // .style("fill", "white")
    .text(function(d) { return d.type; })
    .attr("text-anchor", "middle")
    .attr("dy", "0");


    // Add a CT labels to each link
    const ctLinkLabel = ctSvg.append('g')
      .attr('class', 'link-labels')
      .selectAll('text')
      .data(ctLinks)
      .enter().append('text')
      .text(function(d) { return d.type; })
      .attr("text-anchor", "middle")
      .attr("dy", "0");

    // Add a Financial labels to each link
    const financialLinkLabel = financialSvg.append('g')
      .attr('class', 'financial-link-labels')
      .selectAll('text')
      .data(financialLinks)
      .enter().append('text')
      // .style("font-size", "8px")
      // .style("fill", "white")
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
  .attr('r', 14)
  .call(d3.drag()
    .on("start", dragstarted)
    .on("drag", dragged)
    .on("end", dragended));

  // Set up the CT node elements
  const ctNode = ctSvg.append('g')
    .attr('class', 'nodes')
    .selectAll('circle')
    .data(ctNodes)
    .enter().append('circle')
    .attr('r', 14)
    .call(d3.drag()
      .on("start", ctDragstarted)
      .on("drag", ctDragged)
      .on("end", ctDragended));
  

// Set up the Financial Markets node elements
const financialNode = financialSvg.append('g')
  .attr('class', 'financial-nodes')
  .selectAll('circle')
  .data(financialNodes)
  .enter().append('circle')
  .attr('r', 14)
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
  .attr("text-anchor", "middle")
  .attr('dy', '0.35em');

  // Create the labels for the Clinical Trials graph
  const ctLabel = ctSvg.append('g')
    .attr('class', 'labels')
    .selectAll('text')
    .data(ctNodes)
    .enter().append('text')
    .text(d => d.id)
    .attr("text-anchor", "middle")
    .attr('dy', '0.35em');  
  
const financialLabel = financialSvg.append('g')
  .attr('class', 'financial-labels')
  .selectAll('text')
  .data(financialNodes)
  .enter().append('text')
  .text(d => d.id)
  .attr("text-anchor", "middle")
  .attr('dy', '0.35em');
  


// Update positions

// Update the position of the LLM nodes and links
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
 

// Update the position of the CT nodes and links
function ctTicked() {
  ctLink
    .attr('x1', d => d.source.x)
    .attr('y1', d => d.source.y)
    .attr('x2', d => d.target.x)
    .attr('y2', d => d.target.y);

  ctNode
    .attr('cx', d => d.x)
    .attr('cy', d => d.y);

  ctLabel
    .attr('x', d => d.x)
    .attr('y', d => d.y);

    // Position the link labels halfway between the source and target nodes
      ctLinkLabel
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

  // Set the nodes, links, and simulation for the CT graph
  ctSimulation
    .nodes(ctNodes)
    .on('tick', ctTicked);

  ctSimulation.force('link')
    .links(ctLinks);

// Set the nodes, links, and simulation for the Financial Markets graph
financialSimulation
  .nodes(financialNodes)
  .on('tick', financialTicked);

financialSimulation.force('link')
  .links(financialLinks);








// Set up the zoom behavior


// Set up the zoom behavior for LLM
const zoom = d3.zoom()
  .scaleExtent([-1, 100])
  .on('zoom', zoomed);

// Add the LLM zoom behavior to the SVG element
// Set the initial LLM zoom level
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


// Set up the zoom behavior for CT
const ctZoom = d3.zoom()
  .scaleExtent([-1, 100])
  .on('zoom', ctZoomed);

// Add the LLM zoom behavior to the SVG element
// Set the initial LLM zoom level
ctZoom.transform(ctSvg, d3.zoomIdentity.scale(.5));

ctSvg.call(ctZoom);

// Set up the zoom function
function ctZoomed() {
  // Update the transform attribute of the nodes and labels group
  ctNode.attr('transform', d3.event.transform);
  ctLabel.attr('transform', d3.event.transform);

  ctLinkLabel.attr('transform', d3.event.transform);

  // Update the transform attribute of the links group
  ctLink.attr('transform', d3.event.transform);
}




// Set up the zoom behavior for Financial Markets
const financialZoom = d3.zoom()
  .scaleExtent([-1, 100])
  .on('zoom', financialZoomed);

// Add the Financial Market zoom behavior to the SVG element
// Set the initial Financial Markets zoom level
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


