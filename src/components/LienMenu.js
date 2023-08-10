import {Link} from "react-router-dom";

function LienMenu({lien, texte, image}){
    return (
        <Link  to={lien} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-eerieBlack">
            <img alt={texte} className="w-7 h-7" src={image} />
            <Link  to={lien}  className="ml-3 font-content text-white self-center hover:underline text-2xl uppercase">{texte}</Link>
        </Link>
    )
}

export default LienMenu