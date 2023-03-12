import { QueryClient, QueryClientProvider, useQuery } from "react-query"
import LEAGUES from "../../data/Constants"
import LigueCarte from "../carte/LigueCarte";
import BlocCarte from "../bloc/BlocCarte";
import BlocTitre from "../bloc/BlocTitre";
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
        <div className="w-screen h-screen flex flex-col justify-between	 lg:w-10/12 md:w-11/12 sm:w-11/12">
            <BlocTitre>
                Ligue
            </BlocTitre>
            <BlocCarte>
                {data.map(league => (
                    <LigueCarte league={league} leagues_img_url={LEAGUES.IMG} />
                ))}       
            </BlocCarte>
        </div>
        
    )
}
