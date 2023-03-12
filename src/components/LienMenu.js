import {Link} from "react-router-dom";

function LienMenu({lien, texte, image}){
    return (
        <Link  to={lien} className="text-center flex justify-center hover:bg-eerieBlack hover:rounded-2xl">
            <img alt={texte} className="w-10 h-10" src={image} />
            <Link  to={lien}  className="ml-5 font-title font-medium self-center text-tiffanyBlue hover:underline">{texte}</Link>
        </Link>
    )
}

export default LienMenu