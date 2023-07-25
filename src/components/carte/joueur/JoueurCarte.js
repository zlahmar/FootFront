import '../../../styles/index.css'
import {Link} from "react-router-dom";
import messi from '../../../assets/messi.png'


function JoueurCarte({ isClickDisabled = false}){
    return(
        <div className={`${isClickDisabled ? 'h-full' : ''} flex justify-evenly`}>
            <div className="mt-5">
                    <div className={` ${isClickDisabled ? 'h-full' : ''}  pt-4 mb-1 bg-[url('/src/assets/arriere_plan/player_card.png')] w-[15rem] h-[20rem] bg-contain bg-center bg-no-repeat`}>
                        <Link
                            to={{pathname : "/joueurs",
                            state: { joueurId: "good" }}}
                            className={` bg-gunMetal `}
                        >
                            <div className="z-10 absolute top-1/4 left-1/4 translate-x-[1rem]">
                                {/* <img className="w-[7.5rem] h-[7.5rem] rounded-full" src={messi} alt="" /> */}
                            </div>
                            <p className="z-10 text-gunMetal text-lg font-bold translate-y-[10rem]">Lionel Messi</p>
                        </Link>
                    </div>    
            </div>
        </div>
        )
}

export default JoueurCarte