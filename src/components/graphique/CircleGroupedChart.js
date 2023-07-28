import { Bar } from '@nivo/bar'
import { COLOR } from '../../data/Constants'

const keys = ['redcard', 'yellowcard']
const colors = [COLOR.RED, COLOR.YELLOW]
const commonProps = {
    margin : { top: 10, right: 130, bottom: 50, left: 60 },
    indexBy: 'league',
    keys,
    labelTextColor: 'inherit:darker(1.4)',
    labelSkipWidth: 10,
    labelSkipHeight: 10,
    axisBottom:{
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: 'league',
    legendPosition: 'middle',
    legendOffset: 32
        },
    axisLeft:{
        tickSize: 5,
        tickPadding: -15,
        tickRotation: 0,
        legend: 'total (redcard + yellowcard)',
        legendPosition: 'middle',
        legendOffset: -40,
        legendRotation: 90
        },      
}

const CustomBarComponent = ({ bar: { x, y, width, height, color } }) => (
    <circle cx={x + width / 2} cy={y + height / 3} r={Math.min(width, height) / 2} fill={color} />
)

const CircleGroupedChart = ({data, width}) => (
    <Bar 
    barComponent={CustomBarComponent} 
    theme={{
        fontSize: '14px',
        textColor: COLOR.TIFFANYBLUE,
    }}
    width={width}
    height={350}
    data={data}
    colors={colors}
    {...commonProps} 
    />
)

export default CircleGroupedChart