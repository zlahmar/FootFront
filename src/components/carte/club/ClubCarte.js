import '../../../styles/index.css'
import {Link} from "react-router-dom";

function ClubCarte({ club, clubs_img_url,  isDisabled = true}){
    return(
        <div className="border-t-2 border-tiffanyBlue pt-2 mb-2 rounded-3xl bg-[url('/src/assets/arriere_plan/carte.png')] bg-cover bg-center bg-no-repeat transition shadow hover:shadow-lg hover:shadow-tiffanyBlue">
            <Link
            to={{pathname : `${club.id}`,
                state: { clubId: club.id }}}
                className={` ${isDisabled ? 'pointer-events-none h-full mb-5' : ''} block rounded-3xl border-2 border-tiffanyBlue bg-gunMetal `}
                >
                <div className="flex items-start relative">
                    <img className={`${isDisabled ? `w-20`: `w-10`} rounded-2xl absolute left-1 -top-7 border-2 border-onyx`} src={clubs_img_url +"/" + club.name} alt="" />
                </div>

                <div className="w-full p-1 sm:p-1 lg:p-3 text-center p-3 sm:p-5 lg:p-7">
                    <span className="text-lg font-bold text-white font-title">{club.name}</span>
                </div>
            </Link>
        </div>
    )
}

export default ClubCarte