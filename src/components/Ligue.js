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
        <div className="h-screen lg:w-10/12 md:w-1/12 sm:w-1/12 bg-tiffanyBlue items-center">
            <div className="h-full flex flex-row flex-wrap justify-center border-solid border-4 h-4/5">
                <div className="basis-1/3 text-center  border-dotted border-2">01</div>
                <div className="basis-1/3 text-center  border-dotted border-2">02</div>
                <div className="basis-1/3 text-center  border-dotted border-2">03</div>  
                <div className="basis-1/3 text-center  border-dotted border-2">04</div>                
                <div className="basis-1/3 text-center  border-dotted border-2">05</div>                
            </div>
        </div>
        //  <div className="bg-aias h-screen lg:w-10/12 md:w-11/12 sm:w-11/12 flex flex-col text-center justify-center px-1 ">
        //      <div>Ligue</div>
        //      <div className=" h-4/5  ">
        //          <div className="w-full h-full ">
        //                  {data.map(league => (
        //                      <div>
        //                          <div>
        //                              <img src={leagues_img_url +"/" + league.name}></img>
        //                          </div>
        //                          <div>
        //                              <p key={league.id}>{league.id} {league.name}
        //                              </p>
        //                          </div>
        //                      </div>
        //                  ))}
        //          </div>
        //      </div>
        //  </div>
    )
}
