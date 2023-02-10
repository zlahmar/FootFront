import {Link} from "react-router-dom";

function LienMenu({lien, texte}){
    return (
        <li>
            <Link  to={lien}  className="font-medium text-odysseus hover:underline xs:font-black">{texte}</Link>
        </li>
    )
}

export default LienMenu