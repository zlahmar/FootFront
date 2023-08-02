import '../../../styles/index.css'
import {Link} from "react-router-dom";

// IMG
import { PLAYERS, NATIONALITIES } from '../../../data/Api';

// Images
import laurier from '../../../assets/laurier.png'
import match from '../../../assets/icon/match.png'
import goalkeeper from '../../../assets/icon/goalkeeper.png'
import save from '../../../assets/icon/save.png'
import stadium from '../../../assets/icon/stadium.png'

import Box from '@mui/material/Box';
import { Tooltip } from '@mui/material';
import { COLOR } from '../../../data/Constants';

function JoueurGardienCarte(props){
    const gk_player = props.gk_player;
    const isClickDisabled = false;

    return(
        <div className={`${isClickDisabled ? 'h-full' : ''} flex justify-evenly`}>
            <div className="mt-1">
                    <div className={` ${isClickDisabled ? 'h-full' : ''} relative  pt-4 mb-5 bg-[url('/src/assets/arriere_plan/player_card_dark.png')] w-[20rem] h-[30rem] bg-contain bg-center bg-no-repeat `}>
                        <Link
                            to={{pathname : "/joueurs",
                            state: { joueurId: "good" }}}
                            className={` bg-gunMetal `}
                        >
                            {/* (1) Laurier(img) */}
                            <div className="absolute z-10 top-5  translate-x-[8rem] translate-y-[1.5rem]">
                                <img className="w-[4rem] h-[4rem]" src={laurier} alt="" />
                            </div>

                            {/* (2) Drapeau(img) & Position(p) */}
                            <div className="absolute flex flex-col justify-center translate-x-[1.5rem] translate-y-[10rem]">
                                <div className="z-10 top-1/4 left-1/4">
                                    <p className='text-white text-xl font-bold -translate-x-[6.5rem] -translate-y-[0.5rem]'>GK</p>
                                </div>
                                <div className="z-10 top-1/4 left-1/4">
                                    <img className="w-[5rem] h-[4rem] translate-x-[1rem] translate-y-[0.5rem]" src={`${NATIONALITIES.IMG}/${gk_player.nationalityName}`} alt={`${gk_player.nationalityName}`} />
                                </div>
                            </div>

                            {/* (3) Joueur(img) & Nom(p) */}
                            <div className="absolute flex flex-col justify-center">
                                <div className="z-10 top-1/4 left-1/4 translate-x-[10rem] -translate-y-[3rem]">
                                    <img className="w-[8rem] h-[8rem] rounded-full border-solid border-4 border-yellow bg-white" src={`${PLAYERS.IMG}/${gk_player.playerId}`} alt={`${gk_player.playerName}`}  />
                                </div>
                                <p className="z-10 text-white text-2xl font-title font-bold -translate-y-[1.5rem]">{gk_player.playerName}</p>
                            </div>

                            {/* (4) Stats */} 
                            <div className="absolute flex flex-col justify-center translate-x-[1rem] -translate-y-[0.7rem] mx-3 w-[16.5rem]">
                                {/* 1) all_nb_games / all_avg_minutes */}
                                <div className="flex justify-evenly pb-1">
                                    <div className="flex items-center w-1/2">  
                                        <Tooltip title="All Games" arrow placement="left">
                                            <Box className="flex" sx={{color: COLOR.GUNMETAL}}>
                                                <div className='mr-2 '>
                                                    <img className='w-8' src={match} alt="match"/>
                                                </div>
                                                <div className='flex items-center w-full'>
                                                    <p className='text-white font-bold font-content'>{gk_player.allNbGames} <small>mt(s)</small></p>
                                                </div>
                                            </Box>
                                        </Tooltip>                                         
                                    </div>    
                                    <div className="flex items-center w-1/2 ml-2">
                                        <Tooltip title="All Goals Against" arrow placement="right">
                                            <Box className="flex" sx={{color: COLOR.GUNMETAL}}>
                                                <div className='mr-2'>
                                                    <img className='w-8' src={goalkeeper} alt="goalkeeper"/>
                                                </div>
                                                <div className='flex items-center w-full'>
                                                    <p className='text-white font-bold font-content'>{gk_player.allGas} <small>ga(s)</small></p>
                                                </div>
                                            </Box>
                                        </Tooltip>                                            
                                    </div>
                                </div>
                                {/* 2) all_saves / all_cs */}
                                <div className="flex justify-center pb-1">
                                    <div className="flex items-center w-1/2">  
                                        <Tooltip title="All Saves" arrow placement="left">
                                            <Box className="flex" sx={{color: COLOR.GUNMETAL}}>
                                                <div className='mr-2'>
                                                    <img className='w-8' src={save} alt="save"/>
                                                </div>
                                                <div className='flex items-center w-full'>
                                                    <p className='text-white font-bold font-content'>{gk_player.allSaves} <small>save(s)</small></p>
                                                </div>
                                            </Box>
                                        </Tooltip>                                          
                                    </div>    
                                    <div className="flex items-center w-1/2 ml-2">
                                        <Tooltip title="All Clean Sheets" arrow placement="right">
                                            <Box className="flex" sx={{color: COLOR.GUNMETAL}}>
                                                <div className='mr-2'>
                                                    <img className='w-8' src={goalkeeper} alt="goalkeeper"/>
                                                </div>
                                                <div className='flex items-center w-full'>
                                                    <p className='text-white font-bold font-content'>{gk_player.allCs} <small>cs(s)</small></p>
                                                </div>
                                            </Box>
                                        </Tooltip>                                        
                                    </div>
                                </div>
                                {/* 3) all_yellow_cards / all_red_cards */}
                                <div className="flex justify-center">
                                    <div className="flex items-center w-1/2">  
                                        <Tooltip title="All Games" arrow placement="left">
                                            <Box className="flex" sx={{color: COLOR.GUNMETAL}}>
                                                <div className='mr-2'>
                                                    <img className='w-8' src={stadium} alt="win"/>
                                                </div>
                                                <div className='flex items-center w-full'>
                                                    <p className='text-white font-bold font-content'>{gk_player.allWins} <small>win(s)</small></p>
                                                </div>
                                            </Box>
                                        </Tooltip>                                         
                                    </div>    
                                    <div className="flex items-center w-1/2 ml-2">
                                        <Tooltip title="Average Minutes" arrow placement="right">
                                            <Box className="flex" sx={{color: COLOR.GUNMETAL}}>
                                                <div className='mr-2'>
                                                    <img className='w-8' src={stadium} alt="lose"/>
                                                </div>
                                                <div className='flex items-center w-full'>
                                                    <p className='text-white font-bold font-content'>{gk_player.allLoses} <small>lose(s)</small></p>
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

export default JoueurGardienCarte