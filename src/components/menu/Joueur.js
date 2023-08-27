// CSS
import '../../styles/index.css'

// React
import { useEffect, useState } from 'react';

// API, DATA
import { CLUBS, PLAYERS, NATIONALITIES } from '../../data/Api'
import { getIdFromUrl } from '../../data/Arrays';

// Components
import LoadingCarte from "../carte/LoadingCarte";

// Constants
import { DESCRIPTION } from '../../data/Constants';

// Axios
import axios from 'axios'

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
    }, [])


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
    }, [player])
    // ---------------------------------------------
    // (2) LOADING
    // ---------------------------------------------
    if (player === null || stats === null) {
        return (
            <div className="h-screen flex flex-col justify-between border-2 border-eerieBlack pt-3 pb-3">
              <LoadingCarte />
            </div>
          );
    }

    return (
        <div className="px-2 pb-3 flex flex-col border border-2 border-tiffanyBlue">
            <div className="mt-[5rem] mx-[7rem] max-md:mx-[2rem] border border-2 border-tiffanyBlue">
                {/* 1. Player Photo, Name, Important Stats ... */}
                <div className='flex flex-wrap max-md:flex-col mb-5'>
                    <div className='basis-1/2 border border-2 border-tiffanyBlue'>
                        <div className='flex justify-center items-center h-full'>
                            <img  src={`${PLAYERS.IMG}/${player_id}`} alt={player.name} />
                        </div>
                    </div>
                    <div className='basis-1/2 border border-2 border-tiffanyBlue'>
                        <p className='text-white text-4xl mb-3 font-content'>{player.name}</p>
                        <img className="w-[5rem] h-[4rem] mb-3" src={`${NATIONALITIES.IMG}/${player.nationality.name_original}`} alt={`${player.nationality.name_original}`} />
                        <p className='text-white text-xl mb-3 font-content'>{player.position}</p>

                        <div className='flex flex-wrap  max-md:flex-col'>
                            <div className='basis-1/3  border border-2 border-tiffanyBlue flex flex-col justify-center items-center'>
                                <p className='text-white font-title text-xl'>{DESCRIPTION.ALL_GAMES}</p>
                                <p className='text-tiffanyBlue font-content text-4xl'> {stats[0].allNbGames}</p>
                            </div>
                            <div className='basis-1/3  border border-2 border-tiffanyBlue flex flex-col justify-center items-center'>
                                <p className='text-white font-title text-xl'>{DESCRIPTION.ALL_GOALS}</p>
                                <p className='text-tiffanyBlue font-content text-4xl'> {stats[0].allGoals}</p>
                            </div>
                            <div className='basis-1/3  border border-2 border-tiffanyBlue flex flex-col justify-center items-center'>
                                <p className='text-white font-title text-xl'>{DESCRIPTION.ALL_ASSISTS}</p>
                                <p className='text-tiffanyBlue font-content text-4xl'> {stats[0].allAssists}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. Player Detail Stat */}
                <div className='border border-2 border-tiffanyBlue'>
                    <h1 className='text-white'>STATISTIQUES ET RECORDS</h1>

                    {/* (1) Summary */}
                    <div className='flex flex-wrap  max-md:flex-col'>
                        <div className='basis-1/3  border border-2 border-tiffanyBlue'>
                            <h1 className='text-white'>1-1 - Avg(min)/90 : {stats[0].avgMinutes} min.</h1>
                        </div>
                        <div className='basis-1/3  border border-2 border-tiffanyBlue'>
                            <h1 className='text-white'>1-2 - SUM(goal)/SUM(nb_game) : {(stats[0].allGoals/stats[0].allNbGames).toFixed(2)}</h1>
                        </div>
                        <div className='basis-1/3  border border-2 border-tiffanyBlue'>
                            <h1 className='text-white'>1-3 - SUM(assist)/SUM(nb_game) : {(stats[0].allAssists/stats[0].allNbGames).toFixed(2)}</h1>
                        </div>
                    </div>

                     {/* (2) Summary */}
                    <div className='flex flex-wrap  max-md:flex-col'>
                        <div className='basis-1/3  border border-2 border-tiffanyBlue'>
                            <h1 className='text-white'>2-1 - Yellow Card : {stats[0].allYellowCards}</h1>
                        </div>
                        <div className='basis-1/3  border border-2 border-tiffanyBlue'>
                        </div>
                        <div className='basis-1/3  border border-2 border-tiffanyBlue'>
                            <h1 className='text-white'>2-2 - Red Card : {stats[0].allRedCards}</h1>
                        </div>
                    </div>    
                </div>

                {/* 3. Player Chrono Graph */}
                <div className='flex justify-center border border-2 border-tiffanyBlue'>
                    <h1 className='text-white'>Chrono</h1>
                </div>

            </div>
        </div>
    );
}