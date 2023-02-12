import {Link} from "react-router-dom";

function LienMenu({lien, texte}){
    return (
        <li  className="flex items-center justify-center" >
            <img alt={texte} className="h-1/5 w-1/5" src="https://drive.google.com/uc?export=view&id=1FQ4YldL0FVFGamhg1mbUlAQBbm7iBS0_" />
            <Link  to={lien}  className="font-medium text-tiffanyBlue hover:underline ">{texte}</Link>
        </li>
    )
}

export default LienMenu