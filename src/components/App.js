import MenuLateral from "./MenuLateral";
import {Routes, Route} from "react-router-dom";
import Ligue from "./menu/Ligue";

function App() {
    return (
        <div className="flex overflow-y-hidden bg-[url('/src/assets/arriere_plan/site.png')] bg-cover bg-center bg-no-repeat">
            <MenuLateral/>
            <Routes>
                <Route path={"/ligue"} element={<Ligue/>} />
            </Routes>
        </div>
    )
}
export default App