import { useState } from 'react';
import './ticketForm.css';

const TicketForm = () => {
    const [ticket, setTicket] = useState({
        id_ticket: '',
        categoria: 'producción',
        fecha_hora_reporte: '', 
        area: '',
        linea: '',
        cliente: '',
        categoria_problema: '',
        descripcion_problema: '',
        nivel_escalabilidad: 'Bajo',
        estado_ticket: 'Solicitud', 
        operario_reporta: 'Operario001', 
        asignado_a: ['Tecnico002', 'Jefe002', 'Gerente001'], 
        resolucion: {
            fecha_hora_resolucion: '',
            acciones_tomadas: '',
            tiempo_inactividad: ''
        }
    });

    const areas = ['SMD', 'BE', 'BB'];
    const lineas = ['SER01', 'SER02', 'SER03'];
    const clientes = ['SERVER'];
    const categoriasProblema = ['Mecánico', 'Eléctrico', 'Calidad', 'Otro'];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTicket({
            ...ticket,
            [name]: value
        });
    };

    const generateTicketData = () => {
        const currentDate = new Date().toISOString(); 
        const newId = `TICKET${Math.floor(Math.random() * 100000)}`; //FUNCION PARA ID

        setTicket((prevTicket) => ({
            ...prevTicket,
            id_ticket: newId,
            fecha_hora_reporte: currentDate,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        generateTicketData();
        console.log(ticket); 
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1 className="title">Crear Nuevo Ticket</h1>

            <div className="field">
                <label className="label">Área</label>
                <div className="control">
                    <div className="select">
                        <select name="area" value={ticket.area} onChange={handleInputChange}>
                            <option value="">Selecciona un área</option>
                            {areas.map(area => (
                                <option key={area} value={area}>{area}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <div className="field">
                <label className="label">Línea</label>
                <div className="control">
                    <div className="select">
                        <select name="linea" value={ticket.linea} onChange={handleInputChange}>
                            <option value="">Selecciona una línea</option>
                            {lineas.map(linea => (
                                <option key={linea} value={linea}>{linea}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <div className="field">
                <label className="label">Cliente</label>
                <div className="control">
                    <div className="select">
                        <select name="cliente" value={ticket.cliente} onChange={handleInputChange}>
                            <option value="">Selecciona un cliente</option>
                            {clientes.map(cliente => (
                                <option key={cliente} value={cliente}>{cliente}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <div className="field">
                <label className="label">Categoría del Problema</label>
                <div className="control">
                    <div className="select">
                        <select name="categoria_problema" value={ticket.categoria_problema} onChange={handleInputChange}>
                            <option value="">Selecciona una categoría</option>
                            {categoriasProblema.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                            <option value="Otro">Otro (Especifica)</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="field">
                <label className="label">Descripción del Problema</label>
                <div className="control">
                    <textarea
                        className="textarea"
                        name="descripcion_problema"
                        value={ticket.descripcion_problema}
                        onChange={handleInputChange}
                        placeholder="Describe el problema..."
                    />
                </div>
            </div>

            <div className="field is-grouped">
                <div className="control">
                    <button className="button is-primary" type="submit">Crear Ticket</button>
                </div>
            </div>
        </form>
    );
};

export default TicketForm;
