import { Children } from 'react';


function BlocCarte({children}){
    return (
        <div className="h-full bg-gunMetal pt-5 flex justify-center items-center rounded-3xl mr-3 mb-3">
            <div className="flex flex-row flex-wrap justify-center w-4/5 ">
            {Children.map(children, child =>
                <div className="basis-1/3 text-center px-3 pb-3">        
                    {child}
                </div>
            )}
            </div>
        </div>
    )
}

export default BlocCarte