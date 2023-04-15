// CSS
import '../../styles/index.css'

// React
import React from 'react';
import { QueryClient, QueryClientProvider,  useQueries } from "react-query"

// API / DATA
import {LEAGUES,CLUBS, PLAYERS} from "../../data/Api"

// MUI
import MuiTabs from "../mui_component/MuiTabs";

// Components
import ClubCarte from "../carte/ClubCarte";
import BlocClubCarte from '../bloc/BlocClubCarte';
import BlocTitre from '../bloc/BlocTitre';
import BlocContent from '../bloc/BlocContent';
import LoadingCarte from "../carte/LoadingCarte";

// -----------------------
// 1) QUERY CLIENT
// -----------------------
const queryClient = new QueryClient()


// -----------------------
// 3) QUERY CLIENT PROVIDER
// -----------------------
export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Club/>
        </QueryClientProvider>
    )
}

// -----------------------
// 4) LIGUE COMPONENT
// -----------------------
function Club() {
    const league_id = window.location.pathname.slice(-1);
    // ---------------------------------------------
    // 4-1) USE QUERIES : FETCHING DATA FROM API
    // ---------------------------------------------
    const resultQueries = useQueries(
        [
            { queryKey: ['clubs',1], queryFn: () => fetch(LEAGUES.DATA+'/'+league_id).then(res => res.json())},
            { queryKey: ['allTimeBestClub',2], queryFn: () => fetch(CLUBS.ALL_TIME_BEST+'?league_id='+league_id)},
            { queryKey: ['allTimeBestStriker',3], queryFn: () => fetch(PLAYERS.ALL_TIME_BEST_STRIKER+'?league_id='+league_id)},
            { queryKey: ['allTimeBestPlaymaker',4], queryFn: () => fetch(PLAYERS.ALL_TIME_BEST_PLAYMAKER+'?league_id='+league_id)},
            { queryKey: ['allTimeBestGoalkeeper',5], queryFn: () => fetch(PLAYERS.ALL_TIME_BEST_GOALKEEPER+'?league_id='+league_id)},
        ]
    )
    
    // ---------------------------------------------
    // 4-2) LOADING / ERROR
    // ---------------------------------------------
    if (resultQueries[0].isLoading || 
        resultQueries[1].isLoading || 
        resultQueries[2].isLoading ||
        resultQueries[3].isLoading ||
        resultQueries[4].isLoading ) return (
        <div className="lg:h-screen md:h-full sm:h-full sm:ml-64 flex flex-col justify-between border-2 border-eerieBlack pt-3 pb-3">
                <LoadingCarte/>
        </div>
    )

    if (resultQueries[0].error ||
        resultQueries[1].error ||
        resultQueries[2].error ||
        resultQueries[3].error ||
        resultQueries[4].error ) 
        return 'An error has occured '

    // ---------------------------------------------
    // 4-3) SUCCESS
    // ---------------------------------------------

    // console.log("0 : ",resultQueries[0])
    // console.log("1 : ",resultQueries[1])
    // console.log("2 : ",resultQueries[2])
    // console.log("3 : ",resultQueries[3])
    // console.log("4 : ",resultQueries[4])

    // ---------------------------------------------
    // 5) RETURN
    // ---------------------------------------------
    return (
        <div className="lg:h-screen md:h-full sm:h-full sm:ml-64 flex flex-col justify-between border-2 border-eerieBlack">
            <div className="lg:flex lg:flex-row sm:max-md:flex-col">
                <div className="basis-2/6 w-full pr-1">
                    <ClubCarte className="h-32"/>
                    {/* <LigueCarte key={league.id} league={league} /> */}
                </div>    
                <div className="basis-4/6  w-full pr-1">
                    <ClubCarte/>
                </div>    
            </div>
            <div className="lg:flex lg:flex-row sm:max-md:flex-col" >
                <div className="basis-6/6 w-full pr-1">
                    <BlocContent>
                        <MuiTabs>
                            <div className="2xl:w-[50rem] xl:w-[40rem] lg:w-[25rem] md:w-0 sm:w-0 max-[767px]:w-0 h-48 flex flex-col justify-center">
                                    <h3 className='flex items-center text-white pb-3 max-[1023px]:hidden'> 
                                        {/* <img className="w-12 h-12 mr-3"/> */}
                                        1
                                    </h3>
                            </div>
                            <div className="2xl:w-[50rem] xl:w-[40rem] lg:w-[25rem] md:w-0 sm:w-0 max-[767px]:w-0 h-48 flex flex-col justify-center">
                                    <h3 className='flex items-center text-white pb-3 max-[1023px]:hidden'> 
                                        {/* <img className="w-12 h-12 mr-3"/> */}
                                        2
                                    </h3>
                            </div>
                            <div className="2xl:w-[50rem] xl:w-[40rem] lg:w-[25rem] md:w-0 sm:w-0 max-[767px]:w-0 h-48 flex flex-col justify-center">
                                    <h3 className='flex items-center text-white pb-3 max-[1023px]:hidden'> 
                                        {/* <img className="w-12 h-12 mr-3"/> */}
                                        3
                                    </h3>
                            </div>                                        
                        </MuiTabs>
                    </BlocContent>
                </div>
                <div className="basis-6/6 w-full pl-1">
                    <BlocContent>
                        <MuiTabs>
                            <div className="2xl:w-[50rem] xl:w-[40rem] lg:w-[25rem] md:w-0 sm:w-0 max-[767px]:w-0 h-48 flex flex-col justify-center">
                                    <h3 className='flex items-center text-white pb-3 max-[1023px]:hidden'> 
                                        {/* <img className="w-12 h-12 mr-3"/> */}
                                        1
                                    </h3>
                            </div>
                            <div className="2xl:w-[50rem] xl:w-[40rem] lg:w-[25rem] md:w-0 sm:w-0 max-[767px]:w-0 h-48 flex flex-col justify-center">
                                    <h3 className='flex items-center text-white pb-3 max-[1023px]:hidden'> 
                                        {/* <img className="w-12 h-12 mr-3"/> */}
                                        2
                                    </h3>
                            </div>
                            <div className="2xl:w-[50rem] xl:w-[40rem] lg:w-[25rem] md:w-0 sm:w-0 max-[767px]:w-0 h-48 flex flex-col justify-center">
                                    <h3 className='flex items-center text-white pb-3 max-[1023px]:hidden'> 
                                        {/* <img className="w-12 h-12 mr-3"/> */}
                                        3
                                    </h3>
                            </div>                                        
                        </MuiTabs>
                    </BlocContent>
                </div>
            </div>
            <BlocTitre text="Cliquez un club que vous voulez voir"/>
            <BlocClubCarte>
                {resultQueries[0].data.clubs.map(club => (
                    <ClubCarte key={club.id} name={club.name} clubs_img_url={CLUBS.IMG}/>
                ))}
            </BlocClubCarte>
        </div>
    )
}