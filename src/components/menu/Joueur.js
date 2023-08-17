// CSS
import '../../styles/index.css'

// React
import { useEffect, useState } from 'react';

// API, DATA
import { CLUBS, PLAYERS } from '../../data/Api'
import { getIdFromUrl } from '../../data/Arrays';

// Axios
import axios from 'axios'

export default function Joueur() {
    const player_id = getIdFromUrl('joueurs')

    return (
        <div className="px-2 pb-3 flex flex-col border border-2 border-tiffanyBlue">
            <div className="mt-[5rem] mx-[10rem] max-md:mx-[2rem] border border-2 border-tiffanyBlue">
                {/* 1. Player Photo, Name, Important Stats ... */}
                <div className='flex flex-wrap max-md:flex-col mb-5'>
                    <div className='basis-1/2 border border-2 border-tiffanyBlue'>
                        <div className='flex justify-center items-center h-full'>
                            <h1 className='text-white'>Photo Zone</h1>
                        </div>
                    </div>
                    <div className='basis-1/2 border border-2 border-tiffanyBlue'>
                        <h1 className='text-white'>Nationality</h1>
                        <h1 className='text-white'>Name</h1>
                        <h1 className='text-white'>Position</h1>
                        <h1 className='text-white'>Joueur : {player_id}</h1>

                        <div className='flex flex-wrap  max-md:flex-col'>
                            <div className='basis-1/3  border border-2 border-tiffanyBlue'>
                                <h1 className='text-white'>1</h1>
                            </div>
                            <div className='basis-1/3  border border-2 border-tiffanyBlue'>
                                <h1 className='text-white'>2</h1>
                            </div>
                            <div className='basis-1/3  border border-2 border-tiffanyBlue'>
                                <h1 className='text-white'>3</h1>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. Player Chrono Graph */}
                <div className='flex justify-center border border-2 border-tiffanyBlue'>
                    <h1 className='text-white'>Chrono</h1>
                </div>

                {/* 3. Player Detail Stat */}
                <div className='border border-2 border-tiffanyBlue'>
                    <h1 className='text-white'>STATISTIQUES ET RECORDS</h1>

                    {/* (1) Summary */}
                    <div className='flex flex-wrap  max-md:flex-col'>
                        <div className='basis-1/3  border border-2 border-tiffanyBlue'>
                            <h1 className='text-white'>1-1 (Graph)</h1>
                        </div>
                        <div className='basis-1/3  border border-2 border-tiffanyBlue'>
                            <h1 className='text-white'>2-1 (Graph)</h1>
                        </div>
                        <div className='basis-1/3  border border-2 border-tiffanyBlue'>
                            <h1 className='text-white'>3-1 (Graph)</h1>
                        </div>
                    </div>

                    
                    {/* (2) Two Things */}
                    <div className='flex flex-wrap  max-md:flex-col'>
                        <div className='basis-1/2  border border-2 border-tiffanyBlue'>
                            <h1 className='text-white'>1-2 (Stats)</h1>
                        </div>
                        <div className='basis-1/2  border border-2 border-tiffanyBlue'>
                            <h1 className='text-white'>2-2 (Stats)</h1>
                        </div>
                    </div>

                    {/* (3) Two Things */}
                    <div className='flex flex-wrap  max-md:flex-col'>
                        <div className='basis-1/2  border border-2 border-tiffanyBlue'>
                            <h1 className='text-white'>1-3 (Stats)</h1>
                        </div>
                        <div className='basis-1/2  border border-2 border-tiffanyBlue'>
                            <h1 className='text-white'>2-3 (Stats)</h1>
                        </div>
                    </div>

                    {/* (4) Three Things */}
                    <div className='flex flex-wrap max-md:flex-col'>
                        <div className='basis-1/3  border border-2 border-tiffanyBlue'>
                            <h1 className='text-white'>1-4 (Stats)</h1>
                        </div>
                        <div className='basis-1/3  border border-2 border-tiffanyBlue'>
                            <h1 className='text-white'>2-4 (Stats)</h1>
                        </div>
                        <div className='basis-1/3  border border-2 border-tiffanyBlue'>
                            <h1 className='text-white'>3-4 (Stats)</h1>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    );
}