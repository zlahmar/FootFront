import MenuLateral from "./MenuLateral";
import {Routes, Route} from "react-router-dom";
import Ligue from "./menu/Ligue";

function App() {
    return (
        <div className="flex bg-eerieBlack">
            <MenuLateral/>
            <Routes>
                <Route path={"/ligue"} element={<Ligue/>} />
            </Routes>
        </div>
    )
}
export default App