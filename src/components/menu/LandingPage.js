import ball_data from '../../../src/assets/ball_data2.png'

import kickball from '../../../src/assets/icon/kickball.png'
import joueur from '../../../src/assets/icon/joueur.png'
import ligue from '../../../src/assets/icon/ligue.png'
import fc from '../../../src/assets/icon/fc.png'
import player_data1 from '../../../src/assets/player_data1.png'
import mockup from '../../../src/assets/mockup.png'
import players_filter from '../../../src/assets/players_filter.png'
import leagues_graph from '../../../src/assets/leagues_graph.png'
import clubs_graph from '../../../src/assets/clubs_graph.png'
import club_graph from '../../../src/assets/club_graph.png'

import { LEAGUES } from '../../data/Api'
import {Link} from "react-router-dom";

export default function LandingPage() {

    return (
        <div className=" flex flex-col pt-5 bg-eerieBlack">
            <div className="h-full">
                {/* 1ère Partie */}
                <div className="mt-[0.7rem] max-md:h-full flex flex-row max-md:flex-col">
                    <div className="basis-1/2">
                        <div className="w-full pl-[5.75rem] max-md:pl-0">
                            <div className='flex flex-col justify-evenly h-full px-5'>
                                <div className='w-36'>
                                    <img src={kickball} alt="kickball"/>
                                </div>
                                <div>
                                    <p className='text-tiffanyBlue text-5xl uppercase font-title pb-3'>FootStat</p>
                                    <p className='text-white text-lg font-content italic pb-3'>
                                        Suivez les tendances des différentes ligues grâce à notre base de données. 
                                        Comparez les performances de chaque club et de chaque joueur en individuel.
                                    </p>
                                    <p className='text-white text-3xl'>
                                        Trouvez, analysez, pariez !
                                    </p>
                                </div>
                                <div className='flex flex-col pt-[2rem]'>
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
                        <div className='flex h-full justify-center items-center'>
                            <div className='pb-[1.7rem] max-md:w-1/2 max-md:pt-[5rem]'>
                                <img className='w-4/5 m-auto' src={ball_data} alt="ball_data"/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 2ème Partie */}
                <p className='text-white text-center font-title text-3xl py-10 uppercase'>
                    A vous de jouer ...
                </p>
                <div className="h-2/5 max-md:h-full">
                    <div className='flex md:flex-row max-md:flex-col pt-5 px-2.5 pb-7 w-full h-full'>
                        <div className='basis-1/3 mb-3 h-full'>                           
                            <div className="w-4/6 m-auto h-full bg-eerieBlack border border-1 border-tiffanyBlue rounded-3xl">
                                <div className='flex flex-col h-full justify-center'>
                                    <div className='pt-5'>
                                        <img className="w-1/3 m-auto rounded-t-lg" src={ligue} alt="player" />
                                        <p className="font-title font-bold text-white text-center text-2xl uppercase">Ligues</p>
                                    </div>
                                    <div className="p-5 flex flex-col justify-between h-full">
                                        <div className='flex justify-center'>
                                            <Link to="/ligues" className="inline-flex items-center p-3 text-lg font-bold text-center text-eerieBlack bg-tiffanyBlue rounded-lg hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300" >
                                                voir plus
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
                                        <p className="font-title font-bold text-white text-center text-2xl uppercase">Clubs</p>
                                    </div>
                                    <div className="p-5 flex flex-col justify-between h-full">
                                        <div className='flex justify-center'>
                                            <Link to="/clubs" className="inline-flex items-center p-3 text-lg font-bold text-center text-eerieBlack bg-tiffanyBlue rounded-lg hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300" >
                                                voir plus
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
                                        <p className="font-title font-bold text-white text-center text-2xl uppercase">Joueurs</p>
                                    </div>
                                    <div className="p-5 flex flex-col justify-between h-full">
                                        <div className='flex justify-center'>
                                            <Link to="/joueurs" className="inline-flex items-center p-3 text-lg font-bold text-center text-eerieBlack bg-tiffanyBlue rounded-lg hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300" >
                                                voir plus
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
            <div className='h-full border-t border-tiffanyBlue'>
                <div className='bg-darkBlue flex md:flex-row max-md:flex-col py-5'>
                    <div className='basis-2/5'>
                        <img src={player_data1} alt="player_data"/>
                    </div>
                    <div className='basis-3/5'>
                        <div className='m-5'>
                            <p className='text-white text-2xl uppercase indent-3'>
                            L'application de la science des données au football : une analyse comparative des ligues, des clubs et des joueurs à tous les niveaux !
                            </p>
                            <div className='mt-5'>
                                <div className='grid grid-cols-3 gap-14 max-md:grid-cols-1 max-md:justify-items-center max-md:text-center'>
                                    <div className='text-white'>
                                        <p className='text-3xl font-title font-bold'>1. </p>
                                        <p className='text-2xl font-title uppercase font-bold'><strong className='underline decoration-tiffanyBlue'>Ligues</strong></p>
                                        
                                        <p className='font-content text-lg pt-3'>
                                            Statistiques incluant <span className=' underline decoration-white'>l'évolution du classement</span> <Link to="https://fr.uefa.com/nationalassociations/uefarankings/country/#/yr/2024"><span className='underline decoration-tiffanyBlue text-tiffanyBlue'>UEFA Coefficients des pays </span></Link> sur une période de 20 ans, de <span className=' underline decoration-white'>buts marqués </span>, de <span className=' underline decoration-white'>passes décisives effectuées</span>, ainsi que <span className=' underline decoration-white'>le nombre de cartons jaunes et rouges reçus</span>.
                                        </p>
                                    </div>
                                    <div className='text-white'>
                                        <p className='text-3xl font-title font-bold'>2. </p>
                                        <p className='text-2xl font-title uppercase font-bold'><strong className='underline decoration-tiffanyBlue'>Club</strong></p>
                                        
                                        <p className='font-content text-lg pt-3'>
                                            Statistiques incluant <span className='underline decoration-white'>le nombre de victoires au sein d'une ligue, la nationalité des joueurs</span>, ainsi que <span className='underline decoration-white'>l'évolution du classement </span> sur une période de 20 ans pour chaque club.
                                        </p>                                        
                                    </div>
                                    <div className='text-white'>
                                        <p className='text-3xl font-title font-bold'>3. </p>
                                        <p className='text-2xl font-title uppercase font-bold'><strong className='underline decoration-tiffanyBlue'>Joueur</strong></p>
                                        
                                        <p className='font-content text-lg pt-3'>
                                            Statistiques incluant le nombre de <span className='underline decoration-white'>matchs</span>, de <span className='underline decoration-white'>buts marqués</span>, de <span className='underline decoration-white'>passes décisives effectuées</span>, ainsi que <span className='underline decoration-white'>le nombre de cartons jaunes et rouges reçus</span>.
                                        </p>
                                    </div>
                                    <div className='text-white'>
                                        <p className='text-3xl font-title font-bold'>4. </p>
                                        <p className='text-2xl font-title uppercase font-bold'><strong className='underline decoration-tiffanyBlue'>Joueur (Gardien)</strong></p>
                                        
                                        <p className='font-content text-lg pt-3'>
                                            Statistiques incluant <span className='underline decoration-white'>le nombre de matchs, de buts encaissés, des arrêts effectués, des matchs sans encaisser de but</span>, ainsi que <span className='underline decoration-white'>les victoires</span> et <span className='underline decoration-white'>les défaites</span>.
                                        </p>
                                    </div>
                                    <div className='text-white'>
                                        <p className='text-3xl font-title font-bold'>5. </p>
                                        <p className='text-2xl font-title uppercase font-bold'><strong className='underline decoration-tiffanyBlue'>Données agrégées</strong></p>
                                        <p className='font-content text-lg pt-3'>
                                            Statistiques incluant <span className='underline decoration-white'>le meilleur joueur de chaque ligue, le meilleur joueur de chaque club</span>, ainsi que <span className='underline decoration-white'>le meilleur club de chaque ligue</span>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* 4ème Partie */}
            <div className='h-full bg-darkBlue pb-10'>
                <div className="flex justify-center">
                    <div className='w-1/2 max-md:w-full max-md:px-3 brightness-75'>
                        <img src={mockup} alt="mockup"/>
                    </div>  
                </div>
            </div>
            {/* 5ème Partie */}
            <div>
                <p className='text-white text-center font-title text-3xl py-10 uppercase  border-t border-tiffanyBlue'>
                        notre site propose ...
                </p>
            </div>
            <div className='h-full bg-eerieBlack divide-y-2 divide-white'>
                <div className="flex max-md:flex-col pb-5">
                    <div className='basis-1/2 w-1/3 max-md:w-full p-5'>
                        <img src={leagues_graph} alt="league_description"/>
                    </div>  
                    <div className='basis-1/2 w-1/2 max-md:w-full p-5'>
                        <p className='text-2xl font-title uppercase text-white'><strong className='underline decoration-tiffanyBlue'>Ligues</strong></p>                        
                        <div className='h-5/6 mt-5 flex flex-col'>
                            <div className="basis-1/3 mb-10">
                                <div>
                                    <p className='font-content text-lg pt-3 text-white mr-5'>
                                        <strong className='underline decoration-white'>1. UEFA Coefficients des pays : </strong>
                                    </p>
                                </div>
                                <div>
                                    <p className='indent-3 font-content text-lg pt-3 text-white'>
                                        Classement des ligues de 2002 à 2022 
                                    </p>
                                </div>
                            </div>
                            <div className="basis-1/3 mb-10">
                                <div>
                                    <p className='font-content text-lg pt-3 text-white mr-5'>
                                        <strong className='underline decoration-white'>2. Cartons jaunes et rouges : </strong>
                                    </p>
                                </div>
                                <div>
                                    <p className='indent-3 font-content text-lg pt-3 text-white'>
                                        Total de cartons jaunes et rouges reçus pour chaque ligue de 2002 à 2022
                                    </p>
                                </div>
                            </div>
                            <div className="basis-1/3">
                                <div>
                                    <p className='font-content text-lg pt-3 text-white mr-5'>
                                        <strong className='underline decoration-white'>3. Buts et passes décisives : </strong>
                                    </p>
                                </div>
                                <div>
                                    <p className='indent-3 font-content text-lg pt-3 text-white'>
                                        Total de buts et passes décisives pour chaque ligue de 2002 à 2022
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
                <div className="flex max-md:flex-col py-5">
                    <div className='basis-1/2 w-1/2 max-md:w-full p-5'>
                        <img src={clubs_graph} alt="clubs_in_league_description"/>
                    </div>  
                    <div className='basis-1/2 w-1/2 max-md:w-full p-5'>
                        <p className='text-2xl font-title uppercase text-white'><strong className='underline decoration-tiffanyBlue'>Ligue</strong></p>                        
                        <div className='h-5/6 mt-5 flex flex-col'>
                            <div className="basis-1/2 mb-10">
                                <div>
                                    <p className='font-content text-lg pt-3 text-white mr-5'>
                                        <strong className='underline decoration-white'>1. Victoires : </strong>
                                    </p>
                                </div>
                                <div>
                                    <p className='indent-3 font-content text-lg pt-3 text-white'>
                                        Nombre de victoires pour chaque ligue de 2002 à 2022
                                    </p>
                                </div>
                            </div>
                            <div className="basis-1/2 mb-10">
                                <div>
                                    <p className='font-content text-lg pt-3 text-white mr-5'>
                                        <strong className='underline decoration-white'>2. Nationalités : </strong>
                                    </p>
                                </div>
                                <div>
                                    <p className='indent-3 font-content text-lg pt-3 text-white'>
                                        Tendance des nationalités pour chaque ligue de 2002 à 2022
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="flex max-md:flex-col py-5">
                    <div className='basis-1/2 w-1/2 max-md:w-full p-5'>
                        <img src={club_graph} alt="club_description"/>
                    </div>  
                    <div className='basis-1/2 w-1/2 max-md:w-full p-5'>
                        <p className='text-2xl font-title uppercase text-white'><strong className='underline decoration-tiffanyBlue'>Club</strong></p>
                        <div className='h-5/6 mt-5 flex flex-col'>
                            <div className="basis-1/2 mb-10">
                                <div>
                                    <p className='font-content text-lg pt-3 text-white mr-5'>
                                        <strong className='underline decoration-white'>1. Classement par saison : </strong>
                                    </p>
                                </div>
                                <div>
                                    <p className='indent-3 font-content text-lg pt-3 text-white'>
                                        Tendance des classements pour chaque club de 2002 à 2022
                                    </p>
                                </div>
                            </div>
                            <div className="basis-1/2 mb-10">
                                <div>
                                    <p className='font-content text-lg pt-3 text-white mr-5'>
                                        <strong className='underline decoration-white'>2. Les meilleurs joueurs : </strong>
                                    </p>
                                </div>
                                <div>
                                    <p className='indent-3 font-content text-lg pt-3 text-white'>
                                        Top 5 des meilleurs joueurs (buteurs, passeurs et gardiens) pour chaque club de 2002 à 2022
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>                
                <div className="flex max-md:flex-col py-5">
                    <div className='basis-1/2 w-1/2 max-md:w-full p-5'>
                        <img src={players_filter} alt="player_description"/>
                    </div>  
                    <div className='basis-1/2 w-1/2 max-md:w-full p-5'>
                        <p className='text-2xl font-title uppercase text-white'><strong className='underline decoration-tiffanyBlue'>Joueurs</strong></p>
                        <div className='h-5/6 mt-5 flex flex-col'>
                            <div className="mb-10">
                                <div>
                                    <p className='font-content text-lg pt-3 text-white mr-5'>
                                         Performances de chaque joueur
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}