import LEAGUES from "../../data/Api"
import {Component} from "react";

const id = window.location.pathname.slice(-1);
const URL = `${LEAGUES.DATA}/${id}`;

class Club extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nationalityData: {},
            clubs: [] // Ajout de la propriété "clubs" initialisée à une liste vide
        };
    }


    componentDidMount() {
        this.fetchNationalityData();
    }

    fetchNationalityData() {
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                const nameOriginal = data.nationality.name_original;
                const name = data.name;
                const clubs = data.clubs; // Extraction de la liste des clubs
                this.setState({ nationalityData: { nameOriginal, name }, clubs }); // Mise à jour de l'état avec la liste des clubs
            })
            .catch(error => console.error(error));
    }

    render() {
        return (
            <div className="lg:h-screen md:h-full sm:h-full sm:ml-64 flex flex-col justify-between border-2 border-eerieBlack">
                <div className=" bg-tiffanyBlue  ">
                    <p>Pays : {this.state.nationalityData.nameOriginal}</p>
                    <p>Nom championnat : {this.state.nationalityData.name}</p>
                </div>

                <div className=" bg-tiffanyBlue">
                    <ul className="list-disc ">
                        {this.state.clubs.map(club => (
                            <li className="" key={club.id}>{club.name}</li>
                        ))}
                    </ul>

                </div>


            </div>
        );
    }
}

export default Club;