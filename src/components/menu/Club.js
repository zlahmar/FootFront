// CSS
import '../../styles/index.css'

// React
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { QueryClient, QueryClientProvider,  useQueries } from "react-query"

// API / DATA
// import LEAGUES from "../../data/Api"

// MUI
import MuiTabs from "../mui_component/MuiTabs";

// Components
import ClubCarte from "../carte/ClubCarte";
import BlocCarte from '../bloc/BlocCarte';
import BlocTitre from '../bloc/BlocTitre';
import BlocContent from '../bloc/BlocContent';

export default function Club() {
    const { ligue_id } = useParams();
    console.log("ligue_id", ligue_id)

    return (
        <div className="lg:h-screen md:h-full sm:h-full sm:ml-64 flex flex-col justify-between border-2 border-eerieBlack">
            <div className="lg:flex lg:flex-row sm:max-md:flex-col">
                <div className="basis-2/6 w-full pr-1">
                    <ClubCarte/>
                </div>    
                <div className="basis-4/6  w-full pr-1">
                    <ClubCarte/>
                </div>    
            </div>
            <div className="lg:flex lg:flex-row sm:max-md:flex-col" >
                <div className="basis-6/6 w-full pr-1">
                    <BlocContent>
                        <MuiTabs>
                            <div className="2xl:w-[50rem] xl:w-[40rem] lg:w-[25rem] md:w-0 sm:w-0 max-[767px]:w-0 h-48 flex flex-col justify-center">
                                    <h3 className='flex items-center text-white pb-3 max-[1023px]:hidden'> 
                                        {/* <img className="w-12 h-12 mr-3"/> */}
                                        1
                                    </h3>
                            </div>
                            <div className="2xl:w-[50rem] xl:w-[40rem] lg:w-[25rem] md:w-0 sm:w-0 max-[767px]:w-0 h-48 flex flex-col justify-center">
                                    <h3 className='flex items-center text-white pb-3 max-[1023px]:hidden'> 
                                        {/* <img className="w-12 h-12 mr-3"/> */}
                                        2
                                    </h3>
                            </div>
                            <div className="2xl:w-[50rem] xl:w-[40rem] lg:w-[25rem] md:w-0 sm:w-0 max-[767px]:w-0 h-48 flex flex-col justify-center">
                                    <h3 className='flex items-center text-white pb-3 max-[1023px]:hidden'> 
                                        {/* <img className="w-12 h-12 mr-3"/> */}
                                        3
                                    </h3>
                            </div>                                        
                        </MuiTabs>
                    </BlocContent>
                </div>
                <div className="basis-6/6 w-full pl-1">
                    <BlocContent>
                        <MuiTabs>
                            <div className="2xl:w-[50rem] xl:w-[40rem] lg:w-[25rem] md:w-0 sm:w-0 max-[767px]:w-0 h-48 flex flex-col justify-center">
                                    <h3 className='flex items-center text-white pb-3 max-[1023px]:hidden'> 
                                        {/* <img className="w-12 h-12 mr-3"/> */}
                                        1
                                    </h3>
                            </div>
                            <div className="2xl:w-[50rem] xl:w-[40rem] lg:w-[25rem] md:w-0 sm:w-0 max-[767px]:w-0 h-48 flex flex-col justify-center">
                                    <h3 className='flex items-center text-white pb-3 max-[1023px]:hidden'> 
                                        {/* <img className="w-12 h-12 mr-3"/> */}
                                        2
                                    </h3>
                            </div>
                            <div className="2xl:w-[50rem] xl:w-[40rem] lg:w-[25rem] md:w-0 sm:w-0 max-[767px]:w-0 h-48 flex flex-col justify-center">
                                    <h3 className='flex items-center text-white pb-3 max-[1023px]:hidden'> 
                                        {/* <img className="w-12 h-12 mr-3"/> */}
                                        3
                                    </h3>
                            </div>                                        
                        </MuiTabs>
                    </BlocContent>
                </div>
            </div>
            <BlocTitre text="Cliquez un club que vous voulez voir"/>
            <BlocCarte width_basis={6}>
                <ClubCarte/>
                <ClubCarte/>
                <ClubCarte/>
                <ClubCarte/>
                <ClubCarte/>
                <ClubCarte/>
                <ClubCarte/>
                <ClubCarte/>
                <ClubCarte/>
                <ClubCarte/>
                <ClubCarte/>
                <ClubCarte/>
                <ClubCarte/>
                <ClubCarte/>
                <ClubCarte/>
                <ClubCarte/>
                <ClubCarte/>
                <ClubCarte/>
                <ClubCarte/>
                <ClubCarte/>
                <ClubCarte/>
                <ClubCarte/>
                <ClubCarte/>
                <ClubCarte/>
                <ClubCarte/>
                <ClubCarte/>
                <ClubCarte/>
                <ClubCarte/>
                <ClubCarte/>
                <ClubCarte/>
                <ClubCarte/>
                <ClubCarte/>
                <ClubCarte/>
                <ClubCarte/>
                <ClubCarte/>
                <ClubCarte/>    
                <ClubCarte/>
                <ClubCarte/>
                <ClubCarte/>
                <ClubCarte/>
                <ClubCarte/>
                <ClubCarte/>                
            </BlocCarte>
        </div>
    )
}


// import LEAGUES from "../../data/Api"
// import {Component} from "react";

// const league_id = window.location.pathname.slice(-1);
// const LEAGUE = `${LEAGUES.DATA}/${league_id}`;

// class Club extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             nationalityData: {},
//             clubs: [] // Ajout de la propriété "clubs" initialisée à une liste vide
//         };
//     }


//     componentDidMount() {
//         this.fetchNationalityData();
//     }

//     fetchNationalityData() {
//         fetch(LEAGUE)
//             .then(response => response.json())
//             .then(data => {
//                 const nameOriginal = data.nationality.name_original;
//                 const name = data.name;
//                 const clubs = data.clubs; // Extraction de la liste des clubs
//                 this.setState({ nationalityData: { nameOriginal, name }, clubs }); // Mise à jour de l'état avec la liste des clubs
//             })
//             .catch(error => console.error(error));
//     }

//     render() {
//         return (
//             <div className="lg:h-screen md:h-full sm:h-full sm:ml-64 flex flex-col justify-between border-2 border-eerieBlack">
//                 <div className=" bg-tiffanyBlue h-full ">
//                     <p>Pays : {this.state.nationalityData.nameOriginal}</p>
//                     <p>Nom championnat : {this.state.nationalityData.name}</p>
//                 </div>

//                 <div className=" bg-tiffanyBlue">
//                     <ul className="list-disc ">
//                         {this.state.clubs.map(club => (
//                             <li className="" key={club.id}>{club.name}</li>
//                         ))}
//                     </ul>

//                 </div>


//             </div>
//         );
//     }
// }

// export default Club;