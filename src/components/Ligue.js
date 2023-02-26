import { QueryClient, QueryClientProvider, useQuery } from "react-query"

const queryClient = new QueryClient()

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Ligue/>
        </QueryClientProvider>
    )
}

function Ligue() {
    const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('http://146.59.151.45:7777/api/leagues').then(res =>
        res.json()
        )
    )
    if (isLoading) return "Loading..."

    if (error) return 'An error has occured : ' + error.message

    return (
        <div className="bg-aias h-screen lg:w-10/12 md:w-11/12 sm:w-11/12 flex flex-col text-center justify-center px-1 ">
            <div>Ligue</div>
            <div className=" h-4/5  ">
                <div className="w-full h-full ">
                        {data.map(data => (
                            <li key={data.id}>{data.id} {data.name}</li>
                        ))}
                </div>
            </div>
        </div>
    )
}
