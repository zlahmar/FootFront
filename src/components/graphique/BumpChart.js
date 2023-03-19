import { ResponsiveBump } from '@nivo/bump'
import '../../styles/index.css'


  const BumpChart = ({ data }) => (
    
        <ResponsiveBump
            data={data}
            colors={{ scheme: 'nivo' }}
            lineWidth={3}
            activeLineWidth={6}
            inactiveLineWidth={3}
            inactiveOpacity={0.15}
            pointSize={10}
            activePointSize={16}
            inactivePointSize={0}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={3}
            activePointBorderWidth={3}
            pointBorderColor={{ from: 'serie.color' }}
            theme={{
                fontSize: '14px',
                textColor: 'white',
            }}
            
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: '',
                legendPosition: 'middle',
                legendOffset: 32
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'ranking',
                legendPosition: 'middle',
                legendOffset: -40,
            }}
            motionConfig="wobbly"
            margin={{right: 150, bottom: 40, left: 30 }}
            axisRight={null}
            axisTop={null}
        />

)


export default BumpChart