import Graph from 'react-vis-network-graph';
import { COLOR } from '../../data/Constants';

export default function NetworkChart(props){
    const club = props.club;
    const club_img_url = props.club_img_url;

    const striker_test = [
        {from: 5, to: 2},
        {from: 6, to: 2},
        {from: 7, to: 2},
        {from: 8, to: 2},
        {from: 9, to: 2},
    ]
    const passer_test = [
        {from: 10, to: 3},
        {from: 11, to: 3},
        {from: 12, to: 3},
        {from: 13, to: 3},
        {from: 14, to: 3},
    ]
    const goalkeeper_test = [
        {from: 15, to: 4},
        {from: 16, to: 4},
        {from: 17, to: 4},
        {from: 18, to: 4},
        {from: 19, to: 4},
    ]
    const graph = {
        nodes : [
            // 1st level - Club
            {id: 1, label: club.name, title:"<div className='p-3 border border-3 border-black'><strong>TOP Joueurs</strong><hr><p>description club</p></div>",
            color: COLOR.WHITE, 
            shape: "circularImage",
            image: `${club_img_url}/${club.name}`, 
            font: {color: COLOR.WHITE},
            },

            // 2nd level - Role
            {id: 2, label: 'Buteur', color: COLOR.POWDERBLUE, font: {color: COLOR.POWDERBLUE}},
            {id: 3, label: 'Passeur', color: COLOR.POWDERBLUE, font: {color: COLOR.POWDERBLUE}},
            {id: 4, label: 'Gardien', color: COLOR.POWDERBLUE, font: {color: COLOR.POWDERBLUE}},

            // 3rd level - 10 Buteurs
            {id: 5, label: 'Node 5', color: COLOR.TIFFANYBLUE, font: {color: COLOR.TIFFANYBLUE}},
            {id: 6, label: 'Node 6', color: COLOR.TIFFANYBLUE, font: {color: COLOR.TIFFANYBLUE}},
            {id: 7, label: 'Node 7', color: COLOR.TIFFANYBLUE, font: {color: COLOR.TIFFANYBLUE}},
            {id: 8, label: 'Node 8', color: COLOR.TIFFANYBLUE, font: {color: COLOR.TIFFANYBLUE}},
            {id: 9, label: 'Node 9', color: COLOR.TIFFANYBLUE, font: {color: COLOR.TIFFANYBLUE}},
            // 3rd level - 10 Passeurs
            {id: 10, label: 'Node 10', color: COLOR.TIFFANYBLUE, font: {color: COLOR.TIFFANYBLUE}},
            {id: 11, label: 'Node 11', color: COLOR.TIFFANYBLUE, font: {color: COLOR.TIFFANYBLUE}},
            {id: 12, label: 'Node 12', color: COLOR.TIFFANYBLUE, font: {color: COLOR.TIFFANYBLUE}},
            {id: 13, label: 'Node 13', color: COLOR.TIFFANYBLUE, font: {color: COLOR.TIFFANYBLUE}},
            {id: 14, label: 'Node 14', color: COLOR.TIFFANYBLUE, font: {color: COLOR.TIFFANYBLUE}},
            // 3rd level - 10 Gardiens
            {id: 15, label: 'Node 15', color: COLOR.TIFFANYBLUE, font: {color: COLOR.TIFFANYBLUE}},
            {id: 16, label: 'Node 16', color: COLOR.TIFFANYBLUE, font: {color: COLOR.TIFFANYBLUE}},
            {id: 17, label: 'Node 17', color: COLOR.TIFFANYBLUE, font: {color: COLOR.TIFFANYBLUE}},
            {id: 18, label: 'Node 18', color: COLOR.TIFFANYBLUE, font: {color: COLOR.TIFFANYBLUE}},
            {id: 19, label: 'Node 19', color: COLOR.TIFFANYBLUE, font: {color: COLOR.TIFFANYBLUE}},

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

            // for Buteur (id=2)
            ...striker_test,
            // for Passeur (id=3)
            ...passer_test,
            // for Gardien (id=4)
            ...goalkeeper_test,
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