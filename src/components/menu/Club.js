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

// Graphique
import LineChart from '../graphique/LineChart';
import NetworkChart from '../graphique/NetworkChart';

// MUI
import MuiTabs from "../mui_component/MuiTabs";

// Icons
import champion from '../../assets/icon/champion.png'
import best_player from '../../assets/icon/best_player.png'

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

    return (
            <div className="pb-3 xl:ml-64 flex flex-col border-2 border-eerieBlack">
                <div className="lg:flex lg:flex-row sm:max-md:flex-col pt-3">
                    <div className="basis-2/6 w-full pr-1 mb-5">
                        <ClubCarte key={club.id} club={club} clubs_img={CLUBS.IMG} isClickDisabled={true}/>
                    </div>  
                    <div className="basis-4/6 w-full pr-1 mb-5">
                        <BlocLeMeilleur>
                            {/* {BESTS.map(best => ( */}
                                <LeMeilleur title={"Meilleur Buteur"} key={"1"}  img_url={""} data_name={"TEST"} data_value1 = {"TEST"} data_value2= {"TEST"}/>
                                <LeMeilleur title={"Meilleur Passeur"} key={"2"}  img_url={""} data_name={"TEST"} data_value1 = {"TEST"} data_value2= {"TEST"}/>
                                <LeMeilleur title={"Meilleur Gardien"} key={"3"}  img_url={""} data_name={"TEST"} data_value1 = {"TEST"} data_value2= {"TEST"}/>
                            {/* ))}*/}
                        </BlocLeMeilleur>
                    </div>   
                </div>
                <BlocContent>
                    <MuiTabs>
                        <div className="2xl:w-[75rem] xl:w-[70rem] lg:w-[63rem] md:w-0 sm:w-0 max-[767px]:w-0 h-96 flex flex-col justify-center">
                            <BlocTitreGraphe img={[champion]} title={"Classement en ligue du <strong>[nom du club]</strong> (2002 ~ 2022)"}/>
                            <LineChart/>
                        </div>
                        <div  className="2xl:w-[75rem] xl:w-[70rem] lg:w-[63rem] md:w-0 sm:w-0 max-[767px]:w-0 h-96 flex flex-col justify-center">
                            <BlocTitreGraphe img={[best_player]} title={"Network Chart example"}/>
                            <NetworkChart/>
                        </div>
                    </MuiTabs>    
                </BlocContent> 
                <BlocTitre title="Cliquez sur le joueur que vous voulez voir ci-dessous"/>
                <BlocJoueurCarte>
                    <JoueurCarte/>
                    <JoueurCarte/>
                    <JoueurCarte/>
                    <JoueurCarte/>
                    <JoueurCarte/>
                    <JoueurCarte/>
                    <JoueurCarte/>
                    <JoueurCarte/>
                    <JoueurCarte/>
                    <JoueurCarte/>
                    <JoueurCarte/>
                    <JoueurCarte/>
                    <JoueurCarte/>
                    <JoueurCarte/>
                    <JoueurCarte/>
                    <JoueurCarte/>
                    <JoueurCarte/>
                    <JoueurCarte/>
                    <JoueurCarte/>
                    <JoueurCarte/>
                </BlocJoueurCarte>
            </div>
            )
}

