import '../../../styles/index.css'
import {Link} from "react-router-dom";
import player_card from '../../../assets/icon/player_card.png'

function JoueurCarte({ isClickDisabled = true}){
    return(
        <div className={`${isClickDisabled ? 'h-full' : ''}  py-5`}>
            <Link
                className={` ${isClickDisabled ? 'pointer-events-none h-full mb-5' : ''} bg-gunMetal `}
                >
                <div className="w-64 h-96 m-auto">
                    <img className="" src={player_card} alt="" />
                </div>
                {/* <div className="flex items-start relative">
                    <img className={`${isClickDisabled ? `w-20`: `w-14`}  rounded-2xl absolute left-1 -top-6 border-2 border-onyx`} src="#" alt="" />
                </div>

                <div className="w-full h-full p-1 sm:p-1 lg:p-3 text-center p-3 sm:p-5 lg:p-7  flex flex-col justify-center">
                    <span className=" text-lg font-bold text-white font-title"></span>
                </div> */}
            </Link>
        </div>
    )
}

export default JoueurCarte