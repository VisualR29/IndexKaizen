import { Link, useParams } from "react-router-dom";
import TicketTable from "../components/TicketTable";
import './ticketList.css';
import json from '../database/dataTicket.json';

const TicketList = () => {

    let { category } = useParams();
    category = category.toLowerCase();
    
    const data = json;//BORRAR DATOS DEL JSON

    const filteredTickets = data.filter((data) => {
        const categoryMatch = data.categoria === category;
        return categoryMatch;
    })

    const ticketsA = filteredTickets.filter((data) => {
        const tickets = data.estado_ticket === "Solicitud";
        return tickets;
    })

    const ticketsB = filteredTickets.filter((data) => {
        const tickets = data.estado_ticket === "Espera";
        return tickets;
    })

    const ticketsC = filteredTickets.filter((data) => {
        const tickets = data.estado_ticket === "Trabajando";
        return tickets;
    })

    return (
        <div>
            <div className="banner">
                <h1>Tickets</h1>
                <Link to={`/category/${category}/agregar`}><button>+</button></Link>
            </div>
            <TicketTable title="Solicitud" color="red" data={ticketsA} />
            <TicketTable title="En Espera" color="yellow" data={ticketsB} />
            <TicketTable title="Trabajando" color="green" data={ticketsC} />
        </div>
    )
}

export default TicketList;