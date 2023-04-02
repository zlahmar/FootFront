import { Bar } from '@nivo/bar'

const keys = ['yellowcard', 'redcard']
const commonProps = {
    margin : { top: 50, right: 130, bottom: 50, left: 60 },
    indexBy: 'league',
    keys,
    labelTextColor: 'inherit:darker(1.4)',
    labelSkipWidth: 5,
    labelSkipHeight: 10,
}

const CustomBarComponent = ({ bar: { x, y, width, height, color } }) => (
    <circle cx={x + width / 2} cy={y + height / 2} r={Math.min(width, height) / 2} fill={color} />
)

const CircleGroupedChart = ({data, width}) => (
    <Bar 
    barComponent={CustomBarComponent} 
    theme={{
        fontSize: '14px',
        textColor: 'white',
    }}
    width={width}
    height={320}
    data={data}
    colors={['#ffea80', '#fa2a2a']}
    {...commonProps} 
    />
)

export default CircleGroupedChart