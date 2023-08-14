import { Children } from 'react';

function BlocContent({children}){
    return (
        <div className="w-full h-full bg-eerieBlack flex justify-center rounded-3xl pb-4 pt-3 border-b-2 border-tiffanyBlue">
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