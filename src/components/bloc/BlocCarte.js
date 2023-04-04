import { Children } from 'react';


function BlocCarte({children}){
    return (
        <div className="bg-gunMetal flex justify-center items-center rounded-3xl h-full">
            <div className="flex flex-row flex-wrap justify-center w-4/5 ">
            {Children.map(children, child =>
                <div className="lg:basis-1/3 md:basis-full sm:basis-full min-[320px]:basis-full text-center px-3 pb-3">        
                    {child}
                </div>
            )}
            </div>
        </div>
    )
}

export default BlocCarte