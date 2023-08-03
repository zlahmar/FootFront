import '../../../styles/index.css'
import {Link} from "react-router-dom";

// IMG
import { PLAYERS, NATIONALITIES } from '../../../data/Api';

// Images
import laurier from '../../../assets/laurier.png'
import match from '../../../assets/icon/match.png'
import time from '../../../assets/icon/time.png'
import shoot from '../../../assets/icon/shoot.png'
import kickball from '../../../assets/icon/kickball.png'
import yellow_card from '../../../assets/icon/yellow_card.png'
import red_card  from '../../../assets/icon/red_card.png'

import Box from '@mui/material/Box';
import { Tooltip } from '@mui/material';
import { COLOR } from '../../../data/Constants';

function JoueurCarte(props){
    const isClickDisabled = false;
    const player = props.player;

    return(
        <div className={`${isClickDisabled ? 'h-full' : ''} flex justify-evenly`}>
            <div className="mt-1">
                    <div className={` ${isClickDisabled ? 'h-full' : ''} relative pt-4 mb-5 bg-[url('/src/assets/arriere_plan/player_card_dark.png')] w-[20rem] h-[30rem] bg-contain bg-center bg-no-repeat `}>
                        <Link
                            to={{pathname : "/joueurs",
                            state: { joueurId: "good" }}}
                            className={` bg-gunMetal `}
                        >
                            {/* (1) Laurier(img) */}
                            <div className="z-10 absolute top-1/4 left-1/4 translate-x-[3rem] -translate-y-[5rem]">
                                <img className="w-[4rem] h-[4rem]" src={laurier} alt="laurier" />
                            </div>

                            {/* (2) Drapeau(img) & Position(p) */}
                            <div className="absolute flex flex-col justify-center translate-x-[1.5rem] translate-y-[3rem]">
                                <div className="z-10 top-1/4 left-1/4">
                                    <p className='text-white text-xl font-bold translate-x-[1rem] translate-y-[3rem]'>{player.playerPosition}</p>
                                </div>
                                <div className="z-10 top-1/4 left-1/4">
                                    <img className="w-[5rem] h-[4rem] translate-x-[1rem] translate-y-[5rem]" src={`${NATIONALITIES.IMG}/${player.nationalityName}`} alt={`${player.nationalityName}`} />
                                </div>
                            </div>

                            {/* (3) Joueur(img) & Nom(p) */}
                            <div className="absolute flex flex-col justify-center">
                                <div className="absolute z-10 top-1/4 left-1/4 translate-x-[10rem] translate-y-[7rem]">
                                    <img className="w-[8rem] h-[8rem] rounded-full border-solid border-4 border-yellow bg-white -translate-x-[4.5rem]" src={`${PLAYERS.IMG}/${player.playerId}`} alt={`${player.playerName}`} />
                                </div>
                                <p className="z-10 text-white text-xl font-title font-bold translate-x-[1.4rem] translate-y-[16rem] w-[17.1rem]">{player.playerName}</p>
                            </div>

                            {/* (4) Stats */} 
                            <div className="absolute flex flex-col justify-center translate-x-[1.5rem] translate-y-[19em] mx-3 w-[16.5rem]">
                                {/* 1) all_nb_games / all_avg_minutes */}
                                <div className="flex justify-center pb-1">
                                    <div className="flex items-center w-1/2">  
                                        <Tooltip title="All Games" arrow placement="left">
                                            <Box className="flex" sx={{color: COLOR.GUNMETAL}}>
                                                <div className='mr-2 '>
                                                    <img className='w-8' src={match} alt="match"/>
                                                </div>
                                                <div className='flex items-center w-full'>
                                                    <p className='text-white font-bold font-content'>{player.allNbGames} <small>mt(s)</small></p>
                                                </div>
                                            </Box>
                                        </Tooltip>                                         
                                    </div>    
                                    <div className="flex items-center w-1/2 ml-2">
                                        <Tooltip title="Average Minutes" arrow placement="right">
                                            <Box className="flex" sx={{color: COLOR.GUNMETAL}}>
                                                <div className='mr-2'>
                                                    <img className='w-8' src={time} alt="time"/>
                                                </div>
                                                <div className='flex items-center w-full'>
                                                    <p className='text-white font-bold font-content'>{player.avgMinutes} <small>min.</small></p>
                                                </div>
                                            </Box>
                                        </Tooltip>                                        
                                    </div>
                                </div>
                                {/* 2) all_goals / all_assists */}
                                <div className="flex justify-center pb-1">
                                    <div className="flex items-center w-1/2">  
                                        <Tooltip title="All Goals" arrow placement="left">
                                            <Box className="flex" sx={{color: COLOR.GUNMETAL}}>
                                                <div className='mr-2'>
                                                    <img className='w-8' src={shoot} alt="shoot"/>
                                                </div>
                                                <div className='flex items-center w-full'>
                                                    <p className='text-white font-bold font-content'>{player.allGoals} <small>goal(s)</small></p>
                                                </div>
                                            </Box>
                                        </Tooltip>                                        
                                    </div>    
                                    <div className="flex items-center w-1/2 ml-2">
                                        <Tooltip title="All Assists" arrow placement="right">
                                            <Box className="flex" sx={{color: COLOR.GUNMETAL}}>
                                                <div className='mr-2'>
                                                    <img className='w-8' src={kickball} alt="kickball"/>
                                                </div>
                                                <div className='flex items-center w-full'>
                                                    <p className='text-white font-bold font-content'>{player.allAssists} <small>assist(s)</small></p>
                                                </div>
                                            </Box>
                                        </Tooltip>                                        
                                    </div>
                                </div>
                                {/* 3) all_yellow_cards / all_red_cards */}
                                <div className="flex justify-center">
                                    <div className="flex items-center w-1/2">  
                                        <Tooltip title="Yellow Cards" arrow placement="left">
                                            <Box className="flex" sx={{color: COLOR.GUNMETAL}}>
                                                <div className='mr-2'>
                                                    <img className='w-9' src={yellow_card} alt="yellow_card"/>
                                                </div>
                                                <div className='flex items-center w-full'>
                                                    <p className='text-white font-bold font-content'>{player.allYellowCards} <small>yellow</small></p>
                                                </div>
                                            </Box>
                                        </Tooltip>                                         
                                    </div>    
                                    <div className="flex items-center w-1/2 ml-2">
                                        <Tooltip title="Red Cards" arrow placement="right">
                                            <Box className="flex" sx={{color: COLOR.GUNMETAL}}>
                                                <div className='mr-2'>
                                                    <img className='w-10' src={red_card} alt="red_card"/>
                                                </div>
                                                <div className='flex items-center w-full'>
                                                    <p className='text-white font-bold font-content'>{player.allRedCards} <small>red</small></p>
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