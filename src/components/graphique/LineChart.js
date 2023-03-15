import { useEffect, useRef } from "react";
import '../../styles/index.css'
import * as d3 from 'd3'


function LineChart(props){
    // console.log("dataArray : ",props.array[0])
    const svgRef = useRef();
    let data = props.array 
    
    console.log("Data : ", data)
    let ligue_1_rank = data.map(value => value.league.name === "Ligue 1" ? {year : value.year, rank : value.rank} : null);
    ligue_1_rank = ligue_1_rank.filter(element => element !== null) 
    console.log("Ligue 1 Rank : ", ligue_1_rank)
    console.log("Ligue 1 Rank 2002 : ", ligue_1_rank[0].year, ligue_1_rank[0].rank)    
    console.log(data[0].year, data.slice(-1)[0].year)

    useEffect(() => {
        // 1. Setting up the svg
        const w = 700;
        const h = 500;
        const svg = d3.select(svgRef.current)
            .attr("width", w)
            .attr("height", h)
            .style("background-color", "white")
            .style("border-radius", "10px")
        
        // 2. Setting up the scales
        const first_year = data[0].year
        const last_year = data.slice(-1)[0].year

        const xScale = d3.scaleLinear()
            .domain([first_year,last_year])
            .range([0,w]);

        const yScale = d3.scaleLinear()
            .domain([0,10])
            .range([h,0]);
        
        const generateScaledLine = d3.line()     
            .x((d,number) => xScale(number)) 
            .y(yScale)
            .curve(d3.curveCardinal);  

        // 3. Setting up the axis
        // svg.selectAll('.line')
        //     .data(data.forEach((element) => element.rank))

        // 4. Setting up the data for the svg
    },[data])

    return(
        <div className='text-white'>
            <svg ref={svgRef}>
            </svg>
        </div>
    )
}

export default LineChart;
