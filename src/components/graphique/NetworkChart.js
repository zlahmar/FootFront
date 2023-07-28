import Graph from 'react-vis-network-graph';
import { COLOR } from '../../data/Constants';
import messi from '../../assets/messi.png';

export default function NetworkChart(){
    const graph = {
        nodes : [
            // 1st level - Club
            {id: 1, label: 'Club', title:"<div className='p-3 border border-3 border-black'><strong>title club</strong><hr><p>description club</p></div>",
            color: COLOR.WHITE, 
            image: messi, 
            font: {color: COLOR.WHITE},
            shape: "circularImage"},

            // 2nd level - Role
            {id: 2, label: 'Buteur', color: COLOR.POWDERBLUE, font: {color: COLOR.POWDERBLUE}},
            {id: 3, label: 'Passeur', color: COLOR.POWDERBLUE, font: {color: COLOR.POWDERBLUE}},
            {id: 4, label: 'Gardien', color: COLOR.POWDERBLUE, font: {color: COLOR.POWDERBLUE}},

            // 3rd level - 10 Buteurs
            {id: 5, label: 'Node 5', color: COLOR.TIFFANYBLUE, font: {color: COLOR.TIFFANYBLUE}},
            {id: 6, label: 'Node 6', color: COLOR.TIFFANYBLUE, font: {color: COLOR.TIFFANYBLUE}},

            // 3rd level - 10 Passeurs
            {id: 7, label: 'Node 7', color: COLOR.TIFFANYBLUE, font: {color: COLOR.TIFFANYBLUE}},
            {id: 8, label: 'Node 8', color: COLOR.TIFFANYBLUE, font: {color: COLOR.TIFFANYBLUE}},

            // 3rd level - 10 Gardiens
            {id: 9, label: 'Node 9', color: COLOR.TIFFANYBLUE, font: {color: COLOR.TIFFANYBLUE}},
            {id: 10, label: 'Node 10', color: COLOR.TIFFANYBLUE, font: {color: COLOR.TIFFANYBLUE}},
        ],
        edges: [
            // for Club (id=1) from Role (id=2,3,4)
            {
            from: 2, to: 1, 
            arrows: {from: {enabled: true, type: "circle"},}
            },
            {
            from: 3, to: 1, 
            arrows: {from: {enabled: true, type: "circle"},}
            },
            {
            from: 4, to: 1,
            arrows: {from: {enabled: true, type: "circle"},}
            },

            // for Buteur (id=2) from Player (id=5,6)
            {from: 5, to: 2},
            {from: 6, to: 2},

            // for Passeur (id=3) from Player (id=7,8)
            {from: 7, to: 3},
            {from: 8, to: 3},

            // for Gardien (id=4) from Player (id=9,10)
            {from: 9, to: 4},
            {from: 10, to: 4},
        ]
    }

    const options = {
        height: '350px',
        nodes: {
            shape: 'dot',
            borderWidth: 3,
            size: 40,
            scaling: {
                min: 10,
                max: 30,
            },
            font: {
                size: 30,
                face: "Tahoma",
            },
        },
        physics: {
            enabled: false,
        },
        interaction:{
            hover: true,
            hoverConnectedEdges: true,
        },
        edges: {
            width: 4,
            color: { inherit: true },
            smooth: {
                type: 'curvedCW',
            },
            length:200,
        },
    }

    return(
        <div className='flex justify-center items-center'>
            <Graph
                graph={graph}
                options={options}
            />
        </div>
    )
}