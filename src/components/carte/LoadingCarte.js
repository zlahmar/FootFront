import '../../styles/index.css'

function LoadingCarte(){
    return (
        <div className="rounded-3xl p-4 max-w-sm w-full mx-auto">
            <div className="animate-pulse">
                <div className="flex space-x-4 items-baseline m-6">
                    <div className="flex-1 h-24 bg-gray rounded"></div>
                    <div className="flex-1 h-36 bg-odysseus rounded"></div>
                    <div className="flex-1 h-48 bg-tiffanyBlue rounded"></div>
                    <div className="flex-1 h-64 bg-aias rounded"></div>
                    <div className="flex-1 h-72 bg-powderBlue rounded"></div>
                </div>
            </div>
            <h1 className="text-white font-content">Veuillez patienter</h1>
    
        </div>
    )
}

export default LoadingCarte