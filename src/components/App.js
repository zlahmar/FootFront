import MenuLateral from "./MenuLateral";
import {Routes, Route} from "react-router-dom";
import Ligue from "./menu/Ligue";
import Club from "./menu/Club";
import { useState } from 'react';
import MenuPrincipal from "./MenuPrincipal";
import SideBar from "./SideBar";
function App() {
    const [visible, setVisible] = useState(false);
    const handleButton = () => {
        let drawer = document.getElementById("logo-sidebar");
        drawer.classList.toggle("translate-x-1");
        setVisible((visible) => !visible);
    }
    const desactiveSidebar = () => {
        if (visible) {
            let drawer = document.getElementById("logo-sidebar");
            drawer.classList.toggle("translate-x-1");
            setVisible((visible) => !visible);
        }
    }
    return (
            <div>
                <SideBar onChildClick={handleButton}/>
                <MenuPrincipal onChildClick={desactiveSidebar}/>
            </div>
        // <div className="flex h-screen overflow-y-hidden bg-[url('/src/assets/arriere_plan/site.png')] bg-cover bg-center bg-no-repeat">
        //     <MenuLateral/>
        //     <Routes>
        //         <Route path="ligue" element={<Ligue />} />
        //         <Route path="ligue/:id" element={<Club />} />
        //         <Route path="*" element={<NoMatch />} />
        //     </Routes>
        // </div>
    )
}

function NoMatch() {
    return (<div>Not Found</div>);
}

export default App