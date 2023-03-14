import '../../styles/index.css'

function LineChart({data}){
    return(
        <div className='text-white'>
            <p>{data.id}</p>
            <p>{data.year}</p>
            <p>{data.league.name}</p>
        </div>
    )
}

export default LineChart


