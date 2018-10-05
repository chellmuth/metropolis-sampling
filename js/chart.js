import * as d3 from "d3"

var margin = {top: 30, right: 20, bottom: 30, left: 50},
  width = 600 - margin.left - margin.right,
  height = 270 - margin.top - margin.bottom

// Set the ranges
var x = d3.scaleLinear().range([0, width])
var y = d3.scaleLinear().range([height, 0])

// Define the axes
var xAxis = d3.axisBottom(x)
var yAxis = d3.axisLeft(y)

export function renderHistogram(histogram, sampleCount) {
  // Adds the svg canvas
  var svg = d3
    .select("body")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

  x.domain([0, 1])
  y.domain([0, d3.max(histogram)])

  // Define the line
  var valueline = d3
    .line()
    .x((d, i) => x(i / histogram.length))
    .y(d => y(d))

  svg
    .append("path")
    .attr("class", "line")
    .attr("d", valueline(histogram))

  svg
    .append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)

  svg
    .append("g")
    .attr("class", "y axis")
    .call(yAxis)
}
