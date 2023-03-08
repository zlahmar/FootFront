import '../styles/index.css'


function Carte({ league, leagues_img_url }){
    return (
        <div className="basis-1/3 text-center px-3 pb-5">        
                        <div className="border-t-2 border-tiffanyBlue pt-3 rounded-3xl bg-[url('/src/assets/card_background.png')] bg-cover bg-center bg-no-repeat">
                            <a
                            href={league.id}
                            className="block rounded-3xl border-2 border-tiffanyBlue bg-gunMetal transition shadow hover:shadow-lg hover:shadow-tiffanyBlue"
                            >
                                <div className="flex items-start relative">
                                    <img className="w-20 rounded-2xl absolute left-1 -top-7 border-2 border-onyx" src={leagues_img_url +"/" + league.name} alt="" />
                                </div>

                                <div className="p-4 sm:p-6 lg:p-8">
                                    <p className="text-lg font-bold text-white font-title">{league.name}</p>

                                    <p className="mt-1 font-mono text-xs text-white font-content">{league.clubs.length} Clubs</p>
                                </div>
                            </a>
                        </div>
                    </div>
    )
}

export default Carte