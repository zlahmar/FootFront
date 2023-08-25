// CSS
import '../../styles/index.css'

// API, DATA
import { getIdFromUrl } from '../../data/Arrays';

export default function JoueurGardien() {
    const player_id = getIdFromUrl('gardiens')

    return (
        <div>
            <h1 className='text-white'>JoueurGardien : {player_id}</h1>
        </div>
    );
}