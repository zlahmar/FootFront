import {Link} from "react-router-dom";
import image from '../assets/icon/Line Icon 1.png';

function LienMenu({lien, texte, image}){
    return (
        <Link  to={lien} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-eerieBlack">
            <img alt={texte} className="w-10 h-10" src={image} />
            <Link  to={lien}  className="ml-3 font-title font-medium self-center text-tiffanyBlue hover:underline text-xl">{texte}</Link>
        </Link>
    )
}

export default LienMenu