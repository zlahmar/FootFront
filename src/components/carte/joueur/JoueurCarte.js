import '../../../styles/index.css'
import {Link} from "react-router-dom";

// Images
import messi from '../../../assets/messi.png'
import laurier from '../../../assets/laurier.png'
import argentina from '../../../assets/argentina.png'
import match from '../../../assets/icon/match.png'
import time from '../../../assets/icon/time.png'

function JoueurCarte({ isClickDisabled = false}){
    return(
        <div className={`${isClickDisabled ? 'h-full' : ''} flex justify-evenly`}>
            <div className="mt-5">
                    <div className={` ${isClickDisabled ? 'h-full' : ''}  pt-4 mb-1 bg-[url('/src/assets/arriere_plan/player_card.png')] w-[15rem] h-[30rem] bg-contain bg-center bg-no-repeat`}>
                        <Link
                            to={{pathname : "/joueurs",
                            state: { joueurId: "good" }}}
                            className={` bg-gunMetal `}
                        >
                            {/* (1) Laurier(img) */}
                            <div className="z-10 top-1/4 left-1/4 translate-x-[6rem] translate-y-[3rem]">
                                <img className="w-[3rem] h-[3rem]" src={laurier} alt="" />
                            </div>

                            {/* (2) Drapeau(img) & Position(p) */}
                            <div className="flex flex-col justify-center translate-x-[1.5rem] translate-y-[3rem]">
                                <div className="z-10 top-1/4 left-1/4">
                                    <img className="w-[2.5rem] h-[2.5rem] translate-x-[0.4rem]" src={argentina} alt="argentina" />
                                </div>
                                <div className="z-10 top-1/4 left-1/4">
                                    <p className='text_gunMetal text-lg font-bold -translate-x-[5.8rem] translate-y-[0.5rem]'>ST</p>
                                </div>
                            </div>

                            {/* (3) Joueur(img) & Nom(p) */}
                            <div className="flex flex-col justify-center">
                                <div className="z-10 top-1/4 left-1/4 translate-x-[5.4rem] translate-y-[3rem]">
                                    <img className="w-[4.5rem] h-[4.5rem] rounded-full border-solid border-2 border-onyx" src={messi} alt="" />
                                </div>
                                <p className="z-10 text-gunMetal text-2xl font-bold translate-y-[3.5rem]">Lionel Messi</p>
                            </div>

                            {/* (4) Stats */}
                            <div className="flex flex-col justify-center border-solid border-2 border-onyx translate-y-[4rem] px-2">
                                {/* 1) all_nb_games / all_avg_minutes */}
                                <div className="flex justify-between">
                                    <div className="flex items-center">
                                        <img className='w-7 h-7 pr-1' src={match} title="match description"/>
                                        <p title="match description">255 matchs</p>    
                                    </div>    
                                    <div className="flex items-center">
                                        <img className='w-7 h-7 pr-1' src={time}/>
                                        <p>80.3' (/90')</p>
                                        
                                    </div>
                                </div>
                                {/* 2) all_goals / all_assists */}
                                <div className="flex justify-between">
                                    <div>3</div>    
                                    <div>4</div>
                                </div>
                                {/* 3) all_yellow_cards / all_red_cards */}
                                <div className="flex justify-between">
                                    <div>5</div>    
                                    <div>6</div>
                                </div>                            
                            </div>

                        </Link>
                    </div>    
            </div>
        </div>
        )
}

export default JoueurCarte