// CSS
import '../../styles/index.css'

// React
import { QueryClient, QueryClientProvider,  useQueries } from "react-query"

// API / DATA
import {CLUBS} from "../../data/Api"
import { getIdFromUrl } from '../../data/Arrays';
import ClubCarte from '../carte/club/ClubCarte';

// Components
import LoadingCarte from "../carte/LoadingCarte";

// -----------------------
// 1) QUERY CLIENT
// -----------------------
const queryClient = new QueryClient()

// -----------------------
// 2) QUERY CLIENT PROVIDER
// -----------------------
export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Club/>
        </QueryClientProvider>
    )
}

// -----------------------
// 3) CLUB COMPONENT
// -----------------------
function Club() {
    const club_id = getIdFromUrl("clubs");

    // ---------------------------------------------
    // 3-1) USE QUERIES : FETCHING DATA FROM API
    // ---------------------------------------------
    const resultQueries = useQueries(
        [
            { queryKey: ['club',1], queryFn: () => fetch(CLUBS.DATA+'/'+club_id).then(res => res.json())},
        ]
    )

    // ---------------------------------------------
    // 3-2) LOADING / ERROR
    // ---------------------------------------------
    let isLoading = false;
    let isError = false;

    resultQueries.forEach(query => {
        if (query.isLoading) {
            isLoading = true;
        }

        if (query.isError) {
            isError = true;
        }    
    });

    if (isLoading) return 
        (
        <div className="lg:h-screen md:h-full sm:h-full sm:ml-64 flex flex-col justify-between border-2 border-eerieBlack pt-3 pb-3">
                <LoadingCarte/>
        </div>
        )

    if (isLoading) return 'An error has occured '

    // ---------------------------------------------
    // 3-3) SUCCESS
    // --------------------------------------------- 

    // (1) DATA : DATA FROM API
    const club = resultQueries[0].data;

    return (
        <div className="lg:h-screen md:h-full sm:h-full xl:ml-64 flex flex-col justify-between border-2 border-eerieBlack">
        <div className="lg:flex lg:flex-row sm:max-md:flex-col pt-3">
            <div className="basis-2/6 w-full pr-1 mb-5">
                <ClubCarte key={club.id} club={club} clubs_img_url={CLUBS.IMG} isDisabled={true}/>
            </div>      
        </div>
    </div>
    )
}

