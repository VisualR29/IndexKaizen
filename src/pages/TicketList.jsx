import { Link, useParams } from "react-router-dom";
import TicketTable from "../components/TicketTable";
import './ticketList.css';
import { useGetTicketsQuery } from "../services/AppServices";
import Loading from "../components/Loading";

const TicketList = () => {

    const { data: tickets, isLoading, error } = useGetTicketsQuery();

    let { category } = useParams();
    category = category.toLowerCase();
    
    if (isLoading) return <Loading message={"Cargando..."} act={true} />;

    if (error) return <Loading message={`Error: ${error.message}`} act={false} />;


    const filteredTickets = (tickets && tickets.length > 0) ? tickets.filter((data) => {
        return data.categoria === category;
    }) : [];

    const ticketsA = filteredTickets.length > 0 ? filteredTickets.filter((data) => {
        return data.estado_ticket === "Solicitud";
    }) : [];

    const ticketsB = filteredTickets.length > 0 ? filteredTickets.filter((data) => {
        return data.estado_ticket === "Espera";
    }) : [];

    const ticketsC = filteredTickets.length > 0 ? filteredTickets.filter((data) => {
        return data.estado_ticket === "Trabajando";
    }) : [];

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