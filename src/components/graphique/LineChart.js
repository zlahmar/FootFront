import { Line } from "react-chartjs-2";
import { 
    Chart as Chartjs,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend

  } from "chart.js";
import { createImage } from "../utility/Utility";
import logo from "../../assets/icon/ball.png";
import cup from "../../assets/icon/cup.png";
import { COLOR, START_SEASON, NUMBER_OF_SEASONS } from "../../data/Constants";
import { generateSeason } from "../../data/Arrays";

// 1) CHARTJS
Chartjs.defaults.color = COLOR.WHITE;
Chartjs.register(
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);

// 2) Image as data point
const img_ball = createImage(logo, 45, 45)
const img_cup = createImage(cup, 45, 45)

export default function LineChart(props){
    const skipped = (ctx, value) => ctx.p0.skip || ctx.p1.skip ? value : undefined;
    const skippedArea = {
        id: 'skippedArea',
        beforeDatasetsDraw(chart){
            const {ctx, data, chartArea: { top, width, height },
                    scales: {x} } = chart;
            const tickWidth = width / x.max ;
            ctx.save();
            data.datasets[0].data.map((datapoint, index) =>{
                if(datapoint === null && index !== 0){
                    ctx.fillStyle = COLOR.GREY;
                    ctx.fillRect(x.getPixelForValue(index) - tickWidth,top,x.getPixelForValue(index+1) -(x.getPixelForValue(index)-tickWidth),height);
                } 

                if(datapoint === null && index === 0){
                    ctx.fillStyle = COLOR.GREY;
                    ctx.fillRect(x.getPixelForValue(index+1) - tickWidth,top,x.getPixelForValue(index+2) -(x.getPixelForValue(index)-tickWidth),height);
                }

                ctx.restore();
                return null;
            })

        }
    }

    const data = {
        labels: generateSeason(START_SEASON,NUMBER_OF_SEASONS),
        datasets: [
          {
          label: ['Ranks'],
          data: props.club.map((club) => club.rank),
          backgroundColor: [
            COLOR.WHITE,
          ],
          borderColor: [
            COLOR.WHITE,
          ],
          tension:0.1,
          spanGaps: true,
          segment: {
              borderDash: (ctx) => skipped(ctx, [3,4]) || []
          }
          },
          {
            label: ['No Data in {league_name}'],
            backgroundColor: [
              COLOR.GREY,
            ],
            borderColor: [
              COLOR.GREY,
            ],
          },
        ],
    };

    const point_array=data.datasets[0].data.map((datapoint) =>{
        return datapoint === 1 ? img_cup : img_ball
    });

    const options = {
        responsive : true,
        maintainAspectRatio: false,
        scales: {
            x: {
              ticks: {color:COLOR.WHITE},
              grid: {color:COLOR.WHITE}
            },
            y: {
              beginAtZero: true,
              ticks: {color:COLOR.WHITE, stepSize:1},
              grid: {color:COLOR.WHITE}
            },
        },
        elements: {
            point: {
              pointStyle: point_array,
              radius: 5,
              hoverRadius: 10,
            }
        }
    }

    return(
        <div className="w-full h-[30rem] mx-auto">
            <Line 
                width={800}
                data = {data}
                options = {options}  
                plugins= {[skippedArea]}
            ></Line>
        </div>
    )
}