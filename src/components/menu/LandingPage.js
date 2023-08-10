import ball_data2 from '../../../src/assets/ball_data2.png'
import ball_graph from '../../../src/assets/ball_graph.png'
import kickball from '../../../src/assets/icon/kickball.png'
import joueur from '../../../src/assets/icon/joueur.png'
import ligue from '../../../src/assets/icon/ligue.png'
import fc from '../../../src/assets/icon/fc.png'

import { LEAGUES } from '../../data/Api'

export default function LandingPage() {



    return (
        <div className=" flex flex-col">
            <div className="h-screen">
                {/* 1ère Partie */}
                <div className="h-3/5 max-md:h-full flex flex-row max-md:flex-col">
                    <div className="relative basis-1/2">
                        <div className="absolute top-1/2 max-md:pt-[4rem] -translate-y-1/2 w-full h-5/6 pl-[5.75rem]">
                            <div className='flex flex-col justify-evenly h-full px-5'>
                                <div className='w-36'>
                                    <img src={kickball}/>
                                </div>
                                <div>
                                    <p className='text-white text-md font-content italic pb-2'>Les données racontons l'histoire du football !</p>
                                    <p className='text-tiffanyBlue text-5xl uppercase font-title'>FootStat</p>
                                </div>
                                
                                <div className='flex flex-col pt-[6rem]'>
                                    <div>
                                        <span className='text-white text-2xl font-content'>Les 5 plus grandes ligues européennes <br/> (2002 ~ 2022) : </span>
                                    </div>
                                    <div className='flex pt-5'>
                                        <div className='basis-1/3'>
                                            <img className='w-3/5 lg:w-1/2' src={LEAGUES.IMG+'/Ligue 1'} alt="logo_ligue1"/>
                                        </div>
                                        <div className='basis-1/3'>
                                            <img className='w-3/5 lg:w-1/2' src={LEAGUES.IMG+'/Premier League'} alt="logo_premier_league"/>
                                        </div>
                                        <div className='basis-1/3'>
                                            <img className='w-3/5 lg:w-1/2' src={LEAGUES.IMG+'/Bundes Liga'} alt="logo_bundesliga"/>
                                        </div> 
                                        <div className='basis-1/3'>
                                            <img className='w-3/5 lg:w-1/2' src={LEAGUES.IMG+'/Serie A'} alt="logo_serie_a"/>                        
                                        </div> 
                                        <div className='basis-1/3'>
                                            <img className='w-3/5 lg:w-1/2' src={LEAGUES.IMG+'/La Liga'} alt="logo_la_liga"/>
                                        </div>                                                                                                          
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative basis-1/2">
                        <div className="absolute top-1/2 -translate-y-1/2 w-full h-5/6">
                            <div className='flex h-full justify-center items-center'>
                                <div className='w-3/4 ml-[0.45rem] pb-[1.7rem] max-md:w-1/2 max-md:pt-[5rem]'>
                                    <img src={ball_graph} alt="ball_graph"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 2ème Partie */}
                <div className="relative h-2/5 max-md:h-full">
                    <div className='flex md:flex-row max-md:flex-col pt-5 px-2.5 pb-2 w-full h-full'>
                        <div className='basis-1/3 mb-3 h-full'>                           
                            <div className="w-4/6 m-auto h-full bg-eerieBlack border border-1 border-tiffanyBlue rounded-3xl">
                                <div className='flex flex-col h-full justify-center'>
                                    <div className='pt-5'>
                                        <img className="w-1/3 m-auto rounded-t-lg" src={ligue} alt="player" />
                                    </div>
                                    <div className="p-5 flex flex-col justify-between h-full">
                                        <p className="m-3 font-normal text-white text-center pt-5">Cherchez la ligue de vos préférées.</p>
                                        <div className='flex justify-center'>
                                            <a href="#" className="inline-flex items-center px-3 py-2 text-md font-bold text-center text-eerieBlack bg-tiffanyBlue rounded-lg hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300">
                                                Cliquer ici
                                                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='basis-1/3 mb-3 h-full'>                           
                            <div className="w-4/6 m-auto h-full bg-eerieBlack border border-1 border-tiffanyBlue rounded-3xl">
                                <div className='flex flex-col h-full justify-center'>
                                    <div className='pt-5'>
                                        <img className="w-1/3 m-auto rounded-t-lg" src={fc} alt="player" />
                                    </div>
                                    <div className="p-5 flex flex-col justify-between h-full">
                                        <p className="m-3 font-normal text-white text-center pt-5">Cherchez la ligue de vos préférées.</p>
                                        <div className='flex justify-center'>
                                            <a href="#" className="inline-flex items-center px-3 py-2 text-md font-bold text-center text-eerieBlack bg-tiffanyBlue rounded-lg hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300">
                                                Cliquer ici
                                                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='basis-1/3 mb-3 h-full'>                           
                            <div className="w-4/6 m-auto h-full bg-eerieBlack border border-1 border-tiffanyBlue rounded-3xl">
                                <div className='flex flex-col h-full justify-center'>
                                    <div className='pt-5'>
                                        <img className="w-1/3 m-auto rounded-t-lg" src={joueur} alt="player" />
                                    </div>
                                    <div className="p-5 flex flex-col justify-between h-full">
                                        <p className="m-3 font-normal text-white text-center pt-5">Cherchez la ligue de vos préférées.</p>
                                        <div className='flex justify-center'>
                                            <a href="#" className="inline-flex items-center px-3 py-2 text-md font-bold text-center text-eerieBlack bg-tiffanyBlue rounded-lg hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300">
                                                Cliquer ici
                                                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div> 
            <div className='h-screen'>
                <div className='h-1/2 bg-darkBlue'>

                </div>
            </div>
        </div>
    )
}