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
import { START_SEASON, NUMBER_OF_SEASONS, DEFAULT_PAGE, DEFAULT_SIZE, POSITION, SORT_BY } from '../../data/Constants';

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
import { getBestData } from '../utility/Utility';

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
    const [nationality, setNationality] = useState('TOTAL');
    const [position, setPosition] = useState('TOTAL');
    const [sort, setSort] = useState('DEFAULT');
    const [page, setPage] = useState(DEFAULT_PAGE);
    const [selectedOption, setSelectedOption] = useState('');

    const [players, setPlayers] = useState([]);
    const [tempPlayers, setTempPlayers] = useState([]);
    const [season, setSeason] = useState('TOTAL');
    const [query, setQuery] = useState('');

    const [isScrollable, setIsScrollable] = useState(true);

    const [allPlayersInClub, setAllPlayersInClub] = useState([]);
    const [allPlayersBySeasonInClub, setAllPlayersBySeasonInClub] = useState([]);
    const [totalPlayersCountWithoutKeepers, setTotalPlayersCountWithoutKeepers] = useState(0); 
    const [allNationalitiesInClub, setAllNationalitiesInClub] = useState([]);
    const [tempNationalitiesInClub, setTempNationalitiesInClub] = useState([]);

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
            try {
                
                const response = await axios.get(
                                                PLAYERS.ALL_PLAYERS_IN_CLUB +
                                                '?club_id=' + club_id +
                                                '&page=' + DEFAULT_PAGE +
                                                '&size=' + totalPlayersCountWithoutKeepers +
                                                '&sort_order=desc' +
                                                '&sort_field=all_nb_games'
                                                );

                if (response.status === 500) {
                    throw new Error("Internal server error");
                }

                let playerNationalities = response.data.items.map((player) => player.nationalityName)
                
                playerNationalities = [...playerNationalities].sort()

                const uniqueNationalities = [...new Set(playerNationalities)];
                setAllNationalitiesInClub(uniqueNationalities);
                setTempNationalitiesInClub(uniqueNationalities)

                setAllPlayersInClub(response.data.items);
            } catch (error) {
                console.error(error.message);
            }
        }
        fetchApiAllPlayersInClub();
    }, [club_id, totalPlayersCountWithoutKeepers])
    useEffect(() =>{
        const fetchApiAllPlayersBySeasonInClub = async () => {
            try {
                const response = await axios.get(
                                                PLAYERS.ALL_PLAYERS_IN_CLUB_BY_SEASON +
                                                '?club_id=' + club_id+
                                                '&sort_field=nb_game' +
                                                '&sort_order=desc'
                                                );

                if (response.status === 500) {
                    throw new Error("Internal server error");
                    }
                setAllPlayersBySeasonInClub(response.data);
            } catch (error) {
                console.error(error.message);
            }
        }
        fetchApiAllPlayersBySeasonInClub();
    },[club_id])

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

                    const response = await axios.get(
                                                    PLAYERS.ALL_PLAYERS_IN_CLUB +
                                                    '?club_id=' + club_id +
                                                    '&page=' + page +
                                                    '&size=' + DEFAULT_SIZE +
                                                    '&sort_order=desc' +
                                                    '&sort_field=all_nb_games'
                                                    );
                
                    if (response.status === 500) {
                        throw new Error("Internal server error");
                    }

                    setPlayers(prevData => [...prevData, ...response.data.items]);
                    setTempPlayers(prevData => [...prevData, ...response.data.items]);

                } catch (error) {
                    console.error(error.message);
                }
            }
        }
        fetchApiPlayers();
        
    },[page, club_id])

    // -------------------
    // FILTERS
    // -------------------
    function filteredData(season,query, nationality, position,sort){
        let filteredData;

        if (season.includes('TOTAL'))
        {   if (query || 
                nationality !== 'TOTAL' || 
                position !== 'TOTAL' ||
                sort !== 'DEFAULT') {
                filteredData = allPlayersInClub;
            }

            if (query) {
                filteredData = filteredData.filter((data) => {return data.playerName.toLowerCase().includes(query.toLowerCase())})                
            }

            if (!nationality.includes('TOTAL')) {
                filteredData = filteredData.filter((data) => {return data.nationalityName.toLowerCase().includes(nationality.toLowerCase())})                
            }

            if (!position.includes('TOTAL')) {
                filteredData = filteredData.filter((data) => {return data.playerPosition.includes(position)})                
            }

            if (!sort.includes('DEFAULT')) {
                if (sort === SORT_BY.PLAYER_NAME)
                {
                    filteredData = filteredData.sort((a,b) => a.playerName.localeCompare(b.playerName))
                }
                if (sort === SORT_BY.POSITION)
                {
                    filteredData = filteredData.sort((a,b) => a.playerPosition.localeCompare(b.playerPosition))
                }
                if (sort === SORT_BY.NATIONALITY)
                {
                    filteredData = filteredData.sort((a,b) => a.nationalityName.localeCompare(b.nationalityName))
                }
                if (sort === SORT_BY.GOALS)
                {
                    filteredData = filteredData.sort((a,b) => b.allGoals - a.allGoals)
                }
                if (sort === SORT_BY.ASSISTS)
                {
                    filteredData = filteredData.sort((a,b) => b.allAssists - a.allAssists)
                }
                if (sort === SORT_BY.YELLOW_CARDS)
                {
                    filteredData = filteredData.sort((a,b) => b.allYellowCards - a.allYellowCards)
                }
                if (sort === SORT_BY.RED_CARDS)
                {
                    filteredData = filteredData.sort((a,b) => b.allRedCards - a.allRedCards)
                }
            }

            return filteredData

        }
        else {
            filteredData = allPlayersBySeasonInClub.filter((data) => data.season === season);

            if (query) {
                filteredData = filteredData.filter((data) => {return data.player.name.toLowerCase().includes(query.toLowerCase())})
            }

            if (!nationality.includes('TOTAL')) {
                filteredData = filteredData.filter((data) => {return data.player.nationality.name_original.toLowerCase().includes(nationality.toLowerCase())})                
            }

            if (!position.includes('TOTAL')) {
                filteredData = filteredData.filter((data) => {return data.player.position.toLowerCase().includes(position.toLowerCase())})
            }

            if (!sort.includes('DEFAULT')) {
                if (sort === SORT_BY.PLAYER_NAME)
                {
                    filteredData = filteredData.sort((a,b) => a.player.name.localeCompare(b.player.name))
                }
                if (sort === SORT_BY.POSITION)
                {
                    filteredData = filteredData.sort((a,b) => a.player.position.localeCompare(b.player.position))
                }
                if (sort === SORT_BY.NATIONALITY)
                {
                    filteredData = filteredData.sort((a,b) => a.player.nationality.name_original.localeCompare(b.player.nationality.name_original))
                }
                if (sort === SORT_BY.GOALS)
                {
                    filteredData = filteredData.sort((a,b) => b.goal - a.goal)
                }
                if (sort === SORT_BY.ASSISTS)
                {
                    filteredData = filteredData.sort((a,b) => b.assist - a.assist)
                }
                if (sort === SORT_BY.YELLOW_CARDS)
                {
                    filteredData = filteredData.sort((a,b) => b.yellow_card - a.yellow_card)
                }
                if (sort === SORT_BY.RED_CARDS)
                {
                    filteredData = filteredData.sort((a,b) => b.red_card - a.red_card)
                }
            }

            return filteredData
        }
    }
    // (1)Input Filter
    const handleInputChange = (event) => {
        const query = event.target.value;
        const is_query_empty = query === '';

        setQuery(query);
        setIsScrollable(is_query_empty);
    }

    // (2) Season Filter
    const handleSeasonChange = (event) => {
        const insertedSeason = event.target.value;
        const is_season_total = insertedSeason.includes('TOTAL');

        if (is_season_total) {
            setPlayers(tempPlayers);
            setAllNationalitiesInClub(tempNationalitiesInClub)
        }
        else {
            const season_data = allPlayersBySeasonInClub.filter((data) => data.season === insertedSeason);
            let season_nationalities = season_data.map((data)=> data.player.nationality.name_original);
            season_nationalities = [...season_nationalities].sort();
            const unique_season_nationalities = [...new Set(season_nationalities)];
            setPlayers(season_data);
            setAllNationalitiesInClub(unique_season_nationalities);
        }
        setSeason(insertedSeason);
        setIsScrollable(is_season_total);
    }

    // (3) Nationality Filter
    const handleNationalityChange = (event) => {
        const insertedNationality = event.target.value;
        const is_nationality_total = insertedNationality.includes('TOTAL');

        if (is_nationality_total) {
            setPlayers(tempPlayers);
        }
        else {
            setPlayers(allPlayersBySeasonInClub.filter((data) => data.player.nationality.original_name === insertedNationality));
        }
        setNationality(insertedNationality);
        setIsScrollable(is_nationality_total);
    }

    // (4) Position Filter
    const handlePositionChange = (event) => {
        const insertedPosition = event.target.value;
        const is_position_total = insertedPosition.includes('TOTAL');

        if (is_position_total) {
            setPlayers(tempPlayers);
        }
        else {
            setPlayers(allPlayersBySeasonInClub.filter((data) => data.player.position === insertedPosition));
        }
        setPosition(insertedPosition);
        setIsScrollable(is_position_total);
    }

    // (5) Sort Filter
    const handleSortChange = (event) => {
        const insertedSort = event.target.value;
        const is_sort_default = insertedSort.includes('DEFAULT');

        if (is_sort_default) {
            setPlayers(tempPlayers); 
        }
        setSort(insertedSort);
        setIsScrollable(is_sort_default);
    }

    // (6) ASC/DESC Filter

    
    // --------------------------------
    // Filtered Players - RESULTS of all filters
    // --------------------------------
    const filtered_players = filteredData(season, query, nationality, position, sort)

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

    // ---------------------------------------------
    // 3-4) RENDER CARTE JOUEURS / TOTAL JOUEURS
    // ---------------------------------------------
    function renderTotalJoueurCarte({
        playerId,
        playerPosition,
        nationalityName,
        playerName,
        allNbGames,
        avgMinutes,
        allGoals,
        allAssists,
        allYellowCards,
        allRedCards,
      }) {
        return (
          <JoueurTotalCarte
            key={Math.random()}
            playerId={playerId}
            playerPosition={playerPosition}
            nationalityName={nationalityName}
            playerName={playerName}
            allNbGames={allNbGames}
            avgMinutes={avgMinutes}
            allGoals={allGoals}
            allAssists={allAssists}
            allYellowCards={allYellowCards}
            allRedCards={allRedCards}
          />
        );
      }
      
      function renderJoueurCarte({
        player,
        nb_game,
        minute,
        goal,
        assist,
        yellow_card,
        red_card,
      }) {
        return (
          <JoueurCarte
            key={Math.random()*1000}
            player={player}
            nb_game={nb_game}
            minute={minute}
            goal={goal}
            assist={assist}
            yellow_card={yellow_card}
            red_card={red_card}
          />
        );
      }
      
      function renderPlayersList(playersList, isTotal) {
        return playersList.map((playerData) =>
          isTotal
            ? renderTotalJoueurCarte(playerData)
            : renderJoueurCarte(playerData)
        );
      }

    // ---------------------------------------------
    // 3-5) RETURN (RENDER)
    // ---------------------------------------------
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
                <BlocTitre title={`Cliquez sur le joueur que vous voulez voir ci-dessous. (${filtered_players ? `<strong>${filtered_players.length}</strong>` : `${players.length}`} / ${totalPlayersCountWithoutKeepers} Joueur(s) dans ce club)`}/>
                <MuiTabs title1={"Joueur de champ"}  title2={"Gardien"} changeStyle={true}>
                    <div>
                        <div className="flex flex-wrap xl:flex-row max-[767px]:flex-col justify-evenly items-center bg-gunMetal rounded-t-3xl">
                            <MuiSelectBox handleChange={handleSeasonChange} extra_value={'TOTAL'} label="Saison" array={generateSeason(START_SEASON, NUMBER_OF_SEASONS)} value={season}/>
                            <label className="relative block">
                                <span className="sr-only">Search</span>
                                <span className="absolute inset-y-10 left-1 flex items-center pl-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16"> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/> </svg>
                                </span>
                                <input onChange={handleInputChange}  className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-4 mt-3 pl-9 pr-3 shadow-sm focus:outline-none focus:border-tiffanyBlue focus:ring-tiffanyBlue focus:ring-1 sm:text-sm" placeholder="Tapez un nom de joueur" type="text" name="search"/>
                            </label>
                            <MuiSelectBox handleChange={handleNationalityChange} extra_value={'TOTAL'} label="Nationalité" array={allNationalitiesInClub} value={nationality} />
                            <MuiSelectBox handleChange={handlePositionChange} extra_value={'TOTAL'} label="Position" array={[POSITION.FW, POSITION.MF, POSITION.DF]} value={position} />
                            <MuiSelectBox handleChange={handleSortChange} extra_value={'DEFAULT'} label="Ordre" array={[SORT_BY.GOALS, SORT_BY.ASSISTS, SORT_BY.NATIONALITY, SORT_BY.PLAYER_NAME, SORT_BY.POSITION, SORT_BY.YELLOW_CARDS, SORT_BY.RED_CARDS]} value={sort} />
                            <div>
                                <div className='mb-2'>
                                    <p className='text-sm text-white'>ASC/DESC</p>
                                </div>
                                <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                                    <input
                                    className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-tiffanyBlue before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-tiffanyBlue  checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-tiffanyBlue checked:after:bg-tiffanyBlue checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-tiffanyBlue checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="inlineRadio1"
                                    value="option1" 
                                    checked/>
                                        <label
                                        className="text-white mt-px inline-block pl-[0.15rem] hover:cursor-pointer font-bold"
                                        for="inlineRadio1"
                                        >DESC</label>
                                </div>

                                <div className="mb-[0.125rem] mr-4 inline-block min-h-[1.5rem] pl-[1.5rem]">
                                    <input
                                    className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-tiffanyBlue before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-tiffanyBlue  checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-tiffanyBlue checked:after:bg-tiffanyBlue checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-tiffanyBlue checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                                    type="radio"
                                    name="inlineRadioOptions"
                                    id="inlineRadio2"
                                    value="option2" />
                                        <label
                                        className="text-white mt-px inline-block pl-[0.15rem] hover:cursor-pointer font-bold"
                                        for="inlineRadio2"
                                        >ASC</label>
                                </div>
                            </div>
                        </div>
                        <BlocJoueurCarte title={'Attaquant, Milieu, Défenseur'}>
                        {
                        season.includes('TOTAL') ? (
                        filtered_players
                            ? renderPlayersList(filtered_players, true)
                            : renderPlayersList(players, true)
                        ) : (
                        renderPlayersList(filtered_players || [], false)
                        )
                        }
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

