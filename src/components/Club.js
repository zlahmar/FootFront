
function Club({id}){


    fetch(`https://footstatsapi-footapi.azuremicroservices.io/api/leagues/${id}`)
        .then(response => console.log(response))
    return (
        <div>
            Appel a API
            {id}
        </div>
    )
}

export default Club