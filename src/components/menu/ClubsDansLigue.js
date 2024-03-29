// CSS
import '../../styles/index.css'

// React
import React, {useState, useEffect} from 'react';
import { QueryClient, QueryClientProvider,  useQueries } from "react-query"

// API / DATA
import {LEAGUES,CLUBS, PLAYERS} from "../../data/Api"
import {getIdFromUrl ,getBestClubBySeason, getNationalities, generateSeason } from '../../data/Arrays';

// Graphique
import WaffleChart from '../graphique/WaffleChart';
import TreeMapChart from '../graphique/TreeMapChart';

// Components
import LigueCarte from '../carte/ligue/LigueCarte';
import LeMeilleur from '../carte/LeMeilleur';
import ClubCarte from "../carte/club/ClubCarte";
import BlocClubCarte from '../bloc/BlocClubCarte';
import BlocTitreGraphe from '../bloc/BlocTitreGraphe';
import BlocContent from '../bloc/BlocContent';
import BlocLeMeilleur from '../bloc/BlocLeMeilleur';
import LoadingCarte from "../carte/LoadingCarte";
import {useWindowWidth,getBestData} from '../utility/Utility';
import { sortByName } from '../../data/Arrays';
import { START_SEASON, NUMBER_OF_SEASONS } from '../../data/Constants';

// Icons
import ligue from '../../assets/icon/cup.png'
import nationality from '../../assets/icon/nationality.png'

// MUI
import MuiSelectBox from '../mui_component/MuiSelectBox';

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
            <ClubsDansLigue/>
        </QueryClientProvider>
    )
}

// -----------------------
// 3) CLUBS COMPONENT
// -----------------------
function ClubsDansLigue() {
    const league_id = getIdFromUrl("ligues");
 
    let [season, setSeason] = useState([generateSeason(START_SEASON, NUMBER_OF_SEASONS)[NUMBER_OF_SEASONS-1]]);
    // -----------------------------------------------------------------------
    // 3-1) USE STATE / USE EFFECT : WIDTH RESPONSIVE FOR GRAPH WaffleChart, TreeMapChart
    // -----------------------------------------------------------------------
    const width = useWindowWidth();

    // ---------------------------------------------
    // 3-2) USE QUERIES : FETCHING DATA FROM API
    // ---------------------------------------------
    
    // (1) Fetching data from API (React-Queries)
    const resultQueries = useQueries(
        [
            { queryKey: ['clubs',1], queryFn: () => fetch(LEAGUES.DATA+'/'+league_id).then(res => res.json())},
            { queryKey: ['allTimeBestClub',2], queryFn: () => fetch(CLUBS.ALL_TIME_BEST+'?league_id='+league_id).then(res => res.json())},
            { queryKey: ['allTimeBestStriker',3], queryFn: () => fetch(PLAYERS.ALL_TIME_BEST_STRIKER+'?league_id='+league_id).then(res => res.json())},
            { queryKey: ['allTimeBestPlaymaker',4], queryFn: () => fetch(PLAYERS.ALL_TIME_BEST_PLAYMAKER+'?league_id='+league_id).then(res => res.json())},
            { queryKey: ['allTimeBestGoalkeeper',5], queryFn: () => fetch(PLAYERS.ALL_TIME_BEST_GOALKEEPER+'?league_id='+league_id).then(res => res.json())},
            { queryKey: ['bestClubySeason',6], queryFn: () => fetch(CLUBS.BEST_BY_SEASON+'?league_id='+league_id).then(res => res.json())},
            { queryKey: ['nationalities', 7], queryFn: () => fetch(LEAGUES.NATIONALITIES+'?league_id='+league_id+'&season='+season).then(res => res.json())}
        ]
    )
    
    // (2) Season change (MuiSelectBox)
    useEffect(() => {
        // This code will execute every time the season state changes
        // resultQueries[6] : nationalities
        resultQueries[6].refetch();
      }, [season]); // The effect depends on the season state
    
      const handleSeasonChange = (event) => {
        const insertedSeason = event.target.value;
        setSeason(insertedSeason);
        // The useEffect above will run after this function, and the new season value will be updated.
      };
    
    // ---------------------------------------------
    // 3-3) LOADING / ERROR
    // ---------------------------------------------
    if (resultQueries.some((query) => query.isLoading)) {
        return (
          <div className="h-screen flex flex-col justify-between border-2 border-eerieBlack pt-3 pb-3">
            <LoadingCarte />
          </div>
        );
    }
      
      if (resultQueries.some((query) => query.error)) {
        return 'An error has occurred';
    }

    // ---------------------------------------------
    // 3-4) SUCCESS
    // ---------------------------------------------
    
    // FIXME : Brentford(id=159), Salernitana(id=204) no data for stat_player (11/8/2023)
    const excludedClubIds = [159, 204];

    // (1) DATA : DATA FROM API
    const league = resultQueries[0].data

    // FIXME
    const clubs = resultQueries[0].data.clubs.filter(club => !excludedClubIds.includes(club.id));
    const allTimeBestClub = resultQueries[1].data[0]
    const allTimeBestStriker = resultQueries[2].data[0]
    const allTimeBestPlaymaker = resultQueries[3].data[0]
    const allTimeBestGoalkeeper = resultQueries[4].data[0]
    const bestClubySeason = resultQueries[5].data
    const nationalities = resultQueries[6].data

    // Sort clubs by name
    sortByName(clubs)

    // (2) DATA : DATA FOR BESTS
    const BESTS = [
        getBestData("Meilleur Club", allTimeBestClub.clubId, CLUBS.IMG +"/" + allTimeBestClub.clubName, allTimeBestClub.clubName, allTimeBestClub.nbVictory + " fois champions"),
        getBestData("Meilleur Buteur", allTimeBestStriker.playerId, PLAYERS.IMG +"/" + allTimeBestStriker.playerId, allTimeBestStriker.playerName, allTimeBestStriker.totalGoals + " buts", allTimeBestStriker.totalMatches + " matchs"),
        getBestData("Meilleur Passeur", (allTimeBestPlaymaker.playerId)*99, PLAYERS.IMG +"/" + allTimeBestPlaymaker.playerId, allTimeBestPlaymaker.playerName, allTimeBestPlaymaker.totalAssists + " passes", allTimeBestPlaymaker.totalMatches + " matchs"),
        getBestData("Meilleur Gardien", (allTimeBestGoalkeeper.playerId)*999, PLAYERS.IMG +"/" + allTimeBestGoalkeeper.playerId, allTimeBestGoalkeeper.playerName, allTimeBestGoalkeeper.totalGoalsAgainst + " cleansheets", allTimeBestGoalkeeper.totalMatches + " matchs"),
    ]
    
    // (3) DATA : DATA FOR GRAPH WaffleChart, TreeMapChart
    const BEST_CLUBS_BY_SEASON = getBestClubBySeason(bestClubySeason)
    const NATIONALITIES = getNationalities(nationalities)

    // ---------------------------------------------
    // 4) RETURN
    // ---------------------------------------------
    const isClickDisabled = true

    return (
            <div className="px-2 pb-3 flex flex-col justify-between">
                <div className="lg:flex lg:flex-row sm:max-md:flex-col pt-3">
                    <div className="basis-2/6 w-full pr-1 mb-5">
                        <LigueCarte key={league.id} league={league} leagues_img={LEAGUES.IMG} isClickDisabled={isClickDisabled}/>
                    </div>    
                    <div className="basis-4/6 w-full pr-1 mb-5">
                        <BlocLeMeilleur>
                            {BESTS.map(best => (
                                <LeMeilleur title={best.title} key={best.key}  img_url={best.img_url} data_name={best.data_name} data_value1 = {best.data_value1} data_value2= {best.data_value2}/>
                            ))}
                        </BlocLeMeilleur>
                    </div>    
                </div>
                <div className="lg:flex lg:flex-row xl:max-2xl:flex-col pb-5" >
                    <div className="flex basis-1/2 w-full ml-0 mr-3 xl:mb-0 lg:mb-0 md:mb-5">
                        <BlocContent>
                            <div>
                                <BlocTitreGraphe img={[ligue]} title={`Victoires de <strong>${league.name}</strong> <br/> (2002-2022)`}/>
                                <div className="2xl:w-1/2 xl:w-[40rem] lg:w-[30rem] md:w-[30rem] sm:w-0 max-[767px]:w-0 h-72">
                                    {width && <WaffleChart width={width} data={BEST_CLUBS_BY_SEASON}/>}
                                </div> 
                            </div>   
                        </BlocContent>
                    </div>
                    <div className="basis-1/2 w-full ml-0 mr-0">
                        <BlocContent>
                            <div>
                                <div className='flex justify-center'>
                                    <BlocTitreGraphe img={[nationality]} title={`Nationalités des joueurs <br/> dans <strong>${league.name}</strong> (${season})`}/>
                                    <MuiSelectBox label="Saississez une saison" array={generateSeason(START_SEASON, NUMBER_OF_SEASONS)} value={season} handleChange={handleSeasonChange}/>

                                </div>
           
                                <div className="2xl:w-1/2 xl:w-[40rem] lg:w-[30rem] md:w-[30rem] sm:w-0 max-[767px]:w-0 h-72">
                                    {width && <TreeMapChart width={width} data={NATIONALITIES}/>}
                                </div> 
                            </div>   
                        </BlocContent>
                    </div>
                </div>
                <BlocClubCarte>
                    {clubs.map(club => (
                        <ClubCarte key={club.id} club={club} clubs_img={CLUBS.IMG} isClickDisabled={false}/>
                    ))}
                </BlocClubCarte>
            </div>
            )
}