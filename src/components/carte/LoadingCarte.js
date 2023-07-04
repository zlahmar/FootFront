import '../../styles/index.css'

function LoadingCarte(){
    return (
        <div className="rounded-3xl max-w-sm w-full mx-auto my-auto">
            <div className="animate-pulse">
                <div className="flex space-x-4 items-baseline m-6">
                    <div className="flex-1 h-24 bg-onyx rounded"></div>
                    <div className="flex-1 h-36 bg-odysseus rounded"></div>
                    <div className="flex-1 h-48 bg-tiffanyBlue rounded"></div>
                    <div className="flex-1 h-64 bg-aias rounded"></div>
                    <div className="flex-1 h-72 bg-powderBlue rounded"></div>
                </div>
            </div>
            <p className="text-white font-content text-center text-2xl">Veuillez patienter</p>
    
        </div>
    )
}

export default LoadingCarte