import '../../styles/index.css'
import {Link} from "react-router-dom";

function ClubCarte({}){
    return(
        <div className="border-t-2 border-tiffanyBlue pt-2 mb-2 rounded-3xl bg-[url('/src/assets/arriere_plan/carte.png')] bg-cover bg-center bg-no-repeat">
            <Link
            to={"test/"}
            className="block rounded-3xl border-2 border-tiffanyBlue bg-gunMetal transition shadow hover:shadow-lg hover:shadow-tiffanyBlue"
            >
                <div className="flex items-start relative md:w-0 sm:w-0">
                    <img className="w-5 rounded-2xl absolute left-1 -top-7 border-2 border-onyx" alt="" />
                </div>

                <div className="p-1 sm:p-1 lg:p-3">
                    <p className="text-lg font-bold text-white font-title">Club </p>
                </div>
            </Link>
        </div>
    )
}

export default ClubCarte