// CSS
import '../../styles/index.css'

// API, DATA
import { getIdFromUrl } from '../../data/Arrays';

export default function Joueur() {
    const player_id = getIdFromUrl('joueurs')

    return (
        <div>
            <h1 className='text-white'>Joueur : {player_id}</h1>
        </div>
    );
}