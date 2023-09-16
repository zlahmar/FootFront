import { DESCRIPTION } from '../../data/Constants';
import { CLUBS } from '../../data/Api';
class ChronoElement {
    constructor(chrono) {
        this.chrono = chrono;
    }

    createChronoElements() {
        let chrono_item = {
            title : this.chrono.season,
            cardTitle : this.chrono.club.name,
            cardSubtitle: DESCRIPTION.ALL_GAMES + ': ' + this.chrono.nb_game,
            timelineContent:<div>
                                <table className="table-fixed border-separate border-spacing-1 border border-eerieBlack">
                                    <tbody>
                                        <tr>
                                            <td>{DESCRIPTION.ALL_GOALS}</td>
                                            <td className="text-right">{this.chrono.goal}</td>
                                        </tr>
                                        <tr>
                                            <td>{DESCRIPTION.ALL_ASSISTS}</td>
                                            <td className="text-right">{this.chrono.assist}</td>
                                        </tr>
                                        <tr>
                                            <td>{DESCRIPTION.YELLOW_CARDS}</td>
                                            <td className="text-right">{this.chrono.yellow_card}</td>
                                        </tr>
                                        <tr>
                                            <td>{DESCRIPTION.RED_CARDS}</td>
                                            <td className="text-right">{this.chrono.red_card}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>,
            media: {
            type: "IMAGE",
            source: {
                url: CLUBS.IMG+'/'+this.chrono.club.name            
            }
            }
        }
        return chrono_item
    }

}

export default ChronoElement;