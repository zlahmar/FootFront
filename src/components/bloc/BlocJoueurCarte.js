import { Children } from 'react';


function BlocJoueurCarte({children}){
    return (
        <div className="bg-gunMetal flex flex-wrap rounded-3xl">
            <div className="flex flex-row flex-wrap w-5/5 pb-5">
            {Children.map(children, child =>
                <div className={`lg:basis-1/4 md:basis-1/2 min-[320px]:basis-full text-center py-3 font-title`}>        
                    {child}
                </div>
            )}
            </div>
        </div>
    )
}

export default BlocJoueurCarte