export const getLeagueArrayTotalData = (obj_array) => {
    let array = obj_array.map(value => ( 
                {league : value.name + ' (' + value.totalMatches + ' Mts)',
                 goal : value.totalGoals,
                 assist : value.totalAssists,
                }));
    return array
}

export const getLeagueArrayRankByYear = (obj_array, league) => {
    let array = obj_array.map(value => value.league.name === league ? 
                {x : value.year, y : value.rank} : null);
    array = array.filter(value => value !== null)
    return array
}
