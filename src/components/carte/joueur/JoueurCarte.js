import '../../../styles/index.css'
import {Link} from "react-router-dom";

// Images
import messi from '../../../assets/messi.png'
import laurier_blue from '../../../assets/laurier_blue.png'
import argentina from '../../../assets/argentina.png'
import match from '../../../assets/icon/match.png'
import time from '../../../assets/icon/time.png'
import shoot from '../../../assets/icon/shoot.png'
import kickball from '../../../assets/icon/kickball.png'
import yellow_card from '../../../assets/icon/yellow_card.png'
import red_card from '../../../assets/icon/red_card.png'

import Box from '@mui/material/Box';
import { Tooltip } from '@mui/material';
import { COLOR } from '../../../data/Constants';

function JoueurCarte({ isClickDisabled = false}){
    return(
        <div className={`${isClickDisabled ? 'h-full' : ''} flex justify-evenly`}>
            <div className="mt-1">
                    <div className={` ${isClickDisabled ? 'h-full' : ''}  pt-4 mb-5 bg-[url('/src/assets/arriere_plan/player_card_dark.png')] w-[24rem] h-[30rem] bg-contain bg-center bg-no-repeat `}>
                        <Link
                            to={{pathname : "/joueurs",
                            state: { joueurId: "good" }}}
                            className={` bg-gunMetal `}
                        >
                            {/* (1) Laurier(img) */}
                            <div className="z-10 top-1/4 left-1/4 translate-x-[10rem] translate-y-[1rem]">
                                <img className="w-[4rem] h-[4rem]" src={laurier_blue} alt="" />
                            </div>

                            {/* (2) Drapeau(img) & Position(p) */}
                            <div className="flex flex-col justify-center translate-x-[1.5rem] translate-y-[3rem]">
                                <div className="z-10 top-1/4 left-1/4">
                                    <p className='text-white text-xl font-bold -translate-x-[6.5rem] -translate-y-[0.5rem]'>ST</p>
                                </div>
                                <div className="z-10 top-1/4 left-1/4">
                                    <img className="w-[5rem] h-[4rem] translate-x-[3rem] translate-y-[0.5rem]" src={argentina} alt="argentina" />
                                </div>
                            </div>

                            {/* (3) Joueur(img) & Nom(p) */}
                            <div className="flex flex-col justify-center">
                                <div className="z-10 top-1/4 left-1/4 translate-x-[11rem] -translate-y-[4.5rem]">
                                    <img className="w-[9rem] h-[9rem] rounded-full border-solid border-4 border-tiffanyBlue" src={messi} alt="" />
                                </div>
                                <p className="z-10 text-white text-2xl font-title font-bold -translate-y-[3.5rem]">Lionel Messi</p>
                            </div>

                            {/* (4) Stats */}
                            <div className="flex flex-col justify-center -translate-y-[2.5rem] translate-x-[2.2rem] mx-3">
                                {/* 1) all_nb_games / all_avg_minutes */}
                                <div className="flex justify-normal px-3 pb-1">
                                    <div className="flex items-center">  
                                        <Tooltip title="All Games" arrow placement="left">
                                            <Box className="flex" sx={{color: COLOR.GUNMETAL}}>
                                                <div className='mr-2 '>
                                                    <img className='w-8' src={match} alt="match"/>
                                                </div>
                                                <div className='flex items-center'>
                                                    <p className='text-white font-bold font-content'>125 <small>match(s)</small></p>
                                                </div>
                                            </Box>
                                        </Tooltip>                                         
                                    </div>    
                                    <div className="flex items-center ml-4">
                                        <Tooltip title="Average Minutes" arrow placement="right">
                                            <Box className="flex" sx={{color: COLOR.GUNMETAL}}>
                                                <div className='mr-2'>
                                                    <img className='w-8' src={time} alt="time"/>
                                                </div>
                                                <div className='flex items-center'>
                                                    <p className='text-white font-bold font-content'>90.3 <small>min.</small></p>
                                                </div>
                                            </Box>
                                        </Tooltip>                                        
                                    </div>
                                </div>
                                {/* 2) all_goals / all_assists */}
                                <div className="flex justify-normal px-3 pb-1">
                                    <div className="flex items-center">  
                                        <Tooltip title="All Goals" arrow placement="left">
                                            <Box className="flex" sx={{color: COLOR.GUNMETAL}}>
                                                <div className='mr-2'>
                                                    <img className='w-8' src={shoot} alt="shoot"/>
                                                </div>
                                                <div className='flex items-center'>
                                                    <p className='text-white font-bold font-content'>455 <small>goal(s)</small></p>
                                                </div>
                                            </Box>
                                        </Tooltip>                                        
                                    </div>    
                                    <div className="flex items-center ml-[1.7rem]">
                                        <Tooltip title="All Assists" arrow placement="right">
                                            <Box className="flex" sx={{color: COLOR.GUNMETAL}}>
                                                <div className='mr-2'>
                                                    <img className='w-8' src={kickball} alt="keecball"/>
                                                </div>
                                                <div className='flex items-center'>
                                                    <p className='text-white font-bold font-content'>145 <small>assist(s)</small></p>
                                                </div>
                                            </Box>
                                        </Tooltip>                                        
                                    </div>
                                </div>
                                {/* 3) all_yellow_cards / all_red_cards */}
                                <div className="flex justify-normal px-3">
                                    <div className="flex items-center">  
                                        <Tooltip title="All Games" arrow placement="left">
                                            <Box className="flex" sx={{color: COLOR.GUNMETAL}}>
                                                <div className='mr-2'>
                                                    <img className='w-8' src={yellow_card} alt="yellow_card"/>
                                                </div>
                                                <div className='flex items-center'>
                                                    <p className='text-white font-bold font-content'>125 <small>yellow</small></p>
                                                </div>
                                            </Box>
                                        </Tooltip>                                         
                                    </div>    
                                    <div className="flex items-center ml-[2rem]">
                                        <Tooltip title="Average Minutes" arrow placement="right">
                                            <Box className="flex" sx={{color: COLOR.GUNMETAL}}>
                                                <div className='mr-2'>
                                                    <img className='w-8' src={red_card} alt="red_card"/>
                                                </div>
                                                <div className='flex items-center'>
                                                    <p className='text-white font-bold font-content'>5 <small>red</small></p>
                                                </div>
                                            </Box>
                                        </Tooltip>                                        
                                    </div>
                                </div>                           
                            </div>

                        </Link>
                    </div>    
            </div>
        </div>
        )
}

export default JoueurCarte