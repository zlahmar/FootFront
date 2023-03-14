import { QueryClient, QueryClientProvider,  useQueries } from "react-query"
import LEAGUES from "../../data/Constants"
import LigueCarte from "../carte/LigueCarte";
import BlocCarte from "../bloc/BlocCarte";
import BlocTitre from "../bloc/BlocTitre";
import BlocContent from "../bloc/BlocContent";
import LoadingCarte from "../carte/LoadingCarte";

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

function Ligue() {
    const resultQueries = useQueries(
        [
            { queryKey: ['rankingsLeague',1], queryFn: fetchRankingsLeague },
            { queryKey: ['leagues',2], queryFn: fetchLeagues },
        ]
    )

    console.log("La Liga Data : ",resultQueries[0].data.filter(element => element.league.name === "La Liga"))
    console.log("Ligue 1 Data : ",resultQueries[0].data.filter(element => element.league.name === "Ligue 1"))
    console.log("Premier League Data : ",resultQueries[0].data.filter(element => element.league.name === "Premier League"))
    console.log("Serie A Data : ",resultQueries[0].data.filter(element => element.league.name === "Serie A"))
    console.log("Bundes Liga Data : ",resultQueries[0].data.filter(element => element.league.name === "Bundes Liga"))


    if (resultQueries[0].isLoading || resultQueries[1].isLoading) return (
        <div className="bg-gunMetal flex flex-col justify-center lg:w-10/12 md:w-11/12 sm:w-11/12">
            <BlocCarte>
                    <LoadingCarte/>
            </BlocCarte>
        </div>
    )

    if (resultQueries[0].error ||resultQueries[1].error) return 'An error has occured '

    return (
        <div className="h-full w-screen flex flex-col justify-between lg:w-10/12 md:w-11/12 sm:w-11/12">
            <BlocTitre className="mb-5">
                Ligue (2002 ~ 2022) : 20 ans de football
            </BlocTitre>


            <div className="flex mb-5 h-auto">
                <BlocContent>
                    {resultQueries[0].data.map(ranking => (
                        <div key={ranking.id} className="text-white">
                            <p>{ranking.id}</p>
                        </div>))
                    }
                </BlocContent>
                <BlocContent>
                    <LoadingCarte/>
                </BlocContent>
            </div>
            <h2 className="font-content text-white mb-5">Cliquez une ligue que vous voulez voir</h2>
            <BlocCarte>
                {resultQueries[1].data.map(league => (
                    <LigueCarte key={league.id} league={league} leagues_img_url={LEAGUES.IMG} />
                ))}       
            </BlocCarte>
        </div>
        
    )
}
