import ball_graph from '../../../src/assets/ball_graph.png'
import kickball from '../../../src/assets/icon/kickball.png'
import joueur from '../../../src/assets/icon/joueur.png'
import ligue from '../../../src/assets/icon/ligue.png'
import fc from '../../../src/assets/icon/fc.png'
import player_data1 from '../../../src/assets/player_data1.png'
import mockup from '../../../src/assets/mockup.png'
import filter from '../../../src/assets/filter.png'
import { LEAGUES } from '../../data/Api'
import {Link} from "react-router-dom";

export default function LandingPage() {

    return (
        <div className=" flex flex-col pt-5">
            <div className="h-full">
                {/* 1ère Partie */}
                <div className="mt-[0.7rem] max-md:h-full flex flex-row max-md:flex-col">
                    <div className="basis-1/2">
                        <div className="w-full pl-[5.75rem]">
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
                    <div className="basis-1/2">
                        <div className="w-full">
                            <div className='flex h-full justify-center items-center'>
                                <div className='w-3/4 ml-[0.45rem] pb-[1.7rem] max-md:w-1/2 max-md:pt-[5rem]'>
                                    <img src={ball_graph} alt="ball_graph"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 2ème Partie */}
                <p className='text-white text-center font-title text-3xl py-10 uppercase'>
                    Notre Catégorie
                </p>
                <div className="h-2/5 max-md:h-full">
                    <div className='flex md:flex-row max-md:flex-col pt-5 px-2.5 pb-2 w-full h-full'>
                        <div className='basis-1/3 mb-3 h-full'>                           
                            <div className="w-4/6 m-auto h-full bg-eerieBlack border border-1 border-tiffanyBlue rounded-3xl">
                                <div className='flex flex-col h-full justify-center'>
                                    <div className='pt-5'>
                                        <img className="w-1/3 m-auto rounded-t-lg" src={ligue} alt="player" />
                                        <p className="font-title font-bold text-white text-center text-2xl uppercase">Ligue</p>
                                    </div>
                                    <div className="p-5 flex flex-col justify-between h-full">
                                        <p className="mb-3 font-normal text-white text-center">Découvrez les différentes ligues et plongez dans leurs statistiques fascinantes !</p>
                                        <div className='flex justify-center'>
                                            <Link to="/ligues" className="inline-flex items-center px-3 py-2 text-md font-bold text-center text-eerieBlack bg-tiffanyBlue rounded-lg hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300" >
                                                Cliquer
                                                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                                </svg>
                                            </Link>
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
                                        <p className="font-title font-bold text-white text-center text-2xl uppercase">Club</p>
                                    </div>
                                    <div className="p-5 flex flex-col justify-between h-full">
                                        <p className="mb-3 font-normal text-white text-center">Découvrez les différents  clubs et plongez dans leurs statistiques captivantes !</p>
                                        <div className='flex justify-center'>
                                            <Link to="/clubs" className="inline-flex items-center px-3 py-2 text-md font-bold text-center text-eerieBlack bg-tiffanyBlue rounded-lg hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300" >
                                                Cliquer
                                                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                                </svg>
                                            </Link>
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
                                        <p className="font-title font-bold text-white text-center text-2xl uppercase">Joueur</p>
                                    </div>
                                    <div className="p-5 flex flex-col justify-between h-full">
                                        <p className="mb-3 font-normal text-white text-center">Découvrez les différents joueurs et plongez dans leurs performances détaillées !</p>
                                        <div className='flex justify-center'>
                                            <Link to="/joueurs" className="inline-flex items-center px-3 py-2 text-md font-bold text-center text-eerieBlack bg-tiffanyBlue rounded-lg hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300" >
                                                Cliquer
                                                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div> 
            {/* 3ème Partie */}
            <div className='h-full bg-darkBlue py-10 mt-10  border-t border-tiffanyBlue'>
                <div className="flex justify-center">
                    <div className='w-1/2 max-md:w-4/5'>
                        <img src={mockup}/>
                    </div>  
                </div>
            </div>
            {/* 4ème Partie */}
            <div className='h-full'>
                <div className='bg-darkBlue flex md:flex-row max-md:flex-col'>
                    <div className='basis-2/5'>
                        <img src={player_data1}/>
                    </div>
                    <div className='basis-3/5'>
                        <div className='m-5'>
                            <p className='text-white text-2xl uppercase indent-3'>LE POUVOIR DE LA SCIENCE DES DONNÉES APPLIQUÉ À LE FOOTBALL : COMPARER CHAQUE LIGUE, CHAQUE CLUB ET CHAQUE JOUEUR !</p>
                            <div className='mt-5'>
                                <div className='grid grid-cols-3 gap-14 max-md:grid-cols-1 max-md:justify-items-center max-md:text-center'>
                                    <div className='text-white'>
                                        <p className='text-3xl font-title font-bold'>1. </p>
                                        <p className='text-2xl font-title uppercase font-bold'><a className='underline decoration-tiffanyBlue'>Ligue</a></p>
                                        
                                        <p className='font-content text-lg pt-3'>
                                            Statistiques incluant <a className='underline decoration-white'>l'évolution du classement </a><Link to="https://fr.uefa.com/nationalassociations/uefarankings/country/#/yr/2024"><a className='underline decoration-tiffanyBlue text-tiffanyBlue'>UEFA Coefficients des pays sur une période de 20 ans</a></Link>, de <a className='underline decoration-white'>buts marqués, de passes décisives effectuées</a>, ainsi que <a className='underline decoration-white'>le nombre de cartons jaunes et rouges reçus</a>.
                                        </p>
                                    </div>
                                    <div className='text-white'>
                                        <p className='text-3xl font-title font-bold'>2. </p>
                                        <p className='text-2xl font-title uppercase font-bold'><a className='underline decoration-tiffanyBlue'>Club</a></p>
                                        
                                        <p className='font-content text-lg pt-3'>
                                            Statistiques incluant <a className='underline decoration-white'>le nombre de victoires au sein d'une ligue, la nationalité des joueurs</a>, ainsi que <a className='underline decoration-white'>l'évolution du classement sur une période de 20 ans</a> pour chaque club.
                                        </p>                                        
                                    </div>
                                    <div className='text-white'>
                                        <p className='text-3xl font-title font-bold'>3. </p>
                                        <p className='text-2xl font-title uppercase font-bold'><a className='underline decoration-tiffanyBlue'>Joueur</a></p>
                                        
                                        <p className='font-content text-lg pt-3'>
                                            Statistiques incluant <a className='underline decoration-white'>le nombre de matchs, de buts marqués, de passes décisives effectuées</a>, ainsi que <a className='underline decoration-white'>le nombre de cartons jaunes et rouges reçus</a>.
                                        </p>
                                    </div>
                                    <div className='text-white'>
                                        <p className='text-3xl font-title font-bold'>4. </p>
                                        <p className='text-2xl font-title uppercase font-bold'><a className='underline decoration-tiffanyBlue'>Joueur (Gardien)</a></p>
                                        
                                        <p className='font-content text-lg pt-3'>
                                            Statistiques incluant <a className='underline decoration-white'>le nombre de matchs, de buts encaissés, des arrêts effectués, des matchs sans encaisser de but</a>, ainsi que <a className='underline decoration-white'>les victoires</a> et <a className='underline decoration-white'>les défaites</a>.
                                        </p>
                                    </div>
                                    <div className='text-white'>
                                        <p className='text-3xl font-title font-bold'>5. </p>
                                        <p className='text-2xl font-title uppercase font-bold'><a className='underline decoration-tiffanyBlue'>Données agrégées</a></p>
                                        <p className='font-content text-lg pt-3'>
                                            Statistiques incluant <a className='underline decoration-white'>le meilleur joueur de chaque ligue, le meilleur joueur de chaque club</a>, ainsi que <a className='underline decoration-white'>le meilleur club de chaque ligue</a>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 5ème Partie */}
            <div className='h-full bg-eerieBlack py-10 mt-10  border-t border-tiffanyBlue'>
                <div className="flex">
                    <div className='basis-1/2 w-1/3 max-md:w-4/5'>
                        <img src={filter}/>
                    </div>  
                    <div className='basis-1/2 w-1/2 max-md:w-4/5'>
                        <p className='text-white'>
                            1. Ligue
                        </p>
                    </div>  
                </div>
                <div className="flex">
                    <div className='basis-1/2 w-1/2 max-md:w-4/5'>
                        <p className='text-white'>
                            2. Club
                        </p>
                    </div>  
                    <div className='basis-1/2 w-1/2 max-md:w-4/5'>
                        <img src={filter}/>
                    </div>  
                </div>
                <div className="flex">
                    <div className='basis-1/2 w-1/2 max-md:w-4/5'>
                        <img src={filter}/>
                    </div>  
                    <div className='basis-1/2 w-1/2 max-md:w-4/5'>
                        <p className='text-white'>
                            3. Joueur
                        </p>
                    </div>  
                </div>
            </div>
        </div>
    )
}