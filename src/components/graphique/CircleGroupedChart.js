import { Bar } from '@nivo/bar'

const keys = ['redcard', 'yellowcard']
const commonProps = {
    margin : { top: 10, right: 130, bottom: 50, left: 60 },
    indexBy: 'league',
    keys,
    labelTextColor: 'inherit:darker(1.4)',
    labelSkipWidth: 10,
    labelSkipHeight: 10,
}

const CustomBarComponent = ({ bar: { x, y, width, height, color } }) => (
    <circle cx={x + width / 2} cy={y + height / 3} r={Math.min(width, height) / 2} fill={color} />
)

const CircleGroupedChart = ({data, width}) => (
    <Bar 
    barComponent={CustomBarComponent} 
    theme={{
        fontSize: '14px',
        textColor: 'white',
    }}
    width={width}
    height={350}
    data={data}
    colors={['#fa2a2a', '#ffea80']}
    {...commonProps} 
    />
)

export default CircleGroupedChart