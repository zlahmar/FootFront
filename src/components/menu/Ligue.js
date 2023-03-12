import { QueryClient, QueryClientProvider, useQuery } from "react-query"
import LEAGUES from "../../data/Constants"
import LigueCarte from "../carte/LigueCarte";
import BlocCarte from "../bloc/BlocCarte";
import BlocTitre from "../bloc/BlocTitre";
import BlocContent from "../bloc/BlocContent";
import LoadingCarte from "../carte/LoadingCarte";

const queryClient = new QueryClient()

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Ligue/>
        </QueryClientProvider>
    )
}

function Ligue() {
    const { isLoading, error, data } = useQuery('repoData', async () =>
    await fetch(LEAGUES.DATA).then(res =>
        res.json()
        )
    )
    if (isLoading) return (
        <div className="bg-gunMetal flex flex-col justify-center lg:w-10/12 md:w-11/12 sm:w-11/12">
            <BlocCarte>
                    <LoadingCarte/>
            </BlocCarte>
        </div>
    )

    if (error) return 'An error has occured : ' + error.message

    return (
        <div className="h-full w-screen flex flex-col justify-between lg:w-10/12 md:w-11/12 sm:w-11/12">
            <BlocTitre className="mb-5">
                Ligue (2002 ~ 2022) : 20 ans de football
            </BlocTitre>
            <div className="flex mb-5 h-auto">
                <BlocContent>
                    <LoadingCarte/>
                </BlocContent>
                <BlocContent>
                    <LoadingCarte/>
                </BlocContent>
            </div>
            <h2 className="font-content text-white mb-5">Cliquez une ligue que vous voulez voir</h2>
            <BlocCarte>
                {data.map(league => (
                    <LigueCarte key={league.id} league={league} leagues_img_url={LEAGUES.IMG} />
                ))}       
            </BlocCarte>
        </div>
        
    )
}
