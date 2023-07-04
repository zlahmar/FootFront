// CSS
import '../../styles/index.css'

// React
import React, {useState, useEffect} from 'react';
import { QueryClient, QueryClientProvider,  useQueries } from "react-query"

// API / DATA
import {LEAGUES,CLUBS, PLAYERS} from "../../data/Api"
import { getBestClubBySeason, getNationalities } from '../../data/Arrays';

// Graphique
import WaffleChart from '../graphique/WaffleChart';
import TreeMapChart from '../graphique/TreeMapChart';

// Components
import LigueCarte from '../carte/LigueCarte';
import LigueLeMeilleur from '../carte/LigueLeMeilleur';
import ClubCarte from "../carte/ClubCarte";
import BlocClubCarte from '../bloc/BlocClubCarte';
import BlocTitre from '../bloc/BlocTitre';
import BlocContent from '../bloc/BlocContent';
import BlocLigueLeMeilleur from '../bloc/BlocLigueLeMeilleur';
import LoadingCarte from "../carte/LoadingCarte";

// Icons
import ligue from '../../assets/icon/cup.png'
import nationality from '../../assets/icon/nationality.png'

// -----------------------
// 1) QUERY CLIENT
// -----------------------
const queryClient = new QueryClient()


// -----------------------
// 2) QUERY CLIENT PROVIDER
// -----------------------
export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Club/>
        </QueryClientProvider>
    )
}

