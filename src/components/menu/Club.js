import LEAGUES from "../../data/Constants"
import {Component} from "react";

const id = window.location.pathname.slice(-1);
const URL = `${LEAGUES.DATA}/${id}`;

class Club extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nationalityData: {}
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
                const id = data.nationality.id;
                this.setState({ nationalityData: { nameOriginal, id } });
            })
            .catch(error => console.error(error));
    }

    render() {
        return (
            <div>
                <p>Pays : {this.state.nationalityData.nameOriginal}</p>
                <p>ID de la nationalité : {this.state.nationalityData.id}</p>
            </div>
        );
    }
}

export default Club;