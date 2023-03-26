import '../../styles/index.css'

import { QueryClient, QueryClientProvider,  useQueries } from "react-query"
import LEAGUES from "../../data/Api"
import LEAGUE from "../../data/Constants";
import { getLeagueArrayRankByYear, getLeagueArrayTotalData } from '../../data/Arrays';
import LigueCarte from "../carte/LigueCarte";
import BlocCarte from "../bloc/BlocCarte";
import BlocTitre from "../bloc/BlocTitre";
import BlocContent from "../bloc/BlocContent";
import LoadingCarte from "../carte/LoadingCarte";
import BumpChart from "../graphique/BumpChart";
import BarGroupedChart from '../graphique/BarGroupedChart';
import MuiTabs from "../mui_component/MuiTabs";
import cup from '../../assets/icon/cup.png'
import goal from '../../assets/icon/goal.png'


const queryClient = new QueryClient()

// -----------------------
// FETCHING DATA FROM API
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
// / Fetching data from API
// -----------------------

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Ligue/>
        </QueryClientProvider>
    )
}

function Ligue (){
    const resultQueries = useQueries(
        [
            { queryKey: ['rankingsLeague',1], queryFn: fetchRankingsLeague},
            { queryKey: ['leagues',2], queryFn: fetchLeagues},
            { queryKey: ['totalLeague',3], queryFn: fetchTotalLeague},
        ]
    )

    if (resultQueries[0].isLoading || resultQueries[1].isLoading || resultQueries[2].isLoading) return (
        <div className="lg:h-screen md:h-full sm:h-full sm:ml-64 flex flex-col justify-between border-2 border-eerieBlack">
            <BlocCarte>
                    <LoadingCarte/>
            </BlocCarte>
        </div>
    )

    if (resultQueries[0].error ||resultQueries[1].error ||resultQueries[2].error) return 'An error has occured '

    const UEFA_LEAGUES_RANKING = [
        {id : LEAGUE.FRANCE, data : getLeagueArrayRankByYear(resultQueries[0].data, LEAGUE.FRANCE)},
        {id : LEAGUE.ENGLAND, data : getLeagueArrayRankByYear(resultQueries[0].data, LEAGUE.ENGLAND)},
        {id : LEAGUE.SPAIN, data : getLeagueArrayRankByYear(resultQueries[0].data, LEAGUE.SPAIN)},
        {id : LEAGUE.ITALY, data : getLeagueArrayRankByYear(resultQueries[0].data, LEAGUE.ITALY)},
        {id : LEAGUE.GERMANY, data : getLeagueArrayRankByYear(resultQueries[0].data, LEAGUE.GERMANY)},
    ]

    const LEAGUES_TOTAL_DATA = getLeagueArrayTotalData(resultQueries[2].data)
    
    return (    
            <div className="lg:h-screen md:h-full sm:h-full sm:ml-64 flex flex-col justify-between border-2 border-eerieBlack">
                <BlocTitre>
                    <p className="font-title text-2xl">Ligue (2002 ~ 2022) : 20 ans de football</p>
                </BlocTitre>
                <div className="flex h-full">
                    <BlocContent>
                        <MuiTabs>
                            <div className="2xl:w-[75rem] xl:w-[55rem] lg:w-[40rem] md:w-0 sm:w-0 max-[767px]:w-0 h-96 flex flex-col justify-center">
                                <h3 className='flex items-center text-white pb-3 max-[1023px]:hidden'> 
                                    <img className="w-7 h-7 mr-3" src={cup} />
                                    UEFA Coefficients des pays (2002 ~ 2022)
                                </h3>
                                <BumpChart data={UEFA_LEAGUES_RANKING} />
                            </div>
                            <div  className="2xl:w-[75rem] xl:w-[55rem] lg:w-[40rem] md:w-0 sm:w-0 max-[767px]:w-0 h-96 flex flex-col justify-center">
                                <h3 className='flex items-center text-white pb-2 max-[1023px]:hidden'> 
                                    <img className="w-7 h-7 mr-3" src={goal} />
                                    Goals & Assists (2002 ~ 2022)
                                </h3>
                                <BarGroupedChart data={LEAGUES_TOTAL_DATA}/>
                            </div>
                            <div  className="2xl:w-[75rem] xl:w-[55rem] lg:w-[40rem] md:w-0 sm:w-0 max-[767px]:w-0 h-96 flex flex-col justify-center">
                                TEST 3 
                            </div>
                        </MuiTabs>
                    </BlocContent>
                </div>
                <BlocTitre>
                    <p className="font-title text-white mb-3 text-xl">Cliquez une ligue que vous voulez voir</p>
                </BlocTitre>
                <div className="h-full w-full">
                    <BlocCarte>
                        {resultQueries[1].data.map(league => (
                            <LigueCarte key={league.id} league={league} leagues_img_url={LEAGUES.IMG} />
                        ))}       
                    </BlocCarte>
                </div> 
            </div>        
    )
}
