import Graph from 'react-vis-network-graph';


export default function NetworkChart(){
    const graph = {
        nodes : [
            {id: 1, label: 'Node 1'},
        ],
        edges: [
            {from: 1, to: 2},
        ]
    }

    const options = {
        height: '350px',
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