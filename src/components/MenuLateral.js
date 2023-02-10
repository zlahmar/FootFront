import '../styles/index.css'
import LienMenu from "./LienMenu";
function MenuLateral(){
    return (
        <div className="h-screen w-3/12">
            <div className="w-full h-2/6 bg-odysseus" >
                <h1> Titre </h1>
            </div>

            <div className="w-full h-4/6 bg-aias">
                <nav>
                    <ul>
                        <LienMenu lien="/" texte="Home" ></LienMenu>
                        <LienMenu lien="/Animaux" texte="Nos Animaux" ></LienMenu>
                        <LienMenu lien="/survey" texte="Nous Contacter" ></LienMenu>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default MenuLateral