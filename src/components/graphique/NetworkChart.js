import Graph from 'react-vis-network-graph';
import { COLOR } from '../../data/Constants';
import NetworkElement from '../utility/NetworkElement';

// Icons
import striker from '../../assets/network/striker.png';
import playmaker from '../../assets/network/playmaker.png';
import goalkeeper from '../../assets/network/goalkeeper.png';

export default function NetworkChart(props){ 

    // ----------------
    // 1) DATA (props)
    // ----------------
    
    const club = props.club;
    const club_img_url = props.club_img_url;
    const best_top_10_strikers = props.best_top_10_strikers;
    const best_top_10_playmakers = props.best_top_10_playmakers;
    const best_top_10_goalkeepers = props.best_top_10_goalkeepers;

    // -------------------------
    // 2) NetworkElement - Club
    // -------------------------

    // 1st level - Club
    const description = "<div className='p-3 border border-3 border-black'><strong>TOP Joueurs</strong><hr><p>description club</p></div>"
    const club_element = new NetworkElement(1, club.name, COLOR.WHITE, club_img_url+'/'+club.name,description)
    
    // 2nd level - Role
    const striker_element = new NetworkElement(2,"Buteur", COLOR.POWDERBLUE,striker,"")
    const playmaker_element = new NetworkElement(3,"Passeur", COLOR.POWDERBLUE,playmaker, "")
    const goalkeeper_element = new NetworkElement(4,"Gardien", COLOR.POWDERBLUE,goalkeeper, "")

    // 3rd level - 5 Buteurs, 5 Passeurs, 5 Gardiens
    const best_top_5_strikers_elements = NetworkElement.createNetworkElements("striker",best_top_10_strikers, NetworkElement.getIdByLabel(goalkeeper_element)+1);
    const best_top_5_playmakers_elements = NetworkElement.createNetworkElements("playmaker",best_top_10_playmakers, best_top_5_strikers_elements[best_top_5_strikers_elements.length - 1].id + 1);
    const best_top_5_goalkeepers_elements = NetworkElement.createNetworkElements("goalkeeper",best_top_10_goalkeepers, best_top_5_playmakers_elements[best_top_5_playmakers_elements.length - 1].id + 1);

    // ---------
    // 3) Edges
    // ---------

    // 1st level : Roles -> Club
    const role_edge = NetworkElement.createEdgeFromTo([striker_element, playmaker_element, goalkeeper_element],club_element, "circle")
 
    // 2nd level : 5 Buteurs, 5 Passeurs, 5 Gardiens -> Role
    const strikers_edge = NetworkElement.createEdgeFromTo(best_top_5_strikers_elements,striker_element)
    const playmakers_edge = NetworkElement.createEdgeFromTo(best_top_5_playmakers_elements,playmaker_element)
    const goalkeepers_edge = NetworkElement.createEdgeFromTo(best_top_5_goalkeepers_elements,goalkeeper_element)

    // ----------------
    // 4) Graph - nodes, edges
    // ----------------
    const graph = {
        nodes : [
            // 1st level - Club
            club_element,

            // 2nd level - Role
            striker_element,
            playmaker_element,
            goalkeeper_element,

            // 3rd level - 5 Buteurs
            ...best_top_5_strikers_elements,

            // 3rd level - 5 Passeurs
            ...best_top_5_playmakers_elements,

            // 3rd level - 5 Gardiens
            ...best_top_5_goalkeepers_elements,

        ],
        edges: [
            // Roles -> Club
            ...role_edge,
            // Buteurs -> Role
            ...strikers_edge,
            // Passeurs -> Role
            ...playmakers_edge,
            // Gardiens -> Role
            ...goalkeepers_edge,
        ]
    }

    // ----------------
    // 5) Options
    // ----------------
    const options = {
        autoResize: true,
        height: '350px',
        nodes: {
            shape: 'circularImage',
            borderWidth: 3,
            size: 35,
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

    // ----------------
    // 6) Render
    // ----------------
    return(
        <div className='flex justify-center items-center'>
            <Graph
                graph={graph}
                options={options}
            />
        </div>
    )
}