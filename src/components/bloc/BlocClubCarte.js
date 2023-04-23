import { Children } from 'react';


function BlocClubCarte({children}){
    return (
        <div className="bg-gunMetal flex flex-wrap  rounded-3xl">
            <div className="flex flex-row flex-wrap  w-5/5">
            {Children.map(children, child =>
                <div className={`lg:basis-1/6 min-[320px]:basis-full text-center px-3 pt-3`}>        
                    {child}
                </div>
            )}
            </div>
        </div>
    )
}

export default BlocClubCarte