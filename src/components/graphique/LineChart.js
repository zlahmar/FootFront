import '../../styles/index.css'

function LineChart({ranking_data}){
    return(
        <div className='text-white'>
            <p>{ranking_data.id}</p>
            <p>{ranking_data.year}</p>
            <p>{ranking_data.league.name}</p>
        </div>
    )
}

export default LineChart


