const API_URL = "https://footstatsapi.sangmin.fr/api/"

const LEAGUES = {
    DATA : API_URL + "leagues",
    RANKING : API_URL + "rankings_league",
    IMG : API_URL + "images/leagues",
    TOTAL : API_URL + "stats_league_club/total",
    NATIONALITIES : API_URL + "stats_league_club/nationalities_by_season", // ?league_id= &season=
}

const CLUBS = {
    DATA : API_URL + "clubs",
    IMG : API_URL + "images/clubs",
    ALL_TIME_BEST : API_URL + "stats_league_club/all_time_best_clubs", // ?league_id=
    BEST_BY_SEASON : API_URL + "stats_league_club/best_clubs", // ?league_id= &season=
}

const PLAYERS = {
    DATA : API_URL + "players",
    IMG : API_URL + "images/players",
    ALL_TIME_BEST_STRIKER : API_URL + "stats_player/all_time_best_strikers", // ?league_id= 
    ALL_TIME_BEST_PLAYMAKER : API_URL + "stats_player/all_time_best_playmakers", // ?league_id=
    ALL_TIME_BEST_GOALKEEPER : API_URL + "stats_gk_player/all_time_best_goalkeepers", // ?league_id=
    BEST_STRIKER_BY_SEASON : API_URL + "stats_player/best_strikers", // ?league_id= &season=
    BEST_PLAYMAKER_BY_SEASON : API_URL + "stats_player/best_playmakers", // ?league_id= &season=
    BEST_GOALKEEPER_BY_SEASON : API_URL + "stats_gk_player/best_goalkeepers", // ?league_id= &season=
}

export { LEAGUES, CLUBS, PLAYERS } 

