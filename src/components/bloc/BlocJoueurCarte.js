import { Children } from 'react';


function BlocJoueurCarte({title,children}){
    return (
        <div className="bg-eerieBlack rounded-b-3xl mb-3 w-full ">
            <div className='w-full flex justify-center p-5'>
                <span className="text-white font-content text-2xl" dangerouslySetInnerHTML={{ __html: title }}/> 
            </div>
            <div className="flex flex-row flex-wrap justify-center w-5/5 pt-4">
            {Children.map(children, child =>
                <div className={`lg:basis-1/4 md:basis-1/3 sm:basis-1/2 min-[320px]:basis-full text-center py-3 font-title`}>        
                    {child}
                </div>
            )}
            </div>
        </div>
    )
}

export default BlocJoueurCarte