// d3.axisTop()
// d3.axisRight()
// d3.axisBottom()
// d3.axisLeft()

let data = [80, 100, 56, 120, 180, 30, 40, 120, 160];

let svgWidth = 500, svgHeight = 300;

let svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);

let xScale = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, svgWidth]);
         
let yScale = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([svgHeight, 0]);
     
let x_axis = d3.axisBottom()
    .scale(xScale);

let y_axis = d3.axisLeft()
    .scale(yScale);
         
svg.append("g")
    .attr("transform", "translate(50, 10)")
    .call(y_axis);
         
let xAxisTranslate = svgHeight - 20;
         
svg.append("g")
    .attr("transform", "translate(50, " + xAxisTranslate  +")")
    .call(x_axis);
 