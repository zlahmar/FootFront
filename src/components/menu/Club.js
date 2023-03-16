import LEAGUES from "../../data/Constants"
import {useState} from "react";

function Club(){

    const id = window.location.pathname.slice(-1);
    const URL = `${LEAGUES.DATA}/${id}`;
    const[data, setData] = useState();




    fetch(URL)
        .then(response => response.text)
        .then(data => console.log(data))



    return (
        <div>
            Appel a API
        </div>
    )
}

export default Club