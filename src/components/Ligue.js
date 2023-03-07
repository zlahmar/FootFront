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
    const leagues_api_url="http://146.59.151.45:7777/api/leagues"
    const leagues_img_url="http://146.59.151.45:7777/api/images/leagues"
    const { isLoading, error, data } = useQuery('repoData', () =>
    fetch(leagues_api_url).then(res =>
        res.json()
        )
    )
    if (isLoading) return "Loading..."

    if (error) return 'An error has occured : ' + error.message

    return (
        <div className="bg-gunMetal flex h-screen lg:w-10/12 md:w-11/12 sm:w-11/12 items-center justify-center">
            <div className="flex flex-row flex-wrap justify-center w-4/5 ">
                {data.map(league => (
                    <div className="basis-1/3 text-center pl-3 pb-3">        

                    <a
                    href={league.id}
                    className="block rounded-3xl border-4 border-white bg-gunMetal transition shadow hover:shadow-lg hover:shadow-tiffanyBlue"
                    >
                        <div className="flex items-start">
                            <img className="rounded-br-2xl rounded-tl-2xl" src={leagues_img_url +"/" + league.name} alt="" />
                        </div>

                        <div className="p-4 sm:p-6 lg:p-8">
                            <p className="text-lg font-bold text-white">{league.name}</p>

                            <p className="mt-1 font-mono text-xs text-white">{league.clubs.length} Clubs</p>
                        </div>
                    </a>



                        {/* <a
                        href="#"
                        className="relative block rounded-sm border-t-4 border-pink-600 p-4 shadow-xl sm:p-6 lg:p-8"
                        >
                        <div class="flex items-center gap-4">
                            <img className="rounded-lg" src={leagues_img_url +"/" + league.name} alt="" />
                            <h3 class="text-3xl font-bold sm:text-4xl">{league.name}</h3>
                        </div>
                        <p className="mt-4 font-medium text-gray-500">
                            {league.clubs.length} clubs
                        </p>
                        </a> */}



                        {/* <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img class="rounded-t-lg" src={leagues_img_url +"/" + league.name} alt="" />
                            </a>
                            <div class="p-5">
                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{league.name}</h5>
                                </a>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{league.id} {league.name}</p>
                                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </a>
                            </div>
                        </div> */}
                    </div>
                ))}       
            </div>
        </div>
    )
}
