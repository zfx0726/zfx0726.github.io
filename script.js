// Set up the chart
const width = 800;
const height = 600;
const svg = d3.select("#chart")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

// Create the nodes
      const nodes = [
        { name: "GPT-3" },
        { name: "BERT" },
        { name: "Transformer" },
        { name: "ELMo" },
        { name: "XLNet" },
        { name: "RoBERTa" },
        { name: "OpenAI" },
        { name: "Google" },
        { name: "Microsoft" },
        { name: "Language modeling" },
        { name: "Transfer learning" },
        { name: "Natural language processing" },
        { name: "Pre-training" }
      ];

      // Create the links
      const links = [
        { source: 0, target: 2 },
        { source: 1, target: 2 },
        { source: 2, target: 3 },
        { source: 2, target: 4 },
        { source: 2, target: 5 },
        { source: 3, target: 4 },
        { source: 3, target: 5 },
        { source: 4, target: 5 },
        { source: 3, target: 6 },
        { source: 3, target: 7 },
        { source: 2, target: 10 },
        { source: 1, target: 10 },
        { source: 1, target: 11 },
        { source: 11, target: 12 },
        { source: 0, target: 11 },
        { source: 4, target: 11 },
        { source: 5, target: 11 },
        { source: 7, target: 8 },
        { source: 8, target: 9 }
      ];

// Set up the force simulation
const simulation = d3.forceSimulation(nodes)
  .force("charge", d3.forceManyBody())
  .force("link", d3.forceLink(links).distance(100))
  .force("center", d3.forceCenter(width / 2, height / 2));

// Add the links to the chart
const link = svg.append("g")
  .attr("class", "links")
  .selectAll("line")
  .data(links)
  .enter()
  .append("line");

// Add the nodes to the chart
const node = svg.append("g")
  .attr("class", "nodes")
  .selectAll("circle")
  .data(nodes)
  .enter()
  .append("circle")
  .attr("r", 10)
  .call(d3.drag()
    .on("start", dragstarted)
    .on("drag", dragged)
    .on("end", dragended));

// Add the labels to the nodes
const label = svg.append("g")
  .attr("class", "labels")
  .selectAll("text")
  .data(nodes)
  .enter()
  .append("text")
  .text(d => d.name)
  .style("text-anchor", "middle");

// Set up the tick function
simulation.on("tick", () => {
  link.attr("x1", d => d.source.x)
  .attr("y1", d => d.source.y)
  .attr("x2", d => d.target.x)
  .attr("y2", d => d.target.y);
  node.attr("cx", d => d.x)
  .attr("cy", d => d.y);
  label.attr("x", d => d.x)
  .attr("y", d => d.y);
});

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