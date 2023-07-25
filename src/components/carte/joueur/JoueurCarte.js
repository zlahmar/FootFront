import '../../../styles/index.css'
import {Link} from "react-router-dom";
import player_card from '../../../assets/icon/player_card.png'

function JoueurCarte({ isClickDisabled = false}){
    return(
        <div className={`${isClickDisabled ? 'h-full' : ''}  py-5`}>
            <div className="w-64 h-96 m-auto">
                <Link
                to={{pathname : "/joueurs",
                state: { joueurId: "good" }}}
                className={` bg-gunMetal `}
                >
                    <img className={` ${isClickDisabled ? 'pointer-events-none h-full mb-5' : ''} `} src={player_card} alt="" />
                </Link>
            </div>
        </div>
        )
}

export default JoueurCarte