import { Line } from "react-chartjs-2";
import { 
    Chart as Chartjs,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    elements
  } from "chart.js";
import { createImage } from "../utility/utility";
import logo from "../../assets/icon/ball.png";
import cup from "../../assets/icon/cup.png";
// 1) CHARTJS
Chartjs.defaults.color = "#fff";
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


export default function LineChart(){
    const skipped = (ctx, value) => ctx.p0.skip || ctx.p1.skip ? value : undefined;
    const skippedArea = {
        id: 'skippedArea',
        beforeDatasetsDraw(chart){
            const {ctx, data, chartArea: { left, right, top, bottom, width, height },
                    scales: {x,y} } = chart;
            const tickWidth = width / x.max;

            ctx.save();

            data.datasets[0].data.map((datapoint, index) =>{
                if(datapoint === null){
                    ctx.fillStyle = 'rgba(57, 58, 62, 1)';
                    ctx.fillRect(x.getPixelForValue(index) - tickWidth,top,x.getPixelForValue(index+1) -(x.getPixelForValue(index)-tickWidth),height);
                }
            })

            ctx.restore(); // Move the ctx.restore() call outside the forEach loop
        }
    }

    const data = {
        labels: ['2002-2003', '2003-2004', '2004-2005', '2005-2006', '2006-2007', '2007-2008', '2008-2009','2009-2010', '2010-2011', '2011-2012', '2012-2013', '2013-2014', '2014-2015', '2015-2016', '2016-2017', '2017-2018', '2018-2019', '2019-2020', '2020-2021', '2021-2022'],
        datasets: [
          {
          label: ['Ranks'],
          data: [15, 12, 15, 9, null, 4, 9, null,1, 15, 9, 2, 4, 9,1, 15, 9, 2, 4, 20],
          backgroundColor: [
            'rgba(255, 255, 255, 0.7)',
          ],
          borderColor: [
            'rgba(255, 255, 255, 1)',
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
              'rgba(57, 58, 62, 0.3)',
            ],
            borderColor: [
              'rgba(57, 58, 62, 1)',
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
              ticks: {color:"white"},
              grid: {color:"white"}
            },
            y: {
              beginAtZero: true,
              ticks: {color:"white"},
              grid: {color:"white"}
            }
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