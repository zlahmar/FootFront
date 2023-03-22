import '../../styles/index.css'

import { QueryClient, QueryClientProvider,  useQueries } from "react-query"
import LEAGUES from "../../data/Api"
import LEAGUE from "../../data/Constants";
import LigueCarte from "../carte/LigueCarte";
import BlocCarte from "../bloc/BlocCarte";
import BlocTitre from "../bloc/BlocTitre";
import BlocContent from "../bloc/BlocContent";
import LoadingCarte from "../carte/LoadingCarte";
import BumpChart from "../graphique/BumpChart";
import MuiTabs from "../mui_component/MuiTabs";

const queryClient = new QueryClient()

const fetchLeagues = async () => {
    const res = await fetch(LEAGUES.DATA)
    return res.json()
}

const fetchRankingsLeague = async () => {
    const res = await fetch(LEAGUES.RANKING)
    return res.json()
}

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
            { queryKey: ['rankingsLeague',1], queryFn: fetchRankingsLeague },
            { queryKey: ['leagues',2], queryFn: fetchLeagues },
        ]
    )

    if (resultQueries[0].isLoading || resultQueries[1].isLoading) return (
        <div className="bg-gunMetal flex flex-col justify-center lg:w-10/12 md:w-11/12 sm:w-11/12">
            <BlocCarte>
                    <LoadingCarte/>
            </BlocCarte>
        </div>
    )

    if (resultQueries[0].error ||resultQueries[1].error) return 'An error has occured '

    const getLeagueArrayRankByYear = (obj_array, league) => {
        let array = obj_array.map(value => value.league.name === league ? 
                    {x : value.year, y : value.rank} : null);
        array = array.filter(value => value !== null)
        return array
    }

    const UEFA_LEAGUES_RANKING = [
        {id : LEAGUE.FRANCE, data : getLeagueArrayRankByYear(resultQueries[0].data, LEAGUE.FRANCE)},
        {id : LEAGUE.ENGLAND, data : getLeagueArrayRankByYear(resultQueries[0].data, LEAGUE.ENGLAND)},
        {id : LEAGUE.SPAIN, data : getLeagueArrayRankByYear(resultQueries[0].data, LEAGUE.SPAIN)},
        {id : LEAGUE.ITALY, data : getLeagueArrayRankByYear(resultQueries[0].data, LEAGUE.ITALY)},
        {id : LEAGUE.GERMANY, data : getLeagueArrayRankByYear(resultQueries[0].data, LEAGUE.GERMANY)},
    ]

    return (    
            <div className="lg:h-screen md:h-full sm:h-full sm:ml-64 flex flex-col justify-between border-2 border-eerieBlack">
                <BlocTitre>
                    <p className="font-title text-2xl">Ligue (2002 ~ 2022) : 20 ans de football</p>
                </BlocTitre>
                <div className="flex h-full">
                    <BlocContent>
                        <MuiTabs>
                            <div className="2xl:w-[80rem] xl:w-[60rem] lg:w-[40rem] md:w-0 sm:w-0 max-[767px]:w-0 h-96 flex flex-col justify-center">
                                <h3 className='text-white pb-2 md:hidden max-[767px]:hidden'> UEFA Coefficients des pays (2002 ~ 2022)</h3>
                                <BumpChart data={UEFA_LEAGUES_RANKING} />
                            </div>
                            <div  className="2xl:w-[80rem] xl:w-[60rem] lg:w-[40rem] md:w-0 sm:w-0 max-[767px]:w-0 h-96 flex flex-col justify-center">
                                TEST 2 
                            </div>
                            <div  className="2xl:w-[80rem] xl:w-[60rem] lg:w-[40rem] md:w-0 sm:w-0 max-[767px]:w-0 h-96 flex flex-col justify-center">
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
