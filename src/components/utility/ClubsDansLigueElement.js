import { LEAGUE } from "../../data/Constants";

class ClubsDansLigueElement{
    constructor(league_name,clubs_id_array){
        this.league_name = league_name;
        this.clubs_id_array = clubs_id_array;
    }

    static create3ClubsInEachLeague(league_name) {
        let clubs_id_array = []
        let MIN = 0;
        let MAX = 0;
        const CONST = 3;        

        switch (league_name) {
            case LEAGUE.ENGLAND:
                clubs_id_array = []

                MIN = 119;
                MAX = 159;

                while (clubs_id_array.length < CONST) {
                    let selected_number = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

                    if (!clubs_id_array.includes(selected_number) || selected_number !== 159) {
                        
                        clubs_id_array.push(selected_number);
                    }
                }

                break;

            case LEAGUE.FRANCE:
                clubs_id_array = []
                MIN = 78;
                MAX = 117;

                while (clubs_id_array.length < CONST) {
                    let selected_number = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

                    if (!clubs_id_array.includes(selected_number)) {
                        clubs_id_array.push(selected_number);
                    }
                }

                break;

            case LEAGUE.GERMANY:
                clubs_id_array = []
                MIN = 1;
                MAX = 36;

                while (clubs_id_array.length < CONST) {
                    let selected_number = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

                    if (!clubs_id_array.includes(selected_number)) {
                        clubs_id_array.push(selected_number);
                    }
                }

                break;

            case LEAGUE.ITALY:
                clubs_id_array = []
                MIN = 160;
                MAX = 205;

                while (clubs_id_array.length < CONST) {
                    let selected_number = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

                    if (!clubs_id_array.includes(selected_number) || selected_number !== 204) {
                        clubs_id_array.push(selected_number);
                    }
                }

                break;

            case LEAGUE.SPAIN:
                clubs_id_array = []
                MIN = 37;
                MAX = 77;

                while (clubs_id_array.length < CONST) {
                    let selected_number = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;

                    if (!clubs_id_array.includes(selected_number)) {
                        clubs_id_array.push(selected_number);
                    }
                }
                break;

            default:
                return "error"            
        }
        return new ClubsDansLigueElement(league_name, clubs_id_array);

    }
}

export default ClubsDansLigueElement;