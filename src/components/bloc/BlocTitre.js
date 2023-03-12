import { Children } from 'react';

function BlocTitre({children}){
    return (
        <div className="bg-eerieBlack flex justify-center pt-6 pb-5">
            <div className="flex flex-row flex-wrap w-4/5 ">
            {Children.map(children, child =>
                <p className='text-white text-2xl font-title'>    
                    {child}
                </p>
            )}
            </div>
        </div>
    )
}

export default BlocTitre