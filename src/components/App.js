// React
import {Routes, Route, useLocation} from "react-router-dom";
import { useEffect, useState } from 'react';

// Pages
import Ligues from "./menu/Ligues";
import ClubsDansLigue from "./menu/ClubsDansLigue";
import Club from "./menu/Club";
import APropos from "./menu/APropos";
import SideBar from "./SideBar";
import LandingPage from "./menu/LandingPage";
import Clubs from "./menu/Clubs";
import Joueurs from "./menu/Joueurs";

function App() {
    // ----------------------------------
    // Button to open/close the Sidebar
    // ----------------------------------
    const [visible, setVisible] = useState(true);
    const location = useLocation();

    const handleButton = () => {
        let drawer = document.getElementById("logo-sidebar");
        drawer.classList.toggle("translate-x-0");
        setVisible((visible) => !visible);
    }

    useEffect(() => {
        const main_div = document.getElementsByClassName("main-div");
        const pages_div = document.getElementsByClassName("pages-div");
        const logo_sidebar = document.getElementById("logo-sidebar")
        const toggle_sidebar = document.getElementById("toggle-sidebar");

        if (!visible) {
            logo_sidebar.style.pointerEvents="auto"
            toggle_sidebar.style.pointerEvents="auto"
            main_div[0].style.pointerEvents="none"
            pages_div[0].style.filter="blur(4px)"

        }
        else {
            main_div[0].style.pointerEvents="auto"
            toggle_sidebar.style.pointerEvents="auto"
            logo_sidebar.style.pointerEvents="none"
            pages_div[0].style.filter="blur(0px)"
        }

    }, [location, visible])
    return (
            <div className="main-div min-h-screen bg-[url('/src/assets/arriere_plan/site.png')] bg-no-repeat bg-cover overflow-x-hidden">
                <SideBar onChildClick={handleButton} visible={visible}/>
                <div className="pages-div">
                    <Routes>
                        {/*---------------------------
                        0) Page d'accueil -------------------
                        */}
                        <Route path="/" element={<LandingPage/>}/>
                        {/*---------------------------
                        1) Ligues -------------------
                        */}
                        <Route path="ligues" element={<Ligues/>}/>
                        <Route path="ligues/:ligue_id/clubs" element={<ClubsDansLigue/>}/>
                        <Route path="ligues/:ligue_id/clubs/:club_id" element={<Club/>}/>
                        
                        {/* --------------------------
                        2) Club -------------------
                        */}
                        <Route path="clubs" element={<Clubs/>}/>

                        {/* --------------------------
                        3) Joueur -------------------
                        */}
                        <Route path="joueurs" element={<Joueurs/>}/>

                        {/* --------------------------
                        4) A propos ----------------
                        */}
                        <Route path="a_propos" element={<APropos/>}/>
                    </Routes>
                </div>
            </div>
    )
}
export default App