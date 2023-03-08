

function BlocPrincipal({Children}){
    return (
        <div className="bg-gunMetal flex h-screen lg:w-10/12 md:w-11/12 sm:w-11/12 items-center justify-center">
            <div className="flex flex-row flex-wrap justify-center w-4/5 ">
                {Children}
            </div>
        </div>
    )
}

export default BlocPrincipal