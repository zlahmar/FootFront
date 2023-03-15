import { useEffect, useRef, useState } from "react";
import '../../styles/index.css'
import LEAGUE from '../../data/Constants'
import * as d3 from 'd3'

const getLeagueArrayRankByYear = (obj_array, league) => {
    let array = obj_array.map(value => value.league.name === league ? 
                {year : value.year, rank : value.rank} : null);
    array = array.filter(value => value !== null)
    return array
}


function LineChart(props){
    // console.log("dataArray : ",props.array[0])
    const svgRef = useRef();
    let data = props.array 

    // Leagues Data Array (Ranking by year)
    let ligue_1 = getLeagueArrayRankByYear(data, LEAGUE.FRANCE)
    // let premier_league_rank = getLeagueArrayRankByYear(data, LEAGUE.ENGLAND)
    // let la_liga_rank = getLeagueArrayRankByYear(data, LEAGUE.SPAIN)
    // let serie_a_rank = getLeagueArrayRankByYear(data, LEAGUE.ITALY)
    // let bundes_liga_rank = getLeagueArrayRankByYear(data, LEAGUE

    useEffect(() => {
        // 1. Setting up the svg
        const w = 700;
        const h = 300;
        const svg = d3.select(svgRef.current)
            .attr("width", w)
            .attr("height", h)
            .style("background-color", "white")
            .style("border-radius", "10px")
            .style("margin", "10px")
        
        // 2. Setting up the scales
        const first_year = data[0].year
        const last_year = data.slice(-1)[0].year

        const xScale = d3.scaleLinear()
            .domain([first_year,last_year])
            .range([0,w]);

        const yScale = d3.scaleLinear()
            .domain([0,h])
            .range([h,0]);
        
        const generateScaledLine = d3.line()     
            .x((d,number) => xScale(number)) 
            .y(yScale)
            .curve(d3.curveCardinal);  

        // 3. Setting up the axis
        svg.selectAll('.line')
            .data([data])
            .join('path')
            .attr('d', d => generateScaledLine(d))
            .attr('fill', 'none')
            .attr('stroke', 'red')
        // 4. Setting up the data for the svg
    },[data]);

    return(
        <div>
            <p className="text-white">UEFA Ranking</p>
            <svg ref={svgRef}>
            </svg>
        </div>
    )
}

export default LineChart;
