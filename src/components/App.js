import MenuLateral from "./MenuLateral";
import {Routes, Route} from "react-router-dom";
import Ligue from "./Ligue";
import Club from "./Club";
import { useParams } from "react-router-dom";

function App() {
    return (
        <div className="flex ">
            <MenuLateral/>
            <Routes>
                <Route path="ligue" element={<Ligue />} />
                <Route path="ligue/:id" element={<LigueOuClub />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </div>
    )
}

function NoMatch() {
    return (<div>Not Found</div>);
}
function LigueOuClub() {
    const { id } = useParams();
    if (id === "ligue1") {
        return <Club id="2" />;
    } else {
        return <Ligue />;
    }
}
export default App