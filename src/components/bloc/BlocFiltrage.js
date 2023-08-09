import { Children } from 'react';

function BlocFiltrage({children}){
    return (
        <div className="flex flex-wrap xl:flex-row max-[767px]:flex-col justify-evenly items-center bg-eerieBlack rounded-t-3xl">           
            {Children.map(children, child =>
                <div className="px-3">
                    {child}
                </div>
            )}
        </div>
    )
}

export default BlocFiltrage