// -----------------------
// 3) CLUB COMPONENT
// -----------------------
function Club() {
    const league_id = window.location.pathname.slice(-1);
    // -----------------------------------------------------------------------
    // 3-1) USE STATE / USE EFFECT : WIDTH RESPONSIVE FOR GRAPH WaffleChart, TreeMapChart
    // -----------------------------------------------------------------------
    const [width, setWidth] = useState(null);
    useEffect(() => {
      function handleResize() {
        const xl2 = 1536;
        const xl = 1280;
        const lg = 1024;
        if (window.innerWidth < lg ) {
            setWidth(500);
        } else if (window.innerWidth < xl) {
            setWidth(500);
        } else if (window.innerWidth < xl2) {
            setWidth(600);
        } else 
        {
            setWidth(600);
        }
      }
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
      }, []);
    
    // ---------------------------------------------
    // 3-2) USE QUERIES : FETCHING DATA FROM API
    // ---------------------------------------------
    const resultQueries = useQueries(
        [
            { queryKey: ['clubs',1], queryFn: () => fetch(LEAGUES.DATA+'/'+league_id).then(res => res.json())},
            { queryKey: ['allTimeBestClub',2], queryFn: () => fetch(CLUBS.ALL_TIME_BEST+'?league_id='+league_id).then(res => res.json())},
            { queryKey: ['allTimeBestStriker',3], queryFn: () => fetch(PLAYERS.ALL_TIME_BEST_STRIKER+'?league_id='+league_id).then(res => res.json())},
            { queryKey: ['allTimeBestPlaymaker',4], queryFn: () => fetch(PLAYERS.ALL_TIME_BEST_PLAYMAKER+'?league_id='+league_id).then(res => res.json())},
            { queryKey: ['allTimeBestGoalkeeper',5], queryFn: () => fetch(PLAYERS.ALL_TIME_BEST_GOALKEEPER+'?league_id='+league_id).then(res => res.json())},
            { queryKey: ['bestClubySeason',6], queryFn: () => fetch(CLUBS.BEST_BY_SEASON+'?league_id='+league_id).then(res => res.json())},
            { queryKey: ['nationalities', 7], queryFn: () => fetch(LEAGUES.NATIONALITIES+'?league_id='+league_id).then(res => res.json())}
        ]
    )
    
    // ---------------------------------------------
    // 3-3) LOADING / ERROR
    // ---------------------------------------------
    if (resultQueries[0].isLoading || 
        resultQueries[1].isLoading || 
        resultQueries[2].isLoading ||
        resultQueries[3].isLoading ||
        resultQueries[4].isLoading ||
        resultQueries[5].isLoading ||
        resultQueries[6].isLoading) return (
        <div className="lg:h-screen md:h-full sm:h-full sm:ml-64 flex flex-col justify-between border-2 border-eerieBlack pt-3 pb-3">
                <LoadingCarte/>
        </div>
    )

    if (resultQueries[0].error ||
        resultQueries[1].error ||
        resultQueries[2].error ||
        resultQueries[3].error ||
        resultQueries[4].error || 
        resultQueries[5].error ||
        resultQueries[6].error) 
        return 'An error has occured '

    // ---------------------------------------------
    // 3-4) SUCCESS
    // ---------------------------------------------

    // (1) DATA : DATA FROM API
    const league = resultQueries[0].data
    const clubs = resultQueries[0].data.clubs
    const allTimeBestClub = resultQueries[1].data[0]
    const allTimeBestStriker = resultQueries[2].data[0]
    const allTimeBestPlaymaker = resultQueries[3].data[0]
    const allTimeBestGoalkeeper = resultQueries[4].data[0]
    const bestClubySeason = resultQueries[5].data
    const nationalities = resultQueries[6].data

    // (2) DATA : DATA FOR BESTS
    const BESTS = [
        {title:"Meilleur Club", key:allTimeBestClub.clubId, img_url:CLUBS.IMG +"/" + allTimeBestClub.clubName, data_name:allTimeBestClub.clubName, data_value1:allTimeBestClub.rankAverage + " ème", data_value2:allTimeBestClub.nbWin + " x champs"},
        {title:"Meilleur Buteur", key:allTimeBestStriker.playerId, img_url:PLAYERS.IMG +"/" + allTimeBestStriker.playerId, data_name:allTimeBestStriker.playerName, data_value1:allTimeBestStriker.totalGoals + " buts", data_value2:allTimeBestStriker.totalMatches + " matchs"},
        {title:"Meilleur Passeur", key:(allTimeBestPlaymaker.playerId)*99, img_url:PLAYERS.IMG +"/" + allTimeBestPlaymaker.playerId, data_name:allTimeBestPlaymaker.playerName, data_value1:allTimeBestPlaymaker.totalAssists + " passes décisives", data_value2:allTimeBestPlaymaker.totalMatches + " matchs"},
        {title:"Meilleur Gardien", key:allTimeBestGoalkeeper.playerId, img_url:PLAYERS.IMG +"/" + allTimeBestGoalkeeper.playerId, data_name:allTimeBestGoalkeeper.playerName, data_value1:allTimeBestGoalkeeper.totalGoalsAgainst + " clean sheets", data_value2:allTimeBestGoalkeeper.totalMatches + " matchs"},
    ]
    
    // (3) DATA : DATA FOR GRAPH WaffleChart, TreeMapChart
    const BEST_CLUBS_BY_SEASON = getBestClubBySeason(bestClubySeason)
    const NATIONALITIES = getNationalities(nationalities)

    // ---------------------------------------------
    // 4) RETURN
    // ---------------------------------------------
    const isDisabled = true

    return (
        <div className="lg:h-screen md:h-full sm:h-full xl:ml-64 flex flex-col justify-between border-2 border-eerieBlack">
            <div className="lg:flex lg:flex-row sm:max-md:flex-col pt-3">
                <div className="basis-2/6 w-full pr-1 mb-5">
                    <LigueCarte key={league.id} league={league} leagues_img_url={LEAGUES.IMG} isDisabled={isDisabled}/>
                </div>    
                <div className="basis-4/6 w-full pr-1 mb-5">
                    <BlocLigueLeMeilleur>
                        {BESTS.map(best => (
                            <LigueLeMeilleur title={best.title} key={best.key}  img_url={best.img_url} data_name={best.data_name} data_value1 = {best.data_value1} data_value2= {best.data_value2}/>
                        ))}
                    </BlocLigueLeMeilleur>
                </div>    
            </div>
            <div className="lg:flex lg:flex-row xl:max-2xl:flex-col" >
                <div className="flex basis-1/2 w-full ml-1 mr-1 mb-1">
                    <BlocContent>
                        <div>
                            <div className='flex justify-center text-white pb-3 pt-3 max-[1023px]:hidden'>
                                <img className="w-12 h-12 mr-3" src={ligue} alt="ligue" />
                                <h3 className="font-title text-lg"> 
                                    Champions de <strong>{league.name}</strong> <br/> (2002 ~ 2022)
                                </h3>
                            </div>
                            <div className="2xl:w-1/2 xl:w-[40rem] lg:w-[30rem] md:w-[30rem] sm:w-0 max-[767px]:w-0 h-72">
                                {width && <WaffleChart width={width} data={BEST_CLUBS_BY_SEASON}/>}
                            </div> 
                        </div>   
                    </BlocContent>
                </div>
                <div className="basis-1/2 w-full ml-1 mr-1">
                    <BlocContent>
                        <div>
                            <div className='flex justify-center text-white pb-3 pt-3 max-[1023px]:hidden'>
                                <img className="w-12 h-12 mr-3" src={nationality} alt="nationalitiy"/>
                                <h3 className='font-title text-lg'> 
                                    Nationalités des joueurs <br/> en <strong>{league.name}</strong> (2002 ~ 2022)
                                </h3>
                            </div>
                            <div className="2xl:w-1/2 xl:w-[40rem] lg:w-[30rem] md:w-[30rem] sm:w-0 max-[767px]:w-0 h-72">
                                {width && <TreeMapChart width={width} data={NATIONALITIES}/>}
                            </div> 
                        </div>   
                    </BlocContent>
                </div>
            </div>
            <BlocTitre text="Cliquez sur le club que vous voulez voir ci-dessous"/>
            <BlocClubCarte>
                {clubs.map(club => (
                    <ClubCarte key={club.id} id={club.id} name={club.name} clubs_img_url={CLUBS.IMG}/>
                ))}
            </BlocClubCarte>
        </div>
    )
}