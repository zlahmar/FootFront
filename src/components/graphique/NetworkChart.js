import Graph from 'react-vis-network-graph';
import { COLOR } from '../../data/Constants';


export default function NetworkChart(){
    const graph = {
        nodes : [
            // 1st level
            {id: 1, label: 'Club', title:"<div className='p-3 border border-3 border-black'><strong>title club</strong><hr><p>description club</p></div>",
            shape: "box"},

            // 2nd level
            {id: 2, label: 'Buteur'},
            {id: 3, label: 'Passeur'},
            {id: 4, label: 'Gardien'},

            // 3rd level - 10 Buteurs
            {id: 5, label: 'Node 5'},
            {id: 6, label: 'Node 6'},

            // 3rd level - 10 Passeurs
            {id: 7, label: 'Node 7'},
            {id: 8, label: 'Node 8'},

            // 3rd level - 10 Gardiens
            {id: 9, label: 'Node 9'},
            {id: 10, label: 'Node 10'},
        ],
        edges: [
            // for Club (id=1)
            {from: 2, to: 1},
            {from: 3, to: 1},
            {from: 4, to: 1},

            // for Buteur (id=2)
            {from: 5, to: 2},
            {from: 6, to: 2},

            // for Passeur (id=3)
            {from: 7, to: 3},
            {from: 8, to: 3},

            // for Gardien (id=4)
            {from: 9, to: 4},
            {from: 10, to: 4},
        ]
    }

    const options = {
        autoResize: true,
        physics: {
            enabled: false,
        },
        height: '350px',
        interaction:{
            hover: true,
            hoverConnectedEdges: true,
            selectConnectedEdges: false,
            zoomView: true,
        },
        edges: {
            color: COLOR.TIFFANYBLUE,
        },
    }

    return(
        <div>
            <Graph
                graph={graph}
                options={options}
                
            
            />
        </div>
    )
}