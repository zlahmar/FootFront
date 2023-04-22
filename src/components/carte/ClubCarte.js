import '../../styles/index.css'
import {Link} from "react-router-dom";

function ClubCarte({ id, name, clubs_img_url}){
    return(
        <div className="border-t-2 border-tiffanyBlue pt-2 mb-2 rounded-3xl bg-[url('/src/assets/arriere_plan/carte.png')] bg-cover bg-center bg-no-repeat">
            <Link
            to={{pathname : `${id}`,
                state: { clubId: id }}}
            className="block rounded-3xl border-2 border-tiffanyBlue bg-gunMetal transition shadow hover:shadow-lg hover:shadow-tiffanyBlue"
            >
                <div className="flex items-start relative md:w-10 sm:w-10">
                    <img className="w-10 rounded-2xl absolute left-1 -top-7 border-2 border-onyx" src={clubs_img_url +"/" + name} alt="" />
                </div>

                <div className="w-full p-1 sm:p-1 lg:p-3">
                    <p className="text-lg font-bold text-white font-title">{name}</p>
                </div>
            </Link>
        </div>
    )
}

export default ClubCarte