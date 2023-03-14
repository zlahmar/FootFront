import { Children } from 'react';

function BlocContent({children}){
    return (
        <div className="w-full bg-gunMetal pt-5 flex justify-center rounded-3xl mr-3">
            <div className="flex flex-row flex-wrap justify-center w-4/5 ">
            {Children.map(children, child =>
                <div className="text-center px-3 pb-3">        
                    {child}
                </div>
            )}
            </div>
        </div>
    )
}

export default BlocContent