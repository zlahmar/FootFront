// React
import { useState, useEffect } from 'react';

// MUI
import { Box, Collapse } from '@mui/material';
import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';

// Constants
import { COLOR, LEAGUE } from '../../data/Constants';

// Components
import ClubsDansLigueElement from '../utility/ClubsDansLigueElement';
import BlocTitre from '../bloc/BlocTitre';
import LoadingCarte from '../carte/LoadingCarte';

// API
import { LEAGUES, CLUBS } from '../../data/Api';

// Axios
import axios from 'axios'

export default function Clubs() {
    const [open, setOpen] = useState([false,false,false,false,false]);
    const [clubsInLeague, setClubsInLeague] = useState([])

    // -------------------
    // (0) INIT DATA - LEAGUE & CLUBS
    // -------------------
    useEffect(() => {
        const fetchApiLeagueClubs = async () => {
            const response = await axios.get(LEAGUES.DATA)

            if (response.status === 500) {
                return;
            }
            setClubsInLeague(response.data)
        }
        fetchApiLeagueClubs()
    }, [])

    const leagues = [
        ClubsDansLigueElement.create3ClubsInEachLeague(LEAGUE.ENGLAND),
        ClubsDansLigueElement.create3ClubsInEachLeague(LEAGUE.FRANCE),
        ClubsDansLigueElement.create3ClubsInEachLeague(LEAGUE.GERMANY),
        ClubsDansLigueElement.create3ClubsInEachLeague(LEAGUE.SPAIN),
        ClubsDansLigueElement.create3ClubsInEachLeague(LEAGUE.ITALY),
    ]
    
    const handleOpenClick = (index) => {
        if (open[index] === true) {
            const newOpen = [...open];
            newOpen[index] = false;
            setOpen(newOpen);
            return
        }

        const newOpen = [...open];
        newOpen[index] = true;
        setOpen(newOpen);
    }

    return (
        <div className=" flex flex-col h-screen max-md:h-full">
            <BlocTitre title="Les 3 clubs dans une ligue "/> 
            <div className='mx-5 p-5 h-full max-md:h-screen'>
                <div className='flex md:flex-wrap max-md:flex-col h-full justify-center items-center'>
                    {leagues.map((league,index) => (
                        <div className='basis-1/3 flex justify-center h-1/2 p-3'>
                            <Box>
                                <List sx={{ width : 350, backgroundColor: COLOR.EERIEBLACK, borderBottom:"solid #A8E1DC"}}>
                                    <ListItem divider>
                                        <ListItemButton onClick={() => handleOpenClick(index)}>
                                            <img className='w-12 h-12 mr-3' src={`${LEAGUES.IMG}/${league.league_name}`} alt={league.league_name}/>
                                            <ListItemIcon sx={{ color : COLOR.WHITE, fontSize : "1.5rem" }}>{">"}</ListItemIcon>
                                            <ListItemText sx={{ color : COLOR.WHITE, fontSize : "1.5rem" }} disableTypography primary={league.league_name} />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                                <Collapse in={open[index]}>
                                    <List sx={{backgroundColor: COLOR.EERIEBLACK}}>
                                        {league.clubs_id_array.map(club_id => { 
                                            
                                            if (clubsInLeague.length == 0) {
                                                return (
                                                    <div className="h-screen flex flex-col justify-between border-2 border-eerieBlack pt-3 pb-3">
                                                      <LoadingCarte />
                                                    </div>
                                                  );
                                            }

                                            const club = clubsInLeague[index].clubs.find(club => club.id === club_id)
                                            
                                            return(
                                            <ListItem>
                                                <ListItemButton href={`/ligues/${index+1}/clubs/${club.id}`}>
                                                    <img className='w-12 h-12 mr-3' src={`${CLUBS.IMG}/${club.name}`} alt={club.name}/>
                                                    <ListItemText sx={{ color : COLOR.WHITE, fontSize : "1rem" }} disableTypography primary={club.name} />
                                                </ListItemButton>
                                            </ListItem>)
                                        })}                                                                                                        
                                    </List>
                                </Collapse>
                            </Box>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}