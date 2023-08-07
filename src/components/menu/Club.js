// CSS
import '../../styles/index.css'

// React
import { QueryClient, QueryClientProvider,  useQueries } from "react-query"
import { useEffect, useState } from 'react';

// API / DATA
import {CLUBS, PLAYERS} from "../../data/Api"
import { getIdFromUrl } from '../../data/Arrays';
import ClubCarte from '../carte/club/ClubCarte';

// Components
import LoadingCarte from "../carte/LoadingCarte";
import LeMeilleur from '../carte/LeMeilleur';
import BlocLeMeilleur from '../bloc/BlocLeMeilleur';
import BlocContent from "../bloc/BlocContent";
import BlocTitre from '../bloc/BlocTitre';
import BlocJoueurCarte from '../bloc/BlocJoueurCarte';
import BlocTitreGraphe from '../bloc/BlocTitreGraphe';
import JoueurTotalCarte from '../carte/joueur/JoueurTotalCarte';
import JoueurCarte from '../carte/joueur/JoueurCarte';
import JoueurGardienCarte from '../carte/joueur/JoueurGardienCarte';
import { START_SEASON, NUMBER_OF_SEASONS, DEFAULT_PAGE, DEFAULT_SIZE, FILTER, SORT_BY } from '../../data/Constants';

// Graphique
import LineChart from '../graphique/LineChart';
import NetworkChart from '../graphique/NetworkChart';

// MUI
import MuiTabs from "../mui_component/MuiTabs";
import MuiSelectBox from '../mui_component/MuiSelectBox';

// Icons
import champion from '../../assets/icon/champion.png'
import best_player from '../../assets/icon/best_player.png'

// Utility
import { getBestData, updateSeasonFilter, activateInputFilter, deactivateInputFilter, isFilterActivated } from '../utility/Utility';

// Array
import { getClubRankingForSeasons, generateSeason } from '../../data/Arrays';

// Axios
import axios from 'axios';

// -----------------------
// 1) QUERY CLIENT
// -----------------------
const queryClient = new QueryClient()

// -----------------------
// 2) QUERY CLIENT PROVIDER
// -----------------------
export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Club/>
        </QueryClientProvider>
    )
}

