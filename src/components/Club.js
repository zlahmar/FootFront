import LEAGUES from "../data/Constants"


function Club(){
    const { id } = useParams();
    fetch(`${LEAGUES.DATA}/${id}`)
        .then(response => console.log(response))
    return (
        <div>
            Appel a API
            {id}
        </div>
    )
}

export default Club