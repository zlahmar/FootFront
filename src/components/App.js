import MenuLateral from "./MenuLateral";
import {Routes, Route} from "react-router-dom";
import Ligue from "./menu/Ligue";
import Club from "./menu/Club";

function App() {
    return (
        <div className="flex h-screen overflow-y-hidden bg-[url('/src/assets/arriere_plan/site.png')] bg-cover bg-center bg-no-repeat">
            <MenuLateral/>
            <Routes>
                <Route path="ligue" element={<Ligue />} />
                <Route path="ligue/:id" element={<Club />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </div>
    )
}

function NoMatch() {
    return (<div>Not Found</div>);
}

export default App