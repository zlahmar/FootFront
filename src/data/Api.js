const API_URL = "https://footstatsapi.sangmin.fr/api/"
// const API_URL = "http://localhost:7777/api/"
// const API_URL = "http://146.59.151.45:7777/api/"

const NATIONALITIES = {
    IMG : API_URL + "images/nationalities",
}

const LEAGUES = {
    DATA : API_URL + "leagues",
    RANKING : API_URL + "rankings_league",
    IMG : API_URL + "images/leagues",
    TOTAL : API_URL + "stats_league_club/total",
    NATIONALITIES : API_URL + "stats_league_club/nationalities_by_season", // ?league_id= &season=
}

const CLUBS = {
    DATA : API_URL + "clubs",
    IMG : API_URL + "images/clubs", //+ /{club.name}
    ALL_TIME_BEST : API_URL + "stats_league_club/all_time_best_clubs", // ?league_id=
    BEST_BY_SEASON : API_URL + "stats_league_club/best_clubs", // ?league_id= &season=
    STATS : API_URL + "stats_league_club/clubs", // ?club_id=
}

const PLAYERS = {
    DATA : API_URL + "players", // ?page= & size=
    IMG : API_URL + "images/players",

    // -----------------------------------
    // (1) STATS PLAYER
    // -----------------------------------
    ALL_STATS: API_URL + "stats_player/all_aggregated_stats", // ?player_id=
    ALL_STATS_PER_SEASON: API_URL + "stats_player/all_aggregated_stats_per_season", // ?player_id=
    ALL_STATS_PER_CLUB: API_URL + "stats_player/all_aggregated_stats_per_club", // ?player_id=

    // -----------------------------------
    // (2) STATS PLAYER : LEAGUE (ALL SEASONS) / LEAGUE (SELECTED SEASON) 
    // -----------------------------------
    // ALL TIME BEST (STRIKER, PLAYMAKER, GOALKEEPER) : ?league_id=
    ALL_TIME_BEST_STRIKER : API_URL + "stats_player/all_time_best_strikers", // ?league_id= 
    ALL_TIME_BEST_PLAYMAKER : API_URL + "stats_player/all_time_best_playmakers", // ?league_id=
    ALL_TIME_BEST_GOALKEEPER : API_URL + "stats_gk_player/all_time_best_goalkeepers", // ?league_id=
    
    // BEST BY SEASON (STRIKER, PLAYMAKER, GOALKEEPER) : ?league_id= &season=
    BEST_STRIKER_BY_SEASON : API_URL + "stats_player/best_strikers", // ?league_id= &season=
    BEST_PLAYMAKER_BY_SEASON : API_URL + "stats_player/best_playmakers", // ?league_id= &season=
    BEST_GOALKEEPER_BY_SEASON : API_URL + "stats_gk_player/best_goalkeepers", // ?league_id= &season=

    // -----------------------------------
    // (3) STATS PLAYER : SELECTED CLUB (ALL SEASONS)
    // -----------------------------------
    // BEST TOP 10 (STRIKER, PLAYMAKER, GOALKEEPER) : ?club_id= 
    BEST_TOP_10_STRIKERS : API_URL + "stats_player/total_best_10_strikers_by_club", // ?club_id=
    BEST_TOP_10_PLAYMAKERS : API_URL + "stats_player/total_best_10_playmakers_by_club", // ?club_id=
    BEST_TOP_10_GOALKEEPERS : API_URL + "stats_gk_player/total_best_10_gk_players_by_club", // ?club_id=

    // ALL PLYAERS : ?club_id=
    ALL_PLAYERS_IN_CLUB : API_URL + "stats_player/total_players_by_club", // ?club_id= , ?player_id=
    ALL_GK_PLAYERS_IN_CLUB : API_URL + "stats_gk_player/total_gk_players_by_club", // ?club_id= , ?player_id=

    // ALL PLAYERS BY CLUB (+ SEASON)
    ALL_PLAYERS_IN_CLUB_BY_SEASON : API_URL + "stats_player/club_all_players", // ?club_id= &season=
}

export { LEAGUES, CLUBS, PLAYERS, NATIONALITIES } 

