import './ticketTable.css';

const TicketTable = ({ title, color, data }) => {

    const columns = ["Cliente", "Linea", "Area", "Problema", "Comentario", "Editar", "Progresar"];

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
                                    <td>{ticket.cliente}</td>
                                    <td>{ticket.linea}</td>
                                    <td>{ticket.area}</td>
                                    <td>{ticket.categoria_problema}</td>
                                    <td>{ticket.descripcion_problema}</td>
                                    <td>{ticket.col8}</td>
                                    <td>{ticket.col9}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7">No hay datos disponibles</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TicketTable;