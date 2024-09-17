import './ticketTable.css';

const TicketTable = ({ title, color, data }) => {

    const columns = ["Ticket", "Area", "Linea", "Cliente", "Problema", "Comentario", "Fecha", "Editar", "Bloquear"];

    return (
        <div className={color} >
            <div className='tableContainer'>
                <h2>{title}</h2>
                <table className='dataTable'>
                    <thead>
                        <tr>
                            {columns.map((col, index) => (
                                <th key={index}>{col}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.length > 0 ? (
                            data.map((ticket, ticketIndex) => (
                                <tr key={ticketIndex}>
                                    <td>{ticket.id_ticket}</td>
                                    <td>{ticket.area}</td>
                                    <td>{ticket.linea}</td>
                                    <td>{ticket.cliente}</td>
                                    <td>{ticket.categoria_problema}</td>
                                    <td>{ticket.descripcion_problema}</td>
                                    <td>{ticket.fecha_hora_reporte}</td>
                                    <td>{ticket.col8}</td>
                                    <td>{ticket.col9}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="9">No hay datos disponibles</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TicketTable;