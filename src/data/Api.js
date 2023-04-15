const API_URL = "http://146.59.151.45:7777/api/"

const LEAGUES = {
    DATA : API_URL + "leagues",
    RANKING : API_URL + "rankings_league",
    IMG : API_URL + "images/leagues",
    TOTAL : API_URL + "stats_league_club/total",
}

const CLUBS = {
    DATA : API_URL + "clubs",
    IMG : API_URL + "images/clubs",
    ALL_TIME_BEST : API_URL + "stats_league_club/all_time_best_clubs",
    BEST_BY_SEASON : API_URL + "stats_league_club/best_clubs",
}

const PLAYERS = {
    DATA : API_URL + "players",
    IMG : API_URL + "images/players",
    ALL_TIME_BEST_STRIKER : API_URL + "stats_player/all_time_best_strikers",
    ALL_TIME_BEST_PLAYMAKER : API_URL + "stats_player/all_time_best_playmakers",
    ALL_TIME_BEST_GOALKEEPER : API_URL + "stats_gk_player/all_time_best_goalkeepers",
    BEST_STRIKER_BY_SEASON : API_URL + "stats_player/best_strikers",
    BEST_PLAYMAKER_BY_SEASON : API_URL + "stats_player/best_playmakers",
    BEST_GOALKEEPER_BY_SEASON : API_URL + "stats_gk_player/best_goalkeepers",
}

export { LEAGUES, CLUBS, PLAYERS } 

