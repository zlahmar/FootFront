// CSS
import '../../styles/index.css'

// React
import { useEffect, useState } from 'react';

// API, DATA
import { PLAYERS, NATIONALITIES } from '../../data/Api'
import { getIdFromUrl } from '../../data/Arrays';

// Components
import LoadingCarte from "../carte/LoadingCarte";
import ChronoElement from '../utility/ChronoElement';

// Images
import match from '../../assets/icon/match.png'
import shoot from '../../assets/icon/shoot.png'
import kickball from '../../assets/icon/kickball.png'
import time from '../../assets/icon/time.png'
import yellow_card from '../../assets/icon/yellow_card.png'
import red_card from '../../assets/icon/red_card.png'

// Constants
import { DESCRIPTION, COLOR } from '../../data/Constants';

// Axios
import axios from 'axios'

// react-chrono
import { Chrono } from "react-chrono"

export default function Joueur() {
    const player_id = getIdFromUrl('joueurs')

    // -------------------
    // USE STATE Variables
    // -------------------

    // player
    const [player, setPlayer] = useState(null)

    // stats
    const [stats, setStats] = useState(null)

    // chrono
    const [chrono, setChrono] = useState(null)

    // -------------------
    // (0) INIT DATA - PLAYER : Name, Position, Nationality, Photo
    // -------------------
    useEffect(() => {
        const fetchApiPlayer = async () => {
            const response = await axios.get(PLAYERS.DATA + `/${player_id}`)

            if (response.status === 500) {
                return;
            }
            setPlayer(response.data)
        }
        fetchApiPlayer()
    }, [player_id])


    // -------------------
    // (1) INIT DATA - STATS : All Stats
    // -------------------
    useEffect(() => {
        const fetchApiStats = async () => {
            const response = await axios.get(PLAYERS.ALL_STATS + `?player_id=${player_id}`)

            if (response.status === 500) {
                return;
            }
            setStats(response.data)
        }
        fetchApiStats()
    }, [player_id])

    // -------------------
    // (2) INIT DATA - CHRONO : Per Season
    // -------------------
    useEffect(() => {
        const fetchApiStatsPerSeason = async () => {
            const response = await axios.get(PLAYERS.ALL_STATS_PER_SEASON + `?player_id=${player_id}`)
            
            if (response.status === 500) {
                return;
            }
            setChrono(response.data)
        }
        fetchApiStatsPerSeason()
    },[player_id])

    // ---------------------------------------------
    // (3) LOADING
    // ---------------------------------------------
    if (player === null || stats === null || chrono === null) {
        return (
            <div className="h-screen flex flex-col justify-between border-2 border-eerieBlack pt-3 pb-3">
              <LoadingCarte />
            </div>
          );
    }

let chrono_items = []
for (let i = 0; i < chrono.length; i++) {
    chrono_items.push(new ChronoElement(chrono[i]).createChronoElements())
    chrono_items.sort((a, b) => (a.title > b.title) ? 1 : -1)
}

const items = [
    ...chrono_items
];

    return (
        <div className="px-2 pb-3 flex flex-col">
            <div className="mt-[5rem] mx-[1rem] max-md:mx-[2rem]">
                {/* 1. Player Photo, Name, Important Stats ... */}
                <div className='flex flex-wrap max-md:flex-col mb-3 bg-eerieBlack rounded-3xl border-b-2 border-tiffanyBlue p-3'>
                    <div className='basis-1/3'>
                        <div className='flex justify-center items-center p-5'>
                            <img className='w-[15rem] h-[15rem] bg-white'  src={`${PLAYERS.IMG}/${player_id}`} alt={player.name} />
                        </div>
                    </div>
                    <div className='basis-2/3 border-tiffanyBlue'>
                        {/* Player Name, Nationality, Position */}
                        <div className='flex flex-wrap max-md:flex-col mb-5'>
                            <div className='basis-1/3 flex flex-col'>
                                <div className='flex flex-col items-center'>
                                    <p className='text-white text-4xl mb-3 font-content font-bold'>{player.name}</p>
                                    <img className="w-[5rem] h-[4rem] mb-3" src={`${NATIONALITIES.IMG}/${player.nationality.name_original}`} alt={`${player.nationality.name_original}`} />
                                    <p className='text-white text-xl mb-3 font-content'>{player.position}</p>
                                </div>
                            </div>
                        </div>

                        {/* Player Aggregated Stats */}
                        <div className='flex flex-wrap max-md:flex-col p-3'>
                            <div className='basis-1/3 md:border-r-2 max-md:pb-5 border-tiffanyBlue flex flex-col'>
                                <div className='flex justify-center items-center'>
                                    <img className='w-[2rem] h-[2rem] mr-3' src={match} alt="match"/>
                                    <p className='text-white font-title text-xl text-center'>{DESCRIPTION.ALL_GAMES}</p>
                                </div>
                                <p className='text-tiffanyBlue font-content text-4xl text-center'> {stats[0].allNbGames}</p>
                            </div>
                            <div className='basis-1/3 md:border-r-2 max-md:pb-5 border-tiffanyBlue flex flex-col'>
                                <div className='flex justify-center items-center'>
                                    <img className='w-[2rem] h-[2rem] mr-3' src={shoot} alt="shoot"/>
                                    <p className='text-white font-title text-xl text-center'>{DESCRIPTION.ALL_GOALS}</p>
                                </div>
                                <p className='text-tiffanyBlue font-content text-4xl text-center'> {stats[0].allGoals}</p>
                            </div>
                            <div className='basis-1/3 border-tiffanyBlue flex flex-col'>
                                <div className='flex justify-center items-center'>
                                    <img className='w-[2rem] h-[2rem] mr-3' src={kickball} alt="kickball"/>
                                    <p className='text-white font-title text-xl text-center'>{DESCRIPTION.ALL_ASSISTS_SHORT}</p>
                                </div>
                                <p className='text-tiffanyBlue font-content text-4xl text-center'> {stats[0].allAssists}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. Player Detail Stat */}
                <div className=' mb-3'>
                    <p className='text-white text-center text-3xl mb-3'>STATISTIQUES ET RECORDS</p>
                    <div className='bg-eerieBlack rounded-3xl border-t-2 border-tiffanyBlue p-3'>
                        {/* (1) Summary */}
                        <div className='flex flex-wrap max-md:flex-col mb-5'>
                            <div className='basis-1/3 pl-2 md:border-r-2 border-tiffanyBlue mb-3'>
                                <div className='flex justify-center items-center'>
                                    <img className='w-[2rem] h-[2rem] mr-3' src={time} alt="time"/>
                                    <p className='text-white font-title text-xl text-center'>{DESCRIPTION.AVG_MINUTES}</p>
                                </div>
                                <p className='text-tiffanyBlue font-content text-4xl text-center'>{stats[0].avgMinutes} min.</p>
                            </div>
                            <div className='basis-1/3 pl-2 md:border-r-2 border-tiffanyBlue mb-3'>
                                <div className='flex justify-center items-center'>
                                    <img className='w-[2rem] h-[2rem] mr-3' src={shoot} alt="shoot"/>
                                    <p className='text-white font-title text-xl text-center'>{DESCRIPTION.AVG_GOALS}</p>
                                </div>
                                <p className='text-tiffanyBlue font-content text-4xl text-center'>{(stats[0].allGoals/stats[0].allNbGames).toFixed(2)} buts</p>
                            </div>
                            <div className='basis-1/3 pl-2'>
                                <div className='flex justify-center items-center'>
                                    <img className='w-[2rem] h-[2rem] mr-3' src={kickball} alt="kickball"/>
                                    <p className='text-white font-title text-xl text-center'>{DESCRIPTION.AVG_ASSISTS}</p>
                                </div>
                                <p className='text-tiffanyBlue font-content text-4xl text-center'>{(stats[0].allAssists/stats[0].allNbGames).toFixed(2)} assists</p>
                            </div>
                        </div>

                        {/* (2) Summary */}
                        <div className='flex flex-wrap  max-md:flex-col'>
                            <div className='basis-1/3 pl-2 md:border-r-2 border-tiffanyBlue flex flex-col items-center mb-3'>
                                <div className='flex justify-center items-center'>
                                    <img className='w-[2rem] h-[2rem] mr-3' src={yellow_card} alt="yellow_card"/>
                                    <p className='text-white font-title text-xl text-center'>{DESCRIPTION.YELLOW_CARDS}</p>
                                </div>
                                <p className='text-tiffanyBlue font-content text-4xl text-center'>{stats[0].allYellowCards}</p>
                            </div>
                            <div className='basis-1/3 pl-2 flex flex-col items-center md:border-r-2 border-tiffanyBlue'>
                                <div className='flex justify-center items-center'>
                                    <img className='w-[2rem] h-[2rem] mr-3' src={red_card} alt="red_card"/>
                                    <p className='text-white font-title text-xl text-center'>{DESCRIPTION.RED_CARDS}</p>
                                </div>
                                <p className='text-tiffanyBlue font-content text-4xl text-center'>{stats[0].allRedCards}</p>
                            </div>
                            <div className='basis-1/3'>
                            </div>
                        </div>    
                    </div>
                </div>

                {/* 3. Player Chrono Graph */}
                <div className='flex flex-col justify-center'>
                    <p className='text-white text-center text-3xl mb-3'>CHRONOLOGIE</p>
                    <div className='m-auto xl:w-[75rem] lg:w-[60rem] h-full px-5 bg-eerieBlack rounded-3xl border-t-2 border-tiffanyBlue pt-[3rem]'>
                        <Chrono 
                            items={items}
                            theme={{
                                primary: COLOR.TIFFANYBLUE,
                                secondary: COLOR.ODYSSEUS,
                                cardBgColor: COLOR.WHITE,
                                titleColor: COLOR.WHITE,
                                titleColorActive: COLOR.TIFFANYBLUE,
                            }} 
                            mode="VERTICAL_ALTERNATING"
                            mediaHeight={300}
                            cardHeight={500}
                            textOverlay 
                        >
                        </Chrono>
                    </div>
                </div>
            </div>
        </div>
    );
}