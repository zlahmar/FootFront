import {Link} from "react-router-dom";
import image from '../assets/Icon/Line Icon 1.png';

function LienMenu({lien, texte, image}){
    return (
        <Link  to={lien} className="text-center flex justify-center hover:bg-eerieBlack hover:rounded-2xl">
            <img alt={texte} className="w-10 h-10" src={image} />
            <Link  to={lien}  className="ml-3 font-title font-medium self-center text-tiffanyBlue hover:underline">{texte}</Link>
        </Link>
    )
}

export default LienMenu