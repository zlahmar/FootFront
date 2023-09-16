import { Children } from 'react';


function BlocLigueCarte({children}){
    return (
        <div className="bg-eerieBlack flex flex-wrap justify-center items-center rounded-3xl border-t-2 border-tiffanyBlue my-3">
            <div className="flex flex-row flex-wrap justify-start w-full pb-3">
            {Children.map(children, child =>
                <div className={`lg:basis-1/3 md:basis-full sm:basis-full min-[150px]:basis-full text-center px-3 pt-3`}>        
                    {child}
                </div>
            )}
            </div>
        </div>
    )
}

export default BlocLigueCarte