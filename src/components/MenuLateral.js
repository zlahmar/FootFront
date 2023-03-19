import '../styles/index.css'
import LienMenu from "./LienMenu";
import logo from '../assets/icon/logo.png';
import ligue from '../assets/icon/ligue.png';
import club from '../assets/icon/club.png';
import joueur from '../assets/icon/joueur.png';


function MenuLateral(){
    return (
        <div className="lg:w-2/12 md:w-3/12 sm:w-0 pr-3 pt-3">
            <div className="h-2/6 bg-gunMetal text-center flex justify-center pt-6 rounded-tr-3xl" >
                <h1 className="pr-3 text-tiffanyBlue font-title text-4xl"> FootStat </h1>
                <img className="w-10 h-10" alt="logo" src={logo}  />
            </div>

            <div className="h-4/6 rounded-br-3xl bg-gunMetal ">
                <nav className="h-full">
                    <ul className=" h-full flex flex-col justify-around text-center space-y-10">
                        <LienMenu lien="/ligue" texte="Ligue" image={ligue}></LienMenu>
                        <LienMenu lien="/club" texte="Club" image={club}></LienMenu>
                        <LienMenu lien="/joueur" texte="Joueur" image={joueur}></LienMenu>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default MenuLateral