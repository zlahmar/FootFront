// CSS
import '../../styles/index.css'

// React
import React, { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider,  useQueries } from "react-query"

// API / DATA
import {LEAGUES} from "../../data/Api"
import LEAGUE from "../../data/Constants";
import { getLeagueArrayRankByYear, getLeagueArrayTotalData, getLeagueArrayTotalCardsData } from '../../data/Arrays';

// Components
import LigueCarte from "../carte/LigueCarte";
import BlocLigueCarte from "../bloc/BlocLigueCarte";
import BlocTitre from "../bloc/BlocTitre";
import BlocContent from "../bloc/BlocContent";
import LoadingCarte from "../carte/LoadingCarte";

// Graphique
import BumpChart from "../graphique/BumpChart";
import BarGroupedChart from '../graphique/BarGroupedChart';
import CircleGroupedChart from '../graphique/CircleGroupedChart';

// MUI
import MuiTabs from "../mui_component/MuiTabs";

// Icons
import cup from '../../assets/icon/cup.png'
import goal from '../../assets/icon/goal.png'
import yellow_card from '../../assets/icon/yellow_card.png'
import red_card from '../../assets/icon/red_card.png'

// -----------------------
// 1) QUERY CLIENT
// -----------------------
const queryClient = new QueryClient()

// -----------------------
// 2) FETCHING DATA FROM API
// -----------------------
const fetchLeagues = async () => {
    const res = await fetch(LEAGUES.DATA)
    return res.json()
}

const fetchRankingsLeague = async () => {
    const res = await fetch(LEAGUES.RANKING)
    return res.json()
}

const fetchTotalLeague = async () => {
    const res = await fetch(LEAGUES.TOTAL)
    return res.json()
}

// -----------------------
// 3) QUERY CLIENT PROVIDER
// -----------------------
export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Ligue/>
        </QueryClientProvider>
    )
}

// -----------------------
// 4) LIGUE COMPONENT
// ----------------------- 
function Ligue (){
    // -----------------------------------------------------------------------
    // 4-1) USE STATE / USE EFFECT : WIDTH RESPONSIVE FOR GRAPH CircleGroupedChart
    // -----------------------------------------------------------------------
    const [width, setWidth] = useState(null);
    useEffect(() => {
      function handleResize() {
        const xl2 = 1536;
        const xl = 1280;
        const lg = 1024;
        if (window.innerWidth < lg ) {
            setWidth(null);
        } else if (window.innerWidth < xl) {
            setWidth(1100);
        } else if (window.innerWidth < xl2) {
            setWidth(1100);
        } else 
        {
            setWidth(1300);
        }
      }
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    // ---------------------------------------------
    // 4-2) USE QUERIES : FETCHING DATA FROM API
    // ---------------------------------------------
    const resultQueries = useQueries(
        [
            { queryKey: ['rankingsLeague',1], queryFn:  fetchRankingsLeague},
            { queryKey: ['leagues',2], queryFn: fetchLeagues},
            { queryKey: ['totalLeague',3], queryFn: fetchTotalLeague},
        ]
    )
    
    // ---------------------------------------------
    // 4-3) LOADING / ERROR
    // ---------------------------------------------
    if (resultQueries[0].isLoading || resultQueries[1].isLoading || resultQueries[2].isLoading) return (
        <div className="lg:h-screen md:h-full sm:h-full sm:ml-64 flex flex-col justify-between border-2 border-eerieBlack pt-3 pb-3">
                <LoadingCarte/>
        </div>
    )

    if (resultQueries[0].error ||resultQueries[1].error ||resultQueries[2].error) return 'An error has occured '

    // ---------------------------------------------
    // 4-4) SUCCESS
    // ---------------------------------------------

    // (1) DATA : UEFA LEAGUES_RANKING FOR GRAPH BumpChart
    const UEFA_LEAGUES_RANKING = [
        {id : LEAGUE.FRANCE, data : getLeagueArrayRankByYear(resultQueries[0].data, LEAGUE.FRANCE)},
        {id : LEAGUE.ENGLAND, data : getLeagueArrayRankByYear(resultQueries[0].data, LEAGUE.ENGLAND)},
        {id : LEAGUE.SPAIN, data : getLeagueArrayRankByYear(resultQueries[0].data, LEAGUE.SPAIN)},
        {id : LEAGUE.ITALY, data : getLeagueArrayRankByYear(resultQueries[0].data, LEAGUE.ITALY)},
        {id : LEAGUE.GERMANY, data : getLeagueArrayRankByYear(resultQueries[0].data, LEAGUE.GERMANY)},
    ]

    // (2) DATA : LEAGUES_TOTAL_DATA FOR GRAPH BarGroupedChart
    const LEAGUES_TOTAL_DATA = getLeagueArrayTotalData(resultQueries[2].data)

    // (3) DATA : LEAGUES_TOTAL_CARDS_DATA FOR GRAPH CircleGroupedChart
    const LEAGUES_TOTAL_CARDS_DATA = getLeagueArrayTotalCardsData(resultQueries[2].data)

    // ---------------------------------------------
    // 5) RETURN
    // ---------------------------------------------
    return (    
            <div className="lg:h-screen md:h-full sm:h-full xl:ml-64 flex flex-col justify-between border-2 border-eerieBlack">
                <BlocTitre text="Ligue (2002 ~ 2022) : 20 ans de football"/> 
                <BlocContent>
                    <MuiTabs>
                        <div className="2xl:w-[80rem] xl:w-[70rem] lg:w-[63rem] md:w-0 sm:w-0 max-[767px]:w-0 h-96 flex flex-col justify-center">
                            <h3 className='flex items-center text-white pb-3 max-[1023px]:hidden'> 
                                <img className="w-12 h-12 mr-3" src={cup} />
                                UEFA Coefficients des pays (2002 ~ 2022)
                            </h3>
                            <BumpChart data={UEFA_LEAGUES_RANKING} />
                        </div>
                        <div  className="2xl:w-[75rem] xl:w-[70rem] lg:w-[63rem] md:w-0 sm:w-0 max-[767px]:w-0 h-96 flex flex-col justify-center">
                            <h3 className='flex items-center text-white pb-2 max-[1023px]:hidden'> 
                                <img className="w-12 h-12 mr-3" src={goal} />
                                Goals & Assists (2002 ~ 2022)
                            </h3>
                            <BarGroupedChart data={LEAGUES_TOTAL_DATA}/>
                        </div>
                        <div className='2xl:w-[75rem] xl:w-[70rem] lg:w-[63rem] md:w-0 sm:w-0 max-[767px]:w-0 h-96 flex flex-col justify-center'>
                            <h3 className='flex items-center text-white pb-2 max-[1023px]:hidden'> 
                                <img className="w-10 h-10" src={yellow_card} />
                                <img className="w-10 h-10 mr-3" src={red_card} />
                                Yellow & Red Cards (2002 ~ 2022)
                            </h3>
                            {width && <CircleGroupedChart width={width} data={LEAGUES_TOTAL_CARDS_DATA}/>}
                        </div>
                    </MuiTabs>
                </BlocContent>
                <BlocTitre text="Cliquez une ligue que vous voulez voir"/>
                <BlocLigueCarte>
                    {resultQueries[1].data.map(league => (
                        <LigueCarte key={league.id} league={league} leagues_img_url={LEAGUES.IMG} />
                    ))}       
                </BlocLigueCarte>
            </div>        
    )
}
