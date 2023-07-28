import Graph from 'react-vis-network-graph';
import { COLOR } from '../../data/Constants';
import messi from '../../assets/messi.png';

export default function NetworkChart(props){
    const club = props.club;
    const club_img_url = props.club_img;

    const graph = {
        nodes : [
            // 1st level - Club
            {id: 1, label: club.name, title:"<div className='p-3 border border-3 border-black'><strong>title club</strong><hr><p>description club</p></div>",
            color: COLOR.WHITE, 
            image: "data:image/png;base64,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", 
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