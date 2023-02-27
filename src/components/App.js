import MenuLateral from "./MenuLateral";
import {Routes, Route} from "react-router-dom";
import Ligue from "./Ligue";

function App() {
    return (
        <div className="flex bg-aias">
            <MenuLateral/>
            <Routes>
                <Route path={"/ligue"} element={<Ligue/>} />
            </Routes>
        </div>
    )
}
export default App