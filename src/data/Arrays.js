export const getLeagueArrayTotalData = (obj_array) => {
    let array = obj_array.map(value => ( 
                {league : value.name + ' (' + value.allMatches + ' Mts)',
                 goal : value.allGoals,
                 assist : value.allAssists,
                }));
    return array
}

export const getLeagueArrayTotalCardsData = (obj_array) => {
    let array = obj_array.map(value => ( 
                {league : value.name + ' (' + value.allMatches + ' Mts)',
                 yellowcard : value.allYellowCards,
                 redcard : value.allRedCards,
                }));
    return array
}

export const getLeagueArrayRankByYear = (obj_array, league) => {
    let array = obj_array.map(value => value.league.name === league ? 
                {x : value.year, y : value.rank} : null);
    array = array.filter(value => value !== null)
    return array
}
