
function BlocTitre({text}){
    return (
        <div className="flex pt-3 pb-3 pl-3">
            <div className="flex flex-row flex-wrap w-4/5 ">
                <span className="font-title text-white text-2xl">
                    {text}
                </span>
            </div>
        </div>
    )
}

export default BlocTitre