import '../../../styles/index.css'
import {Link} from "react-router-dom";

// API
import { PLAYERS, NATIONALITIES } from '../../../data/Api';

// Images
import laurier from '../../../assets/laurier.png'
import match from '../../../assets/icon/match.png'
import time from '../../../assets/icon/time.png'
import shoot from '../../../assets/icon/shoot.png'
import kickball from '../../../assets/icon/kickball.png'
import yellow_card_img from '../../../assets/icon/yellow_card.png'
import red_card_img  from '../../../assets/icon/red_card.png'

// MUI
import Box from '@mui/material/Box';
import { Tooltip } from '@mui/material';

// Constants
import { COLOR, DESCRIPTION } from '../../../data/Constants';

export function JoueurCarte({player, nb_game, minute, goal, assist, yellow_card, red_card}){
    const isClickDisabled = false;
    return(
        <div className={`${isClickDisabled ? 'h-full' : ''} flex justify-evenly`}>
            <div className="mt-1">
                    <div className={` ${isClickDisabled ? 'h-full' : ''} relative pt-4 mb-5 bg-[url('/src/assets/arriere_plan/player_card_dark.png')] w-[20rem] h-[30rem] bg-contain bg-center bg-no-repeat `}>
                        <Link
                            to={{pathname : `/joueurs/${player.id}`,
                            state: { playerId: player.id }}}
                            className={` bg-eerieBlack `}
                        >
                            {/* (1) Laurier(img) */}
                            <div className="z-10 absolute top-1/4 left-1/4 translate-x-[3rem] -translate-y-[5rem]">
                                <img className="w-[4rem] h-[4rem]" src={laurier} alt="laurier" />
                            </div>

                            {/* (2) Drapeau(img) & Position(p) */}
                            <div className="absolute flex flex-col justify-center translate-x-[1.5rem] translate-y-[3rem]">
                                <div className="z-10 top-1/4 left-1/4">
                                    <p className='text-white text-xl font-bold translate-x-[1rem] translate-y-[3rem]'>{player.position}</p>
                                </div>
                                <div className="z-10 top-1/4 left-1/4">
                                    <img className="w-[5rem] h-[4rem] translate-x-[1rem] translate-y-[5rem]" src={`${NATIONALITIES.IMG}/${player.nationality.name_original}`} alt={`${player.nationality.name_original}`} />
                                </div>
                            </div>

                            {/* (3) Joueur(img) & Nom(p) */}
                            <div className="absolute flex flex-col justify-center">
                                <div className="absolute z-10 top-1/4 left-1/4 translate-y-[7rem]">
                                    <img className="w-[8rem] h-[8rem] rounded-full border-solid border-4 border-yellow bg-white translate-x-[5.5rem]" src={`${PLAYERS.IMG}/${player.id}`} alt={`${player.name}`} />
                                </div>
                                <p className="z-10 text-white text-lg font-title font-bold translate-x-[1.4rem] translate-y-[16rem] w-[17.1rem]">{player.name}</p>
                            </div>

                            {/* (4) Stats */} 
                            <div className="absolute flex flex-col justify-center translate-x-[1.5rem] translate-y-[19em] mx-3 w-[16.5rem]">
                                {/* 1) all_nb_games / all_avg_minutes */}
                                <div className="flex justify-center pb-1">
                                    <div className="flex items-center w-1/2">  
                                        <Tooltip title={DESCRIPTION.ALL_GAMES} arrow placement="left">
                                            <Box className="flex" sx={{color: COLOR.GUNMETAL}}>
                                                <div className='mr-2 '>
                                                    <img className='w-8' src={match} alt="match"/>
                                                </div>
                                                <div className='flex items-center w-full'>
                                                    <p className='text-white font-bold font-content'>{nb_game} <small>mt(s)</small></p>
                                                </div>
                                            </Box>
                                        </Tooltip>                                         
                                    </div>    
                                    <div className="flex items-center w-1/2 ml-2">
                                        <Tooltip title={DESCRIPTION.AVG_MINUTES} arrow placement="right">
                                            <Box className="flex" sx={{color: COLOR.GUNMETAL}}>
                                                <div className='mr-2'>
                                                    <img className='w-8' src={time} alt="time"/>
                                                </div>
                                                <div className='flex items-center w-full'>
                                                    <p className='text-white font-bold font-content'>{(minute/nb_game).toFixed(2)} <small>min.</small></p>
                                                </div>
                                            </Box>
                                        </Tooltip>                                        
                                    </div>
                                </div>
                                {/* 2) all_goals / all_assists */}
                                <div className="flex justify-center pb-1">
                                    <div className="flex items-center w-1/2">  
                                        <Tooltip title={DESCRIPTION.ALL_GOALS} arrow placement="left">
                                            <Box className="flex" sx={{color: COLOR.GUNMETAL}}>
                                                <div className='mr-2'>
                                                    <img className='w-8' src={shoot} alt="shoot"/>
                                                </div>
                                                <div className='flex items-center w-full'>
                                                    <p className='text-white font-bold font-content'>{goal} <small>goal(s)</small></p>
                                                </div>
                                            </Box>
                                        </Tooltip>                                        
                                    </div>    
                                    <div className="flex items-center w-1/2 ml-2">
                                        <Tooltip title={DESCRIPTION.ALL_ASSISTS} arrow placement="right">
                                            <Box className="flex" sx={{color: COLOR.GUNMETAL}}>
                                                <div className='mr-2'>
                                                    <img className='w-8' src={kickball} alt="kickball"/>
                                                </div>
                                                <div className='flex items-center w-full'>
                                                    <p className='text-white font-bold font-content'>{assist} <small>assist(s)</small></p>
                                                </div>
                                            </Box>
                                        </Tooltip>                                        
                                    </div>
                                </div>
                                {/* 3) all_yellow_cards / all_red_cards */}
                                <div className="flex justify-center">
                                    <div className="flex items-center w-1/2">  
                                        <Tooltip title={DESCRIPTION.YELLOW_CARDS} arrow placement="left">
                                            <Box className="flex" sx={{color: COLOR.GUNMETAL}}>
                                                <div className='mr-2'>
                                                    <img className='w-9' src={yellow_card_img} alt="yellow_card"/>
                                                </div>
                                                <div className='flex items-center w-full'>
                                                    <p className='text-white font-bold font-content'>{yellow_card} <small>yellow</small></p>
                                                </div>
                                            </Box>
                                        </Tooltip>                                         
                                    </div>    
                                    <div className="flex items-center w-1/2 ml-2">
                                        <Tooltip title={DESCRIPTION.RED_CARDS} arrow placement="right">
                                            <Box className="flex" sx={{color: COLOR.GUNMETAL}}>
                                                <div className='mr-2'>
                                                    <img className='w-10' src={red_card_img} alt="red_card"/>
                                                </div>
                                                <div className='flex items-center w-full'>
                                                    <p className='text-white font-bold font-content'>{red_card} <small>red</small></p>
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

export function renderJoueurCarte({
                                    player,
                                    nb_game,
                                    minute,
                                    goal,
                                    assist,
                                    yellow_card,
                                    red_card,
                                }) {
                                    return (
                                    <JoueurCarte
                                        key={Math.random()*1000}
                                        player={player}
                                        nb_game={nb_game}
                                        minute={minute}
                                        goal={goal}
                                        assist={assist}
                                        yellow_card={yellow_card}
                                        red_card={red_card}
                                    />
                                    );
                                }
