import logo from '../assets/icon/logo.png';
import ligue from '../assets/icon/ligue.png';
import club from '../assets/icon/fc.png';
import joueur from '../assets/icon/joueur.png';
import annonce from '../assets/icon/annonce.png';
import LienMenu from "./LienMenu";
import '../styles/index.css'
import {Link} from "react-router-dom";


function SideBar({onChildClick, visible}){
    return(
        <div className='bg-eerieBlack'>
            <button id="toggle-sidebar" onClick={onChildClick} data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="z-50 absolute top-2 right-7 p-2 mt-6 ml-3 text-sm  rounded-lg focus:outline-none focus:ring-2">
            {visible ? (<svg id="toggle-sidebar__open"  className="w-6 h-6" aria-hidden="true" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                        </svg> 
                        ) : 
                        (<svg id="toggle-sidebar__close" className="w-6 h-6 text-white" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
            )}
            </button>

            <aside id="logo-sidebar" className="w-72 fixed top-0 left-0 z-40 h-screen transition-transform -translate-x-full" aria-label="Sidebar">
                <div className="h-full px-3 py-4 flex flex-col overflow-y-auto bg-eerieBlack border-r-2 border-tiffanyBlue">
                    <div className="flex items-center pl-2.5 mb-20 mt-5">
                        <Link to='/' className='flex'>
                            <img src={logo} className="mr-3 h-11" alt="FOOT Logo" />
                            <span className="font-title self-center text-3xl whitespace-nowrap text-tiffanyBlue uppercase">FootStat</span>
                        </Link>
                    </div>
                    <ul className="space-y-10">
                        <li>
                            <LienMenu lien="/ligues" texte="Ligues" image={ligue}></LienMenu>
                        </li>
                        <li>
                            <LienMenu lien="/clubs" texte="Clubs" image={club}></LienMenu>
                        </li>
                        <li>
                            <LienMenu lien="/joueurs" texte="Joueurs" image={joueur}></LienMenu>                        
                        </li>
                        <li className="absolute w-full bottom-10 pr-[2rem]">
                            <LienMenu lien="/a_propos" texte="A propos" image={annonce}></LienMenu>    
                        </li>   
                    </ul>
                </div>
            </aside>
        </div>
    )
}

export default SideBar