import {Link} from "react-router-dom";


function Pays({nom, logo, lien}){
    return (
        <Link className="flex flex-col items-center justify-center " to={lien}>
            <img className=" w-4/5 h-2/5" src={logo} alt={logo} />
            <div>{nom}</div>
        </Link>

    )
}

export default Pays