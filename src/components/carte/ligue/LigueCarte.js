import '../../../styles/index.css'
import {Link} from "react-router-dom";

function LigueCarte({ league, leagues_img, isClickDisabled = false }){
    return (
            <div className={` ${isClickDisabled ? 'h-full' : ''} border-t-2 border-tiffanyBlue pt-4 rounded-3xl bg-[url('/src/assets/arriere_plan/carte.png')] bg-cover bg-center bg-no-repeat transition shadow hover:shadow-lg hover:shadow-tiffanyBlue`}>
                <Link
                to={{pathname : `${league.id}/clubs`,
                    state: { leagueId: league.id }}}
                    className={` ${isClickDisabled ? 'pointer-events-none h-full mb-5' : ''} block rounded-3xl border-2 border-tiffanyBlue bg-gunMetal `}
                >
                    <div className="flex items-start relative">
                        <img className="w-20 rounded-2xl absolute left-3 -top-7 border-2 border-onyx" src={leagues_img +"/" + league.name} alt="" />
                    </div>

                    <div className={`${isClickDisabled ? 'h-full flex flex-col justify-center' : ''} text-center p-3 sm:p-5 lg:p-7`}>
                        <p className="text-2xl text-white font-title">{league.name}</p>

                        <p className="mt-1 text-xs text-white font-content">{league.clubs.length} Clubs</p>
                    </div>
                </Link>
            </div>
    )
}

export default LigueCarte