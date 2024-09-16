import './ticketTable.css';

const TicketTable = ({ title, color, data }) => {

    const columns = ["Ticket", "Area", "Linea", "Cliente", "Causa", "Comentario", "Fecha", "Editar", "Bloquear"];

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
                            data.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    <td>{row.col1}</td>
                                    <td>{row.col2}</td>
                                    <td>{row.col3}</td>
                                    <td>{row.col4}</td>
                                    <td>{row.col5}</td>
                                    <td>{row.col6}</td>
                                    <td>{row.col7}</td>
                                    <td>{row.col8}</td>
                                    <td>{row.col9}</td>
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