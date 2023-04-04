import {Routes, Route} from "react-router-dom";
import Ligue from "./menu/Ligue";
import Club from "./menu/Club";
import { useState } from 'react';
import SideBar from "./SideBar";
function App() {
    // ----------------------------------
    // Button to open/close the Sidebar
    // ----------------------------------
    const [visible, setVisible] = useState(true);
    const handleButton = () => {
        let drawer = document.getElementById("logo-sidebar");
        drawer.classList.toggle("translate-x-0");
        setVisible((visible) => !visible);
    }
    return (
            <div className="pl-2 pr-2 h-screen bg-[url('/src/assets/arriere_plan/site.png')] bg-no-repeat bg-cover overflow-y-auto overflow-hidden">
                <SideBar onChildClick={handleButton} visible={visible}/>

                <Routes>
                    <Route path="ligue" element={<Ligue/>}/>
                    <Route path="ligue/:id" element={<Club />} />
                </Routes>
            </div>
    )
}
export default App