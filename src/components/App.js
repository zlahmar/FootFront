import MenuLateral from "./MenuLateral";
import {Routes, Route} from "react-router-dom";
import Survey from "./Survey";

function App() {
    return (
        <div className="flex">
            <MenuLateral/>
            <Routes>
                <Route path={"/survey"} element={<Survey/>} />
            </Routes>
        </div>
    )
}
export default App