import '../styles/index.css'
import LienMenu from "./LienMenu";
import logo from '../assets/icon/Line Icon 12.png';
import ligue from '../assets/icon/Line Icon 26.png';
import club from '../assets/icon/Line Icon 25.png';
import joueur from '../assets/icon/Line Icon 8.png';



function MenuLateral(){
    return (
        <div className="h-screen lg:w-2/12 md:w-1/12 sm:w-1/12 pr-3">
            <div className="w-full h-1/6 bg-gunMetal text-center flex justify-center pt-6  rounded-tr-3xl" >
                <h1 className="pr-3 text-tiffanyBlue font-title text-4xl"> FootStat </h1>
                <img className="w-10 h-10" alt="logo" src={logo}  />
            </div>

            <div className="w-full h-full rounded-br-3xl bg-gunMetal">
                <nav className="h-full">
                    <ul className=" h-full flex flex-col justify-center text-center space-y-10">
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