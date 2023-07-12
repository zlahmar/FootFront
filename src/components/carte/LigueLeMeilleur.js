import '../../styles/index.css'

function LigueLeMeilleur({id,title, img_url, data_name, data_value1, data_value2}){
    return (
        <div className="flex flex-col text-white">
        <div className="text-center">
            <span className="text-lg font-bold font-title">{title}</span>
            <hr className="w-1/2 m-auto border-tiffanyBlue"/>
        </div>
        <div className="flex md:max-xl:flex-col sm:max-md:flex-col max-sm:flex-col justify-evenly lg:mx-2 lg:mt-5 md:max-xl:mt-1 sm:max-md:mt-0 max-sm:mt-0">
            <div className='basis-2/6 text-center'>
                <img className="m-auto w-12 max-sm:max-md:w-20 sm:max-lg:w-20 sm:max-md:w-0 max-sm:w-0 rounded-2xl border-2 border-onyx" src={img_url} alt={data_name + id} />
            </div>
            <div className='basis-4/6 text-center flex flex-col'>
                <span className="text-lg font-bold font-content text-tiffanyBlue">{data_name}</span>
                <span className="font-content text-white">{data_value1}</span>   
                <span className="text-xs font-content text-white">({data_value2})</span>   
            </div>
        </div>
        </div>
    )
}

export default LigueLeMeilleur