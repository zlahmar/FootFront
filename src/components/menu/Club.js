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
import BlocFiltrage from '../bloc/BlocFiltrage';
import SearchBar from '../recherche/SearchBar';
import SortOrder from '../recherche/SortOrder';
import {renderTotalJoueurCarte} from '../carte/joueur/JoueurTotalCarte';
import { renderJoueurCarte} from '../carte/joueur/JoueurCarte';
import JoueurGardienCarte from '../carte/joueur/JoueurGardienCarte';
import { START_SEASON, NUMBER_OF_SEASONS, DEFAULT_PAGE, DEFAULT_SIZE, POSITION, SORT_BY, SORT_ORDER } from '../../data/Constants';

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

    // players
    const [players, setPlayers] = useState([]);
    const [tempPlayers, setTempPlayers] = useState([]);
    const [allPlayersInClub, setAllPlayersInClub] = useState([]);
    const [allPlayersBySeasonInClub, setAllPlayersBySeasonInClub] = useState([]);
    const [totalPlayersCountWithoutKeepers, setTotalPlayersCountWithoutKeepers] = useState(0); 

    // nationalities
    const [nationality, setNationality] = useState('TOTAL');
    const [allNationalitiesInClub, setAllNationalitiesInClub] = useState([]);
    const [tempNationalitiesInClub, setTempNationalitiesInClub] = useState([]);

    // filters
    const [season, setSeason] = useState('TOTAL');
    const [query, setQuery] = useState('');
    const [position, setPosition] = useState('TOTAL');
    const [sort, setSort] = useState('DEFAULT');
    const [sortOrder, setSortOrder] = useState(SORT_ORDER.DESC);

    // infinite scroll
    const [page, setPage] = useState(DEFAULT_PAGE);
    const [isScrollable, setIsScrollable] = useState(true);

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
                
                // ----------------------------------------
                // SET STATE Variables : totalPlayersCountWithoutKeepers
                // ----------------------------------------
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

                // ----------------------------------------
                // SET STATE Variables : players, allNationalitiesInClub
                // ----------------------------------------
                setAllNationalitiesInClub(uniqueNationalities);
                setTempNationalitiesInClub(uniqueNationalities);
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
                
                // ----------------------------------------
                // SET STATE Variables : allPlayersBySeasonInClub
                // ----------------------------------------
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
        // If season is TOTAL, then infinite scroll is enabled
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
                                                    '&sort_order=desc'+
                                                    '&sort_field=all_nb_games'
                                                    );
                
                    if (response.status === 500) {
                        throw new Error("Internal server error");
                    }

                    // ----------------------------------------
                    // SET STATE Variables : players, tempPlayers
                    // ----------------------------------------
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
    // (2) FILTERS
    // -------------------
    function filteredData(season,query, nationality, position,sort, sortOrder){
        let filteredData;

        const isTotalSeason = season.includes("TOTAL");
        const isDefaultSort = sort.includes("DEFAULT");

        if (isTotalSeason)
        {   if (query || 
                nationality !== 'TOTAL' || 
                position !== 'TOTAL' ||
                sort !== 'DEFAULT'
                ) {
                filteredData = allPlayersInClub;
            }

            if (query) {
                filteredData = filteredData.filter((data) => {return data.playerName.toLowerCase().includes(query.toLowerCase())})                
            }

            if (nationality !=='TOTAL') {
                filteredData = filteredData.filter((data) => {return data.nationalityName.toLowerCase().includes(nationality.toLowerCase())})                
            
                if (sortOrder === SORT_ORDER.ASC){   
                    filteredData = filteredData.sort((a,b) => a.playerName.localeCompare(b.playerName))
                } else {
                    filteredData = filteredData.sort((a,b) => b.playerName.localeCompare(a.playerName))
                }
            }

            if (position !=='TOTAL') {
                filteredData = filteredData.filter((data) => {return data.playerPosition.includes(position)})   

                if (sortOrder === SORT_ORDER.ASC){   
                    filteredData = filteredData.sort((a,b) => a.playerPosition.localeCompare(b.playerPosition))
                }

            }

            if (!isDefaultSort) {
                const sortKeys = {
                    [SORT_BY.PLAYER_NAME]: 'playerName',
                    [SORT_BY.POSITION]: 'playerPosition',
                    [SORT_BY.NATIONALITY]: 'nationalityName'
                };
            
                if (sortKeys[sort]) {
                    filteredData.sort((a, b) => (sortOrder === SORT_ORDER.ASC) ?
                        a[sortKeys[sort]].localeCompare(b[sortKeys[sort]]) :
                        b[sortKeys[sort]].localeCompare(a[sortKeys[sort]])
                    );
                } 
                else if (sort === SORT_BY.GOALS || sort === SORT_BY.ASSISTS || sort === SORT_BY.YELLOW_CARDS || sort === SORT_BY.RED_CARDS) {
                    const numericSortKey = {
                        [SORT_BY.GOALS]: 'allGoals',
                        [SORT_BY.ASSISTS]: 'allAssists',
                        [SORT_BY.YELLOW_CARDS]: 'allYellowCards',
                        [SORT_BY.RED_CARDS]: 'allRedCards'
                    };
            
                    filteredData.sort((a, b) => (sortOrder === SORT_ORDER.ASC) ?
                        a[numericSortKey[sort]] - b[numericSortKey[sort]] :
                        b[numericSortKey[sort]] - a[numericSortKey[sort]]
                    );
                }
            }
        }
        else {
            filteredData = allPlayersBySeasonInClub.filter(data => data.season === season);

            if (!query && nationality === 'TOTAL' && position === 'TOTAL' && sort === 'DEFAULT') {
                if (sortOrder === SORT_ORDER.ASC) {
                    filteredData.sort((a, b) => a.nb_game - b.nb_game);
                } else {
                    filteredData.sort((a, b) => b.nb_game - a.nb_game);
                }
            }

            if (query) {
                filteredData = filteredData.filter(data => data.player.name.toLowerCase().includes(query.toLowerCase()));
            }
    
            if (nationality !== 'TOTAL') {
                filteredData = filteredData.filter(data => data.player.nationality.name_original.toLowerCase().includes(nationality.toLowerCase()));
            }
    
            if (position !== 'TOTAL') {
                filteredData = filteredData.filter(data => data.player.position.toLowerCase().includes(position.toLowerCase()));
                
                if (sortOrder === SORT_ORDER.ASC) {
                    filteredData.sort((a, b) => a.player.position.localeCompare(b.player.position));
                }
            }
            
            if (!isDefaultSort) {
                let sortFunction;
            
                switch (sort) {
                    case SORT_BY.PLAYER_NAME:
                        sortFunction = (a, b) => a.player.name.localeCompare(b.player.name);
                        break;
                    case SORT_BY.POSITION:
                        sortFunction = (a, b) => a.player.position.localeCompare(b.player.position);
                        break;
                    case SORT_BY.NATIONALITY:
                        sortFunction = (a, b) => a.player.nationality.name_original.localeCompare(b.player.nationality.name_original);
                        break;
                    case SORT_BY.GOALS:
                        sortFunction = (a, b) => b.goal - a.goal;
                        break;
                    case SORT_BY.ASSISTS:
                        sortFunction = (a, b) => b.assist - a.assist;
                        break;
                    case SORT_BY.YELLOW_CARDS:
                        sortFunction = (a, b) => b.yellow_card - a.yellow_card;
                        break;
                    case SORT_BY.RED_CARDS:
                        sortFunction = (a, b) => b.red_card - a.red_card;
                        break;
                    default:
                        break;
                }
            
                if (sortFunction) {
                    filteredData.sort((a, b) => (sortOrder === SORT_ORDER.DESC) ? sortFunction(a, b) : sortFunction(b, a));
                }
            }
        }
        return filteredData
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
    const handleRadioChange = (value) => {
        setSortOrder(value);
        setPlayers(tempPlayers.reverse());
      };

    // --------------------------------
    // Filtered Players - RESULTS of all filters
    // --------------------------------
    const filtered_players = filteredData(season, query, nationality, position, sort, sortOrder)

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
            <div className="px-2 pb-3 flex flex-col">
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
                        <BlocFiltrage>
                            <MuiSelectBox handleChange={handleSeasonChange} extra_value={'TOTAL'} label="Saison" array={generateSeason(START_SEASON, NUMBER_OF_SEASONS)} value={season}/>
                            <MuiSelectBox handleChange={handleNationalityChange} extra_value={'TOTAL'} label="Nationalité" array={allNationalitiesInClub} value={nationality} />
                            <MuiSelectBox handleChange={handlePositionChange} extra_value={'TOTAL'} label="Position" array={[POSITION.FW, POSITION.MF, POSITION.DF]} value={position} />
                            <MuiSelectBox handleChange={handleSortChange} extra_value={'DEFAULT'} label="Ordre" array={[SORT_BY.GOALS, SORT_BY.ASSISTS, SORT_BY.NATIONALITY, SORT_BY.PLAYER_NAME, SORT_BY.POSITION, SORT_BY.YELLOW_CARDS, SORT_BY.RED_CARDS]} value={sort} />
                            <SearchBar handleInputChange={handleInputChange} />
                            <SortOrder sortOrder={sortOrder} handleRadioChange={handleRadioChange}/>
                        </BlocFiltrage>
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

