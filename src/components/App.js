import MenuLateral from "./MenuLateral";
import {Routes, Route} from "react-router-dom";
import Ligue from "./Ligue";
import Club from "./Club";



function App() {
    return (
        <div className="flex ">
            <MenuLateral/>
            <Routes>
                <Route path="ligue" element={<Ligue/>} >
                    <Route path="ligue1" element={<Club id="1"/>} />
                </Route>
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </div>
    )
}

function NoMatch() {
    return (<div>Not Found</div>);
}
export default App