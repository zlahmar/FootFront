import { QueryClient, QueryClientProvider, useQuery } from "react-query"
import LEAGUES from "../data/Constants"
import Carte from "./Carte";
import BlocPrincipal from "./BlocPrincipal";

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
        <BlocPrincipal Children={
            <div className="flex flex-col items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-t-2 border-gray-900"></div>
                <p className="text-2xl font-title font-medium text-white">Loading...</p>
            </div>
        }>
        </BlocPrincipal>
    )

    if (error) return 'An error has occured : ' + error.message

    return (
        <div className="bg-gunMetal flex h-screen lg:w-10/12 md:w-11/12 sm:w-11/12 items-center justify-center">
            <div className="flex flex-row flex-wrap justify-center w-4/5 ">
                {data.map(league => (
                    <Carte league={league} leagues_img_url={LEAGUES.IMG} />
                ))}       
            </div>
        </div>
    )
}
