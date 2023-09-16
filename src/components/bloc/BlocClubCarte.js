import { Children } from 'react';


function BlocClubCarte({children}){
    return (
        <div className="bg-eerieBlack flex flex-wrap rounded-3xl border-t-2 border-tiffanyBlue">
            <div className="flex flex-row flex-wrap justify-start pt-2">
            {Children.map(children, child =>
                <div className={`lg:basis-1/4 min-[320px]:basis-full text-center px-3 pt-3`}>        
                    {child}
                </div>
            )}
            </div>
        </div>
    )
}

export default BlocClubCarte