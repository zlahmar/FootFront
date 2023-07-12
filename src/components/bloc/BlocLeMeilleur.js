function BlocLeMeilleur({children}){
    let gridClass;

    if (children.length === 3) {
      gridClass = "grid lg:grid-cols-3 sm:max-md:grid-rows-3";
    } else if (children.length === 4) {
      gridClass = "grid lg:grid-cols-4 sm:max-md:grid-rows-4";
    }

    return (
    
            <div className="h-full border-t-2 border-tiffanyBlue pt-4 mb-5 rounded-3xl">
                <div className="h-full block rounded-3xl border-2 border-tiffanyBlue bg-gunMetal">
                    <div className={`h-full grid ${gridClass} lg:divide-x max-sm:max-md:divide-y sm:max-lg:divide-y divide-tiffanyBlue`}>
                        {children}
                    </div>
                </div>
            </div>
    )
}

export default BlocLeMeilleur