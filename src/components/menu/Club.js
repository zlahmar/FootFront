// CSS
import '../../styles/index.css'

// React
import { QueryClient, QueryClientProvider,  useQueries } from "react-query"

// API / DATA
import {CLUBS, PLAYERS} from "../../data/Api"
import { getIdFromUrl } from '../../data/Arrays';
import ClubCarte from '../carte/club/ClubCarte';

// Components
import LoadingCarte from "../carte/LoadingCarte";
import LeMeilleur from '../carte/LeMeilleur';
import BlocLeMeilleur from '../bloc/BlocLeMeilleur';
import BlocContent from "../bloc/BlocContent";
import BlocTitre from '../bloc/BlocTitre';
import BlocJoueurCarte from '../bloc/BlocJoueurCarte';
import BlocTitreGraphe from '../bloc/BlocTitreGraphe';
import JoueurCarte from '../carte/joueur/JoueurCarte';
import JoueurGardienCarte from '../carte/joueur/JoueurGardienCarte';

// Graphique
import LineChart from '../graphique/LineChart';
import NetworkChart from '../graphique/NetworkChart';

// MUI
import MuiTabs from "../mui_component/MuiTabs";

// Icons
import champion from '../../assets/icon/champion.png'
import best_player from '../../assets/icon/best_player.png'

// Utility
import { getBestData } from '../utility/Utility';

// Array
import { getClubRankingForSeasons } from '../../data/Arrays';

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
    const club_id = getIdFromUrl("clubs");

    // ---------------------------------------------
    // 3-1) USE QUERIES : FETCHING DATA FROM API
    // ---------------------------------------------
    const resultQueries = useQueries(
        [
            { queryKey: ['club',1], queryFn: () => fetch(CLUBS.DATA+'/'+club_id).then(res => res.json())},
            { queryKey: ['bestTop10Strikers',2], queryFn: () => fetch(PLAYERS.BEST_TOP_10_STRIKERS+'?club_id='+club_id).then(res => res.json())},
            { queryKey: ['bestTop10Playmakers',3], queryFn: () => fetch(PLAYERS.BEST_TOP_10_PLAYMAKERS+'?club_id='+club_id).then(res => res.json())},
            { queryKey: ['bestTop10Goalkeepers',4], queryFn: () => fetch(PLAYERS.BEST_TOP_10_GOALKEEPERS+'?club_id='+club_id).then(res => res.json())},
            { queryKey: ['club_stats',5], queryFn: () => fetch(CLUBS.STATS+'?club_id='+club_id).then(res => res.json())},
            { queryKey: ['club_all_players', 6], queryFn: () => fetch(PLAYERS.ALL_PLAYERS_IN_CLUB+'?club_id='+club_id).then(res => res.json())},
            { queryKey: ['club_all_goalkeepers', 7], queryFn: () => fetch(PLAYERS.ALL_GK_PLAYERS_IN_CLUB+'?club_id='+club_id).then(res => res.json())},
        ]
    )

    // ---------------------------------------------
    // 3-2) LOADING / ERROR
    // ---------------------------------------------
    if (resultQueries.some((query) => query.isLoading)) {
        return (
          <div className="lg:h-screen md:h-full sm:h-full sm:ml-64 flex flex-col justify-between border-2 border-eerieBlack pt-3 pb-3">
            <LoadingCarte />
          </div>
        );
    }
      
      if (resultQueries.some((query) => query.error)) {
        return 'An error has occurred';
    }

    // ---------------------------------------------
    // 3-3) SUCCESS
    // --------------------------------------------- 

    // (1) DATA : DATA FROM API
    const club = resultQueries[0].data;
    const bestTop10Strikers = resultQueries[1].data;
    const bestTop10Playmakers = resultQueries[2].data;
    const bestTop10Goalkeepers = resultQueries[3].data;
    const club_stats = resultQueries[4].data;
    const club_all_players = resultQueries[5].data;
    const club_all_goalkeepers = resultQueries[6].data;

    // (2) DATA : DATA FOR BESTS & RANKING FOR SEASONS
    const BESTS = [
        getBestData("Le Meilleur Buteur", bestTop10Strikers[0].playerId, PLAYERS.IMG+"/"+bestTop10Strikers[0].playerId, bestTop10Strikers[0].playerName, bestTop10Strikers[0].allGoals + " buts", bestTop10Strikers[0].allNbGames+ " matchs"), 
        getBestData("Le Meilleur Passeur", (bestTop10Playmakers[0].playerId)*99, PLAYERS.IMG+"/"+bestTop10Playmakers[0].playerId, bestTop10Playmakers[0].playerName, bestTop10Playmakers[0].allAssists + " passes", bestTop10Playmakers[0].allNbGames+ " matchs"),
        getBestData("Le Meilleur Gardien", bestTop10Goalkeepers[0].playerId, PLAYERS.IMG+"/"+bestTop10Goalkeepers[0].playerId, bestTop10Goalkeepers[0].playerName, bestTop10Goalkeepers[0].allGas + " buts encaissés", bestTop10Goalkeepers[0].allNbGames+ " matchs")
    ]

    const RANKING_FOR_SEASONS = getClubRankingForSeasons(club_stats, "2002-2003", 20)

    return (
            <div className="pb-3 flex flex-col">
                <div className="lg:flex lg:flex-row sm:max-md:flex-col pt-5">
                    <div className="basis-2/6 w-full pr-1 mb-5">
                        <ClubCarte key={club.id} club={club} clubs_img={CLUBS.IMG} isClickDisabled={true}/>
                    </div>  
                    <div className="basis-4/6 w-full pr-1 mb-5">
                        <BlocLeMeilleur>
                            {BESTS.map(best => ( 
                                <LeMeilleur title={best.title} key={best.key}  img_url={best.img_url} data_name={best.data_name} data_value1 = {best.data_value1} data_value2= {best.data_value2}/>
                            ))}
                        </BlocLeMeilleur>
                    </div>   
                </div>
                <BlocContent>
                    <MuiTabs>
                        <div className="2xl:w-[75rem] xl:w-[70rem] lg:w-[63rem] md:w-0 sm:w-0 max-[767px]:w-0 h-96 flex flex-col justify-center">
                            <BlocTitreGraphe img={[champion]} title={`Classement en ligue du <strong>${club.league.name}</strong> (2002 ~ 2022)`}/>
                            <LineChart club={RANKING_FOR_SEASONS}/>
                        </div>
                        <div  className="2xl:w-[75rem] xl:w-[70rem] lg:w-[63rem] md:w-0 sm:w-0 max-[767px]:w-0 h-96 flex flex-col justify-center">
                            <BlocTitreGraphe img={[best_player]} title={`Les 5 meilleurs <strong>buteurs</strong>, <strong>passeurs</strong> et <strong>gardiens</strong> dans ${club.name}`}/>
                            <NetworkChart club={club} 
                            club_img_url={CLUBS.IMG} 
                            best_top_10_strikers={bestTop10Strikers} 
                            best_top_10_playmakers={bestTop10Playmakers} 
                            best_top_10_goalkeepers={bestTop10Goalkeepers}
                            />
                        </div>
                    </MuiTabs>    
                </BlocContent> 
                <BlocTitre title="Cliquez sur le joueur que vous voulez voir ci-dessous"/>
                <BlocJoueurCarte>
                    {club_all_goalkeepers.map(gk_player => (
                        <JoueurGardienCarte key={gk_player.id} gk_player={gk_player}/>
                    ))}
                    {club_all_players.map(player => (
                        <JoueurCarte key={player.id} player={player}/>
                    ))}
                </BlocJoueurCarte>
            </div>
            )
}

