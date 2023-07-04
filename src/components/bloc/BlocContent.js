import { Children } from 'react';

function BlocContent({children}){
    return (
        <div className="w-full bg-gunMetal flex justify-center rounded-3xl">
            <div className="flex flex-row flex-wrap justify-center w-full ">
            {Children.map(children, child =>
                <div className="text-center px-3">        
                    {child}
                </div>
            )}
            </div>
        </div>
    )
}

export default BlocContent