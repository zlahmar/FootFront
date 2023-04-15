import '../../styles/index.css'
import {Link} from "react-router-dom";

function LigueCarte({ league, leagues_img_url }){
    return (
            <div className="border-t-2 border-tiffanyBlue pt-4 mb-5 rounded-3xl bg-[url('/src/assets/arriere_plan/carte.png')] bg-cover bg-center bg-no-repeat">
                <Link
                to={{pathname : `${league.id}`,
                     state: { leagueId: league.id }}}
                className="block rounded-3xl border-2 border-tiffanyBlue bg-gunMetal transition shadow hover:shadow-lg hover:shadow-tiffanyBlue"
                >
                    <div className="flex items-start relative">
                        <img className="w-20 rounded-2xl absolute left-3 -top-7 border-2 border-onyx" src={leagues_img_url +"/" + league.name} alt="" />
                    </div>

                    <div className="p-3 sm:p-5 lg:p-7">
                        <p className="text-lg font-bold text-white font-title">{league.name}</p>

                        <p className="mt-1 font-mono text-xs text-white font-content">{league.clubs.length} Clubs</p>
                    </div>
                </Link>
            </div>
    )
}

export default LigueCarte