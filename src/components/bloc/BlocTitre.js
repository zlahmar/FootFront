
function BlocTitre({title}){
    return (
        <div className="flex py-3 pl-3">
            <div className="flex flex-row flex-wrap w-4/5 ">
                <span className="font-title text-white text-2xl">
                    {title}
                </span>
            </div>
        </div>
    )
}

export default BlocTitre