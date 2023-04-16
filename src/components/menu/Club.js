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
import LigueCarte from '../carte/LigueCarte';
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
            { queryKey: ['allTimeBestClub',2], queryFn: () => fetch(CLUBS.ALL_TIME_BEST+'?league_id='+league_id).then(res => res.json())},
            { queryKey: ['allTimeBestStriker',3], queryFn: () => fetch(PLAYERS.ALL_TIME_BEST_STRIKER+'?league_id='+league_id).then(res => res.json())},
            { queryKey: ['allTimeBestPlaymaker',4], queryFn: () => fetch(PLAYERS.ALL_TIME_BEST_PLAYMAKER+'?league_id='+league_id).then(res => res.json())},
            { queryKey: ['allTimeBestGoalkeeper',5], queryFn: () => fetch(PLAYERS.ALL_TIME_BEST_GOALKEEPER+'?league_id='+league_id).then(res => res.json())},
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
    const league = resultQueries[0].data
    const clubs = resultQueries[0].data.clubs
    const allTimeBestClub = resultQueries[1].data[0]
    const allTimeBestStriker = resultQueries[2].data[0]
    const allTimeBestPlaymaker = resultQueries[3].data[0]
    const allTimeBestGoalkeeper = resultQueries[4].data[0]
    // ---------------------------------------------
    // 5) RETURN
    // ---------------------------------------------
    const isDisabled = true
    console.log("allTimeBestStriker : ",allTimeBestStriker)

    console.log("allTimeBestPlaymaker : ",allTimeBestPlaymaker)

    return (
        <div className="lg:h-screen md:h-full sm:h-full sm:ml-64 flex flex-col justify-between border-2 border-eerieBlack">
            <div className="lg:flex lg:flex-row sm:max-md:flex-col pt-3 items-stretch">
                <div className="basis-2/6 w-full pr-1 self-stretch">
                    <LigueCarte key={league.id} league={league} leagues_img_url={LEAGUES.IMG} isDisabled={isDisabled}/>
                </div>    
                <div className="basis-4/6 w-full pr-1 mb-5">
                    {/* BlocMeilleur */}
                    <div className="h-full border-t-2 border-tiffanyBlue pt-4 mb-5 rounded-3xl">
                        <div className="h-full block rounded-3xl border-2 border-tiffanyBlue bg-gunMetal">
                            <div class="h-full grid lg:grid-cols-4 sm:max-md:grid-rows-4 lg:divide-x max-sm:max-md:divide-y sm:max-lg:divide-y divide-tiffanyBlue">
                                <div className="flex flex-col text-white">
                                    <div className="text-center">
                                        <p className="text-lg font-bold font-title">Meilleur Club</p>
                                        <hr className="w-1/2 m-auto border-tiffanyBlue"/>
                                    </div>
                                    <div className="flex md:max-xl:flex-col sm:max-md:flex-col max-sm:flex-col justify-evenly lg:mx-2 lg:mt-5 md:max-xl:mt-1 sm:max-md:mt-0 max-sm:mt-0">
                                        <div className='basis-2/6 text-center'>
                                            <img className="m-auto w-12 max-sm:max-md:w-20 sm:max-lg:w-20 sm:max-md:w-0 max-sm:w-0 rounded-2xl border-2 border-onyx" src={CLUBS.IMG +"/" + allTimeBestClub.clubName} alt="" />
                                        </div>
                                        <div className='basis-4/6 text-center'>
                                            <p className="text-lg font-bold font-content text-tiffanyBlue">{allTimeBestClub.clubName}</p>
                                            <p className="font-content text-white">{allTimeBestClub.rankAverage} ème</p>   
                                            <p className="text-xs font-content text-white">({allTimeBestClub.nbWin} x champs)</p>   

                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col text-white">
                                    <div className="text-center">
                                        <p className="text-lg font-bold font-title">Meilleur Buteur</p>
                                        <hr className="w-1/2 m-auto border-tiffanyBlue"/>
                                    </div>
                                    <div className="flex md:max-xl:flex-col sm:max-md:flex-col max-sm:flex-col justify-evenly lg:mx-2 lg:mt-5 md:max-xl:mt-1 sm:max-md:mt-0 max-sm:mt-0">
                                        <div className='basis-2/6 text-center'>
                                            <img className="m-auto w-12 max-sm:max-md:w-20 sm:max-lg:w-20 sm:max-md:w-0 max-sm:w-0 rounded-2xl border-2 border-onyx" src={PLAYERS.IMG +"/" + allTimeBestStriker.playerId} alt="" />
                                        </div>
                                        <div className='basis-4/6 text-center'>
                                            <p className="text-lg font-bold font-content text-tiffanyBlue">{allTimeBestStriker.playerName}</p>
                                            <p className="font-content text-white">{allTimeBestStriker.totalGoals} buts </p>   
                                            <p className="text-xs font-content text-white">({allTimeBestStriker.totalMatches} matches)</p>   

                                        </div>
                                    </div>                                    
                                </div>                                
                                <div className="flex flex-col text-white">
                                    <div className="text-center">
                                        <p className="text-lg font-bold font-title">Meilleur Passeur</p>
                                        <hr className="w-1/2 m-auto border-tiffanyBlue"/>
                                    </div>
                                    <div className="flex md:max-xl:flex-col sm:max-md:flex-col max-sm:flex-col justify-evenly lg:mx-2 lg:mt-5 md:max-xl:mt-1 sm:max-md:mt-0 max-sm:mt-0">
                                        <div className='basis-2/6 text-center'>
                                            <img className="m-auto w-12 max-sm:max-md:w-20 sm:max-lg:w-20 sm:max-md:w-0 max-sm:w-0 rounded-2xl border-2 border-onyx" src={PLAYERS.IMG +"/" + allTimeBestPlaymaker.playerId} alt="" />
                                        </div>
                                        <div className='basis-4/6 text-center'>
                                            <p className="text-lg font-bold font-content text-tiffanyBlue">{allTimeBestPlaymaker.playerName}</p>
                                            <p className="font-content text-white">{allTimeBestPlaymaker.totalAssists} passes décisives</p>   
                                            <p className="text-xs font-content text-white">({allTimeBestPlaymaker.totalMatches} matches)</p>   
                                        </div>
                                    </div>                                    
                                </div>                                
                                <div className="flex flex-col text-white">
                                    <div className="text-center">
                                        <p className="text-lg font-bold font-title">Meilleur Gardien</p>
                                        <hr className="w-1/2 m-auto border-tiffanyBlue"/>
                                    </div>
                                    <div className="flex md:max-xl:flex-col sm:max-md:flex-col max-sm:flex-col justify-evenly lg:mx-2 lg:mt-5 md:max-xl:mt-1 sm:max-md:mt-0 max-sm:mt-0">
                                        <div className='basis-2/6 text-center'>
                                            <img className="m-auto w-12 max-sm:max-md:w-20 sm:max-lg:w-20 sm:max-md:w-0 max-sm:w-0 rounded-2xl border-2 border-onyx" src={PLAYERS.IMG +"/" + allTimeBestGoalkeeper.playerId} alt="" />
                                        </div>
                                        <div className='basis-4/6 text-center'>
                                        <p className="text-lg font-bold font-content text-tiffanyBlue">{allTimeBestGoalkeeper.playerName}</p>
                                            <p className="font-content text-white">{allTimeBestGoalkeeper.totalGoalsAgainst} buts encaissés</p>   
                                            <p className="text-xs font-content text-white">({allTimeBestGoalkeeper.totalMatches} matches)</p>
                                        </div>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /BlocMeilleur */}
                </div>    
            </div>
            <div className="lg:flex lg:flex-row sm:max-md:flex-col" >
                <div className="2xl:w-1/2 md:w-full ml-1 mr-1">
                    <BlocContent>
                        <MuiTabs>
                            <div className="2xl:w-[40rem] xl:w-[30rem] lg:w-[22rem] md:w-0 sm:w-0 max-[767px]:w-0 h-48 flex flex-col justify-center">
                                    <h3 className='flex items-center text-white pb-3 max-[1023px]:hidden'> 
                                        {/* <img className="w-12 h-12 mr-3"/> */}
                                        1
                                    </h3>
                            </div>
                            <div className="2xl:w-[40rem] xl:w-[30rem] lg:w-[22rem] md:w-0 sm:w-0 max-[767px]:w-0 h-48 flex flex-col justify-center">
                                    <h3 className='flex items-center text-white pb-3 max-[1023px]:hidden'> 
                                        {/* <img className="w-12 h-12 mr-3"/> */}
                                        2
                                    </h3>
                            </div>
                            <div className="2xl:w-[40rem] xl:w-[30rem] lg:w-[22rem] md:w-0 sm:w-0 max-[767px]:w-0 h-48 flex flex-col justify-center">
                                    <h3 className='flex items-center text-white pb-3 max-[1023px]:hidden'> 
                                        {/* <img className="w-12 h-12 mr-3"/> */}
                                        3
                                    </h3>
                            </div>                                        
                        </MuiTabs>
                    </BlocContent>
                </div>
                <div className="2xl:w-1/2 md:w-full mr-1 ml-1">
                    <BlocContent>
                        <MuiTabs>
                            <div className="2xl:w-[40rem] xl:w-[30rem] lg:w-[22rem] md:w-0 sm:w-0 max-[767px]:w-0 h-48 flex flex-col justify-center">
                                    <h3 className='flex items-center text-white pb-3 max-[1023px]:hidden'> 
                                        {/* <img className="w-12 h-12 mr-3"/> */}
                                        1
                                    </h3>
                            </div>
                            <div className="2xl:w-[40rem] xl:w-[30rem] lg:w-[22rem] md:w-0 sm:w-0 max-[767px]:w-0 h-48 flex flex-col justify-center">
                                    <h3 className='flex items-center text-white pb-3 max-[1023px]:hidden'> 
                                        {/* <img className="w-12 h-12 mr-3"/> */}
                                        2
                                    </h3>
                            </div>
                            <div className="2xl:w-[40rem] xl:w-[30rem] lg:w-[22rem] md:w-0 sm:w-0 max-[767px]:w-0 h-48 flex flex-col justify-center">
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
                {clubs.map(club => (
                    <ClubCarte key={club.id} id={club.id} name={club.name} clubs_img_url={CLUBS.IMG}/>
                ))}
            </BlocClubCarte>
        </div>
    )
}