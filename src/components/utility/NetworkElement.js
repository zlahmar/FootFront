import { COLOR } from '../../data/Constants';
import { PLAYERS } from '../../data/Api';

class NetworkElement {
    /**
     * Create a new NetworkElement.
     * @param {integer} id - The id of the network element.
     * @param {string} label - The label of the network element.
     * @param {string} color - The color of the network element.
     * @param {string} image - The image URL of the network element.
     */
    constructor(id,label, color, image, title=null) {
        this.id = id;
        this.label = label;
        this.color = color;
        this.font = {
                    color : color
                    };
        this.image = image;
        this.title = title;
    }

    static getIdByLabel(NetworkElement) {
        const id = NetworkElement.id;
        return id;
    }

    static createNetworkElements(type,playerDataArray, startIndex) {
        const networkElements = [];
        let description = "";

        for (let i = 0; i < 5; i++) {
            switch (type) {
                case "striker":
                  description = `All Goals: ${playerDataArray[i].allGoals}`;
                  break;
                case "playmaker":
                  description = `All Assists: ${playerDataArray[i].allAssists}`;
                  break;
                case "goalkeeper":
                  description = `All Goal Against: ${playerDataArray[i].allGas}`;
                  break;
                default:
                  description = "";
                  break;
              }
                
          networkElements.push(
            new NetworkElement(
              startIndex + i,
              playerDataArray[i].playerName,
              COLOR.TIFFANYBLUE,
              PLAYERS.IMG + "/" + playerDataArray[i].playerId,

              `${i+1}. ${playerDataArray[i].playerName} <br>
              <hr>
               All Nb Games : ${playerDataArray[i].allNbGames} <br>
               ${description}
               `
            )
          );
        }
        return networkElements;
    } 

    static createEdgeFromTo(elements,toNetworkElement, arrow_type = null) {
        const node = []

        for (let i = 0; i < elements.length; i++) {
            if (arrow_type === null) {
            node.push({from : NetworkElement.getIdByLabel(elements[i]),
                        to : NetworkElement.getIdByLabel(toNetworkElement)})
            } else {
            node.push({from : NetworkElement.getIdByLabel(elements[i]),
                        to : NetworkElement.getIdByLabel(toNetworkElement),
                        arrows : {from: {enabled: true, type: arrow_type}}})
            }
        }
        return node
    }
    
}

export default NetworkElement;