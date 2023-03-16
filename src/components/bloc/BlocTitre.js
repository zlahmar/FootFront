import { Children } from 'react';

function BlocTitre({children}){
    return (
        <div className="flex pt-3 pb-3">
            <div className="flex flex-row flex-wrap w-4/5 ">
            {Children.map(children, child =>
                <p className='text-white  font-title'>    
                    {child}
                </p>
            )}
            </div>
        </div>
    )
}

export default BlocTitre