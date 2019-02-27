// // Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
// console.log(data);

var data = d3.json('/model_1415')
.then(function(data) { 
  console.log(data);
})

var tooltip = d3.select("data-tooltip")
    .append("tool")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")
    .style("background", "#000")
    .text("a simple tooltip");

d3.select("data-tooltip")
  .selectAll("tool")
    .data(data)
    .enter().append("tool")
    .style("width", function(d) { return x(d) + "px"; })
    .text(function(d) { return d; })
    .on("mouseover", function(d){tooltip.text(d); return tooltip.style("visibility", "visible");})
    .on("mousemove", function(){return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})
    .on("mouseout", function(){return tooltip.style("visibility", "hidden");});
