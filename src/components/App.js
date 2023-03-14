import MenuLateral from "./MenuLateral";
import {Routes, Route} from "react-router-dom";
import Ligue from "./menu/Ligue";
import Club from "./Club";
import { useParams } from "react-router-dom";

function App() {
    return (
        <div className="flex overflow-y-hidden bg-[url('/src/assets/arriere_plan/site.png')] bg-cover bg-center bg-no-repeat">
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