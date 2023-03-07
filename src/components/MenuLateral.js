import '../styles/index.css'
import LienMenu from "./LienMenu";
function MenuLateral(){
    return (
        <div className="bg- h-screen lg:w-2/12 md:w-1/12 sm:w-1/12 pr-3">
            <div className="w-full h-1/6 bg-gunMetal text-center flex flex-col justify-center" >
                <h1 className=" text-tiffanyBlue" > FootStat </h1>
                <img className="w-100" alt="logo" src="../assets/logo192.png" />
            </div>

            <div className="w-full h-5/6 bg-gunMetal">
                <nav className=" h-full">
                    <ul className=" h-full flex flex-col justify-center text-center space-y-10 ">
                        <LienMenu lien="/ligue" texte="Ligue" ></LienMenu>
                        <LienMenu lien="/club" texte="Club" ></LienMenu>
                        <LienMenu lien="/joueur" texte="Joueur" ></LienMenu>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default MenuLateral