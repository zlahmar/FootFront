import Pays from "./Pays";
import {Outlet} from "react-router-dom";


function Ligue() {
    return (
        <div className="bg-tiffanyBlue h-screen lg:w-10/12 md:w-11/12 sm:w-11/12 flex flex-col text-center justify-center px-1 ">
            <div>Ligue</div>
            <div className=" h-4/5  ">
                <div className=" bg-onyx w-full h-full flex flex-row justify-center text-center space-x-10 ">

                    <Pays nom="Ligue 1" logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQhohAwF97EX86XVHSQnlM2bqSPPqfcZoEh9tW3CoUWu_1hRGQhhU5MX-aSgyiKS0u5bs&usqp=CAU" lien="ligue1"/>
                    <Pays nom="Liga" logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQhohAwF97EX86XVHSQnlM2bqSPPqfcZoEh9tW3CoUWu_1hRGQhhU5MX-aSgyiKS0u5bs&usqp=CAU" lien="liga"/>
                    <Pays nom="Premier League" logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQhohAwF97EX86XVHSQnlM2bqSPPqfcZoEh9tW3CoUWu_1hRGQhhU5MX-aSgyiKS0u5bs&usqp=CAU" lien="premierleague"/>
                    <Pays nom="Serie A" logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQhohAwF97EX86XVHSQnlM2bqSPPqfcZoEh9tW3CoUWu_1hRGQhhU5MX-aSgyiKS0u5bs&usqp=CAU" lien="seriea"/>
                    <Pays nom="BundesLiga" logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQhohAwF97EX86XVHSQnlM2bqSPPqfcZoEh9tW3CoUWu_1hRGQhhU5MX-aSgyiKS0u5bs&usqp=CAU" lien="bundesliga"/>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Ligue