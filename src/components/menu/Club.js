// CSS
import '../../styles/index.css'

// React
import { QueryClient, QueryClientProvider,  useQueries } from "react-query"

// API / DATA
import { getIdFromUrl } from '../../data/Arrays';

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

    return (
        <h1>Hello !</h1>
    )
}

