import {Link} from "react-router-dom";
import image from '../assets/icon/Line Icon 1.png';


function LienMenu({lien, texte}){
    return (
        <li>
            <img alt={texte} className="h-auto max-w-full" src={image} width="10px;"/>
            <Link  to={lien}  className="font-medium text-tiffanyBlue hover:underline ">{texte}</Link>
        </li>
    )
}

export default LienMenu