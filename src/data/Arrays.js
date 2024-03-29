// BarGroupedChart
export const getLeagueArrayTotalData = (obj_array) => {
    let array = obj_array.map(value => ( 
                {league : value.name + ' (' + value.allMatches + ' Mts)',
                 goal : value.allGoals,
                 assist : value.allAssists,
                }));
    return array
}

// CircleGroupedChart
export const getLeagueArrayTotalCardsData = (obj_array) => {
    let array = obj_array.map(value => ( 
                {league : value.name + ' (' + value.allMatches + ' Mts)',
                 yellowcard : value.allYellowCards,
                 redcard : value.allRedCards,
                }));
    return array
}

// BumpChart
export const getLeagueArrayRankByYear = (obj_array, league) => {
    let array = obj_array.map(value => value.league.name === league ? 
                {x : value.year, y : value.rank} : null);
    array = array.filter(value => value !== null)
    return array
}

// WaffleChart
export const getBestClubBySeason = (obj_array) => {
    const data = {}
    let best_club_array = obj_array.reduce((previous,current) => {

        let club = current.clubName
        if(!previous.hasOwnProperty(club)){
            previous[club] = 0;
        }
        previous[club]++;
        return previous
    },{})

    const array2=Object.keys(best_club_array).map(club => {
        const season_list=[]
        obj_array.forEach(value => {
            if(value.clubName === club){
                season_list.push(value.season)
                data[club] = {
                    id : club,
                    label : club,
                    value : season_list.length,
                    season : season_list
                }
            }
        }) 
        return data[club]
    })
    return array2
}

// TreeMapChart
export const getNationalities = (obj_array) => {
    let result = {}
    let array = obj_array.map(value => ({
            
            nationality : value.nationalityName,
            numberOfPlayers: value.nbNationalities
            
    }))

    result = {
        nationality : obj_array[0].leagueName,
        children : array
    }
    return result
}

// getIdFromUrl
export const getIdFromUrl = (value) => {
    const url = new URL(window.location.href);
    const path = url.pathname.split('/')
    const index = path.indexOf(value)

    const id = path[index+1]
    return id;
}

// generateSeason
export function generateSeason(season, numberOfSeasons) {
    const seasonsArray=[];
    const [startYear, endYear] = season.split('-').map(Number);
  
    for (let i=0; i<numberOfSeasons; i++) {
      const currentStartYear = startYear + i;
      const currentEndYear = endYear + i;
  
      seasonsArray.push(`${currentStartYear}-${currentEndYear}`);
    }
  
    return seasonsArray;
}

// getClubRankingForSeasons
export const getClubRankingForSeasons = (obj_array, startSeason, numberOfSeasons) => {
    const seasons = generateSeason(startSeason,numberOfSeasons)
    const season_map_for_club = new Map()

    seasons.forEach(season => {
        season_map_for_club.set(season, { rank: null})
    })

    obj_array.forEach(value => {
        season_map_for_club.set(value.season, { rank: value.rank})
    })

    const season_list_for_club= Array.from(season_map_for_club, ([season, value]) => ({season, ...value}))

    return season_list_for_club
}

export const sortByName = (obj_array) => {
    obj_array.sort((a,b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if(nameA < nameB){
            return -1
        } 
        else if(nameA > nameB){
            return 1
        } else {   
            return 0
        }
    })
}
