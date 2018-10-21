
let dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];

let barSVGWidth = 650, barSVGHeight = 300, barPadding = 5;
let barWidth = (barSVGWidth / dataset.length);


let barSVG = d3.select('.bar-chart')
    .attr("width", barSVGWidth)
    .attr("height", barSVGHeight);
    
let barChart = barSVG.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y", d => {
         return barSVGHeight - d 
    })
    .attr("height", d => { 
        return d; 
    })
    .attr("width", barWidth - barPadding)
    .attr("class", "bar")
    .attr("transform", (d, i) => {
        let translate = [barWidth * i, 0]; 
        return "translate("+ translate +")";
    });

// Adds Labels
let text = barSVG.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(d => {
        return d;
    })
    .attr("y", (d, i) => {
        return barSVGHeight - d - 2;
    })
    .attr("x", (d, i) => {
        return barWidth * i;
    })
    .attr("fill", "#A64C38");