// -----------------------
// 3) CLUB COMPONENT
// -----------------------
function Club() {
    const club_id = getIdFromUrl("clubs");

    // -------------------
    // USE STATE Variables
    // -------------------
    const [season, setSeason] = useState(['TOTAL']);
    const [nationality, setNationality] = useState(['TOTAL']);
    const [page, setPage] = useState(DEFAULT_PAGE);
    const [input, setInput] = useState('');
    
    const [players, setPlayers] = useState([]);

    const [isScrollable, setIsScrollable] = useState(true);
    const [allPlayersInClub, setAllPlayersInClub] = useState([]);
    const [totalPlayersCountWithoutKeepers, setTotalPlayersCountWithoutKeepers] = useState(0); 
    const [allNationalitiesInClub, setAllNationalitiesInClub] = useState([]);

    const [tempTotalPlayers, setTempTotalPlayers]=useState([]);
    const [tempSeasonPlayers, setTempSeasonPlayers]=useState([]);
    const [tempAllNationalitiesInClub, setTempAllNationalitiesInClub]=useState([]);
    
    const [filteredPlayers, setFilteredPlayers] = useState([]);
    const [filterCategory, setFilterCategory] = useState(Object.keys(FILTER).map(
                                                        (key) =>({
                                                                name : FILTER[key],
                                                                state : false,
                                                                })    
                                                        )); 
    // ---------------------------------------------
    // 3-1) USE QUERIES : FETCHING DATA FROM API
    // ---------------------------------------------
    // .............................................
    // (0) INIT - Get all players, allNationalitiesInClub in club (When page loads)
    // .............................................
    useEffect(()=> {
        const fetchApiAllPlayersCountInClub = async () => {
            const response =await  axios.get(PLAYERS.ALL_PLAYERS_IN_CLUB +
                '?club_id=' + club_id);

                if (response.status === 500) {
                    return; // Stop fetching further data
                    }
                    
                setTotalPlayersCountWithoutKeepers(response.data.total_count);
        }
        fetchApiAllPlayersCountInClub();
    },[club_id])
    useEffect(() => {
        if (totalPlayersCountWithoutKeepers === 0) return;
        
        const fetchApiAllPlayersInClub = async () => {
            const response = await axios.get(PLAYERS.ALL_PLAYERS_IN_CLUB +
                '?club_id=' + club_id +
                '&page=' + DEFAULT_PAGE +
                '&size=' + totalPlayersCountWithoutKeepers +
                '&sort_order=desc' +
                '&sort_field=all_nb_games');

                if (response.status === 500) {
                    return; // Stop fetching further data
                    }

                const playerNationalities = response.data.items.map((player) => player.nationalityName)
                const uniqueNationalities = [...new Set(playerNationalities)];
                setAllNationalitiesInClub(uniqueNationalities);
                setTempAllNationalitiesInClub(uniqueNationalities);
                setAllPlayersInClub(response.data.items);
        }
        fetchApiAllPlayersInClub();
    }, [club_id, totalPlayersCountWithoutKeepers])

    // .............................................
    // (1) USE EFFECT : Infinite Scroll for players
    // .............................................
    const handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;

        if (scrollHeight - scrollTop <= clientHeight*1.3) {
            setPage(prev_page => prev_page + 1)
        }
    }
    
    useEffect(() => {
        if (season.includes('TOTAL') && isScrollable) {
            window.addEventListener('scroll', handleScroll,true);
            return () => window.removeEventListener('scroll', handleScroll,true);
        }
    },[season,isScrollable])

    useEffect( () => {
        const fetchApiPlayers = async () => {
            if (season.includes('TOTAL')) {
                try {

                    const response1 = await axios.get(PLAYERS.ALL_PLAYERS_IN_CLUB +
                        '?club_id=' + club_id +
                        '&page=' + page +
                        '&size=' + DEFAULT_SIZE +
                        '&sort_order=desc' +
                        '&sort_field=all_nb_games');
                
                    if (response1.status === 500) {
                        throw new Error("Internal server error");
                    }
                
                    setPlayers(prevData => [...prevData, ...response1.data.items]);
                    setTempTotalPlayers(prevData => [...prevData, ...response1.data.items]);
                } catch (error) {
                    console.error(error.message);
                }
            }
        }
        fetchApiPlayers();
        
    },[page, season, club_id])

    console.log("players",players)
    // .............................................
    // (2) USE EFFECT : Seasons
    // .............................................
    useEffect(() => {
        const fetchApiPlayersBySeason = async () => {
            if (!season.includes('TOTAL')) {
                const response2 = await axios.get(
                    PLAYERS.ALL_PLAYERS_IN_CLUB_BY_SEASON+
                    '?club_id='+club_id+
                    '&season='+season+
                    '&sort_order=desc'+
                    '&sort_field=nb_game'
                );
                if (response2.status === 500) {
                    return; // Stop fetching further data
                }
                setTempSeasonPlayers(response2.data);
                setPlayers(response2.data);
            } 

        }
        fetchApiPlayersBySeason();
    },[season,club_id])
    const handleSeasonChange = (insertedSeason) => {
        setSeason(insertedSeason);
        setPlayers([]);
        setPage(DEFAULT_PAGE);
        setFilterCategory((prev_filters) => {const updated_filters = updateSeasonFilter(prev_filters, insertedSeason);
                                            return updated_filters;});
    }

    // .............................................
    // (3) USE EFFECT : Input (Search Bar)
    // .............................................
    useEffect(() => {
        const filterPlayersByInput=() => {
            // i) + Total 
            if (season.includes('TOTAL')) {
                if(input !== '') {
                    setIsScrollable(false)
                    let filtered_players =allPlayersInClub.filter(player => player.playerName.toLowerCase().includes(input.toLowerCase()))
                    setFilteredPlayers(filtered_players);
                    setPlayers(filtered_players);
                    setFilterCategory((prev_filters) => {const updated_filters = activateInputFilter(prev_filters, input);
                                                        return updated_filters;});
                } else {

                    setPlayers(tempTotalPlayers);
                    setFilterCategory((prev_filters) => {const updated_filters = deactivateInputFilter(prev_filters, input);
                                                        return updated_filters;});
                    setIsScrollable(true);

                }
            }
            // ii) + Seasons 
            else {
                if(input !== '') {
                    let filtered_players =tempSeasonPlayers.filter(player => player.player.name.toLowerCase().includes(input.toLowerCase()))
                    setFilteredPlayers(filtered_players);
                    setPlayers(filtered_players);
                    setFilterCategory((prev_filters) => {const updated_filters = activateInputFilter(prev_filters, input);
                                                    return updated_filters;});
                } else {
                    setPlayers(tempSeasonPlayers);
                    setFilterCategory((prev_filters) => {const updated_filters = deactivateInputFilter(prev_filters, input);
                                                        return updated_filters;});
                }
            }
        }
        filterPlayersByInput();
    },[input, allPlayersInClub, season, tempTotalPlayers,tempSeasonPlayers])

    // .............................................
    // (4) USE EFFECT : Nationality
    // .............................................
    const handleNationalityChange = (insertedNationality) => {
        setNationality(insertedNationality);
        // setFilterCategory((prev_filters) => {const updated_filters = updateSeasonFilter(prev_filters, insertedSeason);
        //                                     return updated_filters;});
    }

    
    // (5) Fetching data from API (React-Queries)
    const resultQueries = useQueries(
        [
            { queryKey: ['club',1], queryFn: () => fetch(CLUBS.DATA+'/'+club_id).then(res => res.json())},
            { queryKey: ['bestTop10Strikers',2], queryFn: () => fetch(PLAYERS.BEST_TOP_10_STRIKERS+'?club_id='+club_id).then(res => res.json())},
            { queryKey: ['bestTop10Playmakers',3], queryFn: () => fetch(PLAYERS.BEST_TOP_10_PLAYMAKERS+'?club_id='+club_id).then(res => res.json())},
            { queryKey: ['bestTop10Goalkeepers',4], queryFn: () => fetch(PLAYERS.BEST_TOP_10_GOALKEEPERS+'?club_id='+club_id).then(res => res.json())},
            { queryKey: ['club_stats',5], queryFn: () => fetch(CLUBS.STATS+'?club_id='+club_id).then(res => res.json())},
            { queryKey: ['club_all_goalkeepers', 6], queryFn: () => fetch(PLAYERS.ALL_GK_PLAYERS_IN_CLUB+'?club_id='+club_id).then(res => res.json())},
        ]
    )

    // ---------------------------------------------
    // 3-2) LOADING / ERROR
    // ---------------------------------------------
    if (resultQueries.some((query) => query.isLoading)) {
        return (
          <div className="h-screen flex flex-col justify-between border-2 border-eerieBlack pt-3 pb-3">
            <LoadingCarte />
          </div>
        );
    }
      
      if (resultQueries.some((query) => query.error)) {
        return 'An error has occurred';
    }

    // ---------------------------------------------
    // 3-3) SUCCESS
    // --------------------------------------------- 

    // (1) DATA : DATA FROM API
    const club = resultQueries[0].data;
    const bestTop10Strikers = resultQueries[1].data;
    const bestTop10Playmakers = resultQueries[2].data;
    const bestTop10Goalkeepers = resultQueries[3].data;
    const club_stats = resultQueries[4].data;
    const club_all_goalkeepers = resultQueries[5].data;

    // (2) DATA : DATA FOR BESTS & RANKING FOR SEASONS
    const BESTS = [
        getBestData("Le Meilleur Buteur", bestTop10Strikers[0].playerId, PLAYERS.IMG+"/"+bestTop10Strikers[0].playerId, bestTop10Strikers[0].playerName, bestTop10Strikers[0].allGoals + " buts", bestTop10Strikers[0].allNbGames+ " matchs"), 
        getBestData("Le Meilleur Passeur", (bestTop10Playmakers[0].playerId)*99, PLAYERS.IMG+"/"+bestTop10Playmakers[0].playerId, bestTop10Playmakers[0].playerName, bestTop10Playmakers[0].allAssists + " passes", bestTop10Playmakers[0].allNbGames+ " matchs"),
        getBestData("Le Meilleur Gardien", bestTop10Goalkeepers[0].playerId, PLAYERS.IMG+"/"+bestTop10Goalkeepers[0].playerId, bestTop10Goalkeepers[0].playerName, bestTop10Goalkeepers[0].allGas + " buts encaissés", bestTop10Goalkeepers[0].allNbGames+ " matchs")
    ]

    const RANKING_FOR_SEASONS = getClubRankingForSeasons(club_stats, START_SEASON, NUMBER_OF_SEASONS)

    return (
            <div id="club-div" className="pb-3 flex flex-col">
                <div className="lg:flex lg:flex-row sm:max-md:flex-col pt-5">
                    <div className="basis-2/6 w-full pr-1 mb-5">
                        <ClubCarte key={club.id} club={club} clubs_img={CLUBS.IMG} isClickDisabled={true}/>
                    </div>  
                    <div className="basis-4/6 w-full pr-1 mb-5">
                        <BlocLeMeilleur>
                            {BESTS.map(best => ( 
                                <LeMeilleur title={best.title} key={best.key}  img_url={best.img_url} data_name={best.data_name} data_value1 = {best.data_value1} data_value2= {best.data_value2}/>
                            ))}
                        </BlocLeMeilleur>
                    </div>   
                </div>
                <BlocContent>
                    <MuiTabs title1={"Classement par saison"} title2={"Les meilleurs joueurs"}>
                        <div className="2xl:w-[75rem] xl:w-[70rem] lg:w-[63rem] md:w-0 sm:w-0 max-[767px]:w-0 h-96 flex flex-col justify-center">
                            <BlocTitreGraphe img={[champion]} title={`Classement en ligue du <strong>${club.league.name}</strong> (2002 ~ 2022)`}/>
                            <LineChart club={RANKING_FOR_SEASONS}/>
                        </div>
                        <div  className="2xl:w-[75rem] xl:w-[70rem] lg:w-[63rem] md:w-0 sm:w-0 max-[767px]:w-0 h-96 flex flex-col justify-center">
                            <BlocTitreGraphe img={[best_player]} title={`Les 5 meilleurs <strong>buteurs</strong>, <strong>passeurs</strong> et <strong>gardiens</strong> dans ${club.name}`}/>
                            <NetworkChart club={club} 
                            club_img_url={CLUBS.IMG} 
                            best_top_10_strikers={bestTop10Strikers} 
                            best_top_10_playmakers={bestTop10Playmakers} 
                            best_top_10_goalkeepers={bestTop10Goalkeepers}
                            />
                        </div>
                    </MuiTabs>    
                </BlocContent> 
                <BlocTitre title={`Cliquez sur le joueur que vous voulez voir ci-dessous. (<strong>${totalPlayersCountWithoutKeepers + club_all_goalkeepers.length}</strong> Joueur(s) dans ce club)`}/>
                <MuiTabs title1={"Joueur de champ"}  title2={"Gardien"} changeStyle={true}>
                    <div>
                        <div className="flex flex-wrap xl:flex-row max-[767px]:flex-col justify-evenly items-center bg-gunMetal rounded-t-3xl">
                            <MuiSelectBox extra_value={'TOTAL'} label="Saississez une saison" array={generateSeason(START_SEASON, NUMBER_OF_SEASONS)} value={season} handleChange={handleSeasonChange}/>
                            <label className="relative block">
                                <span className="sr-only">Search</span>
                                <span className="absolute inset-y-10 left-1 flex items-center pl-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16"> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/> </svg>
                                </span>
                                <input onChange={(e) => setInput(e.target.value)}  className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-4 mt-3 pl-9 pr-3 shadow-sm focus:outline-none focus:border-tiffanyBlue focus:ring-tiffanyBlue focus:ring-1 sm:text-sm" placeholder="Tapez un nom de joueur" type="text" name="search"/>
                            </label>
                            <MuiSelectBox extra_value={'TOTAL'} label="Saississez une nationalité" array={allNationalitiesInClub} value={nationality} handleChange={handleNationalityChange}/>

                            <p className='text-white'>Nationalité (WHERE) - Select Box</p>
                            <p className='text-white'>Position (WHERE IN) - Multiple Select</p>
                            <p className='text-white'>Goal, Assist, Y,R .. (ORDER) - Select Box</p>
                            <p className='text-white'>ASC/DESC - Radio Button</p>
                        </div>
                        <BlocJoueurCarte title={'Attaquant, Milieu, Défenseur'}>
                            {season.includes('TOTAL') ? 
                                (
                                    // players.length === 0 ? (
                                    //     <span className='text-white'>Not Found</span>
                                    // ) 
                                    // : 
                                    // (
                                        players.map((player, index) => (
                                            <JoueurTotalCarte key={index} player={player} />
                                        ))
                                    // )
                                ) 
                                : 
                                (
                                    players.map((data, index) => (
                                        <JoueurCarte key={index} data={data} />
                                    ))
                                )}
                        </BlocJoueurCarte>
                    </div>
                    <BlocJoueurCarte title={'Gardien'}>
                        {club_all_goalkeepers.map((gk_player,index) => (
                            <JoueurGardienCarte key={index} gk_player={gk_player}/>
                        ))}
                    </BlocJoueurCarte>

                </MuiTabs>

            </div>
            )
}

