import { useParams } from "react-router-dom";
import TicketTable from "../components/TicketTable";
import './ticketList.css';

const TicketList = () => {

    let { category } = useParams();
    
    category = category.toLowerCase();
    
    return (
        <div>
            <div className="banner">
                <h1>Tickets</h1>
                <button>+</button>
            </div>
            <TicketTable title="Solicitud" color="red" data={[]} />
            <TicketTable title="En Espera" color="yellow" data={[]} />
            <TicketTable title="Trabajando" color="green" data={[]} />
        </div>
    )
}

export default TicketList;