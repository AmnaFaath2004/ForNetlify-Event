import Caro from "../components/caro"
import Events from "./events"

function Home({events}){
    return(
        <>
        <Caro/>
        <Events events={events}/>
        </>
    )
}
export default Home



