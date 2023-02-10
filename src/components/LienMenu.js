import {Link} from "react-router-dom";

function LienMenu({lien, texte}){
    return (
        <li>
            <img alt={texte} className="h-auto max-w-full" src="../assets/logo192.svg" />
            <Link  to={lien}  className="font-medium text-tiffanyBlue hover:underline ">{texte}</Link>
        </li>
    )
}

export default LienMenu