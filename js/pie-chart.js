
let data = [
    {"platform": "Android", "percentage": 40.11}, 
    {"platform": "Windows", "percentage": 36.69},
    {"platform": "iOS", "percentage": 13.06}
];

let pieSVGWidth = 500, pieSVGHeight = 300, radius =  Math.min(pieSVGWidth, pieSVGHeight) / 2;
let pieSVG = d3.select('.pie-chart')
    .attr("width", pieSVGWidth)
    .attr("height", pieSVGHeight);

// Create group element to hold pie chart    
let g = pieSVG.append("g")
    .attr("transform", "translate(" + radius + "," + radius + ")") ;

let color = d3.scaleOrdinal(d3.schemeCategory10);

let pie = d3.pie().value(d => { 
     return d.percentage; 
});

let path = d3.arc()
    .outerRadius(radius)
    .innerRadius(0);
 
let arc = g.selectAll("arc")
    .data(pie(data))
    .enter()
    .append("g");

arc.append("path")
    .attr("d", path)
    .attr("fill", d => { return color(d.data.percentage); });
        
let label = d3.arc()
    .outerRadius(radius)
    .innerRadius(0);
            
arc.append("text")
    .attr("transform", d => { 
        return "translate(" + label.centroid(d) + ")"; 
    })
    .attr("text-anchor", "middle")
    .text(d => { return d.data.platform+": "+d.data.percentage+"%"; });