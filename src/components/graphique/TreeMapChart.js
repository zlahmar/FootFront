import { ResponsiveTreeMap } from '@nivo/treemap'
import '../../styles/index.css'


const TreeMapChart = ({ data, width }) => (
    <ResponsiveTreeMap
        width={width}
        data={data}
        identity="nationality"
        value="numberOfPlayers"
        margin={{ top: 10, right: 15, bottom: 10, left: 1 }}
        label="id"
        labelSkipSize={30}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    3
                ]
            ]
        }}
        parentLabelPosition="left"
        parentLabelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        colors={{ scheme: 'accent' }}
        nodeOpacity={0.9}
        borderWidth={3}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'brighter',
                    0.3
                ]
            ]
        }}
    />
)


export default TreeMapChart