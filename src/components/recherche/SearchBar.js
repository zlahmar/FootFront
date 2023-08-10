function SearchBar({handleInputChange}){
    return (
    <div>
        <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-5 left-1 flex items-center pl-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16"> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/> </svg>
            </span>
            <input onChange={handleInputChange}  className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-4 mt-3 pl-9 pr-3 shadow-sm focus:outline-none focus:border-tiffanyBlue focus:ring-tiffanyBlue focus:ring-1 sm:text-sm" placeholder="Tapez un nom de joueur" type="text" name="search"/>
        </label>
    </div>
    )
}

export default SearchBar