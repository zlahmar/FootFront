import '../../../styles/index.css'
import {Link} from "react-router-dom";

function ClubCarte({ club, clubs_img,  isClickDisabled = true}){
    return(
        <div className={`${isClickDisabled ? 'h-full' : ''} border-t-2 border-tiffanyBlue pt-2 mb-2 rounded-3xl bg-[url('/src/assets/arriere_plan/carte.png')] bg-cover bg-center bg-no-repeat transition shadow hover:shadow-lg hover:shadow-tiffanyBlue`}>
            <Link
            to={{pathname : `${club.id}`,
                state: { clubId: club.id }}}
                className={` ${isClickDisabled ? 'pointer-events-none h-full mb-5' : ''} block rounded-3xl border-2 border-tiffanyBlue bg-eerieBlack `}
                >
                <div className="flex items-start relative">
                    <img className={`${isClickDisabled ? `w-20`: `w-14`}  rounded-2xl absolute left-1 -top-6 border-2 border-onyx`} src={clubs_img +"/" + club.name} alt="" />
                </div>

                <div className="w-full h-full p-1 sm:p-1 lg:p-3 text-center p-3 sm:p-5 lg:p-7  flex flex-col justify-center">
                    <span className=" text-lg text-white font-content">{club.name}</span>
                    {isClickDisabled &&<p className="mt-1 text-xs text-white font-content">{club.league.name}</p>}
                </div>
            </Link>
        </div>
    )
}

export default ClubCarte