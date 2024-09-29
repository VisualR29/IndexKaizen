import React, { useState } from 'react';
import './ticketForm.css';
import { useGetIdQuery, usePostIdMutation, usePostTicketMutation } from '../services/AppServices';
import { useParams } from 'react-router-dom';

const TicketForm = () => {
    
    const [triggerPostTicket] = usePostTicketMutation();

    const [triggerIdTicket] = usePostIdMutation();

    const { data:id_ticket } = useGetIdQuery();
    
    const [formData, setFormData] = useState({
        area: '',
        linea: '',
        cliente: '',
        categoria_problema: '',
        descripcion_problema: ''
    });

    let { category } = useParams();
    
    category = category.toLowerCase();

    console.log("category: " + category)
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        
        
        const newTicket = {
            id_ticket: `TICKET${Math.floor(id_ticket)}`, 
            categoria: category, 
            fecha_hora_reporte: new Date().toISOString(),
            area: formData.area,
            linea: formData.linea,
            cliente: formData.cliente,
            categoria_problema: formData.categoria_problema,
            descripcion_problema: formData.descripcion_problema,
            nivel_escalabilidad: 'Bajo', 
            estado_ticket: 'Solicitud', 
            operario_reporta: 'Operario001', 
            asignado_a: ['Tecnico002', 'Jefe002', 'Gerente001'], 
            resolucion: {
                fecha_hora_resolucion: null,
                acciones_tomadas: "",
                tiempo_inactividad: null
            }
        };
        
        try {
            await triggerPostTicket({ id: newTicket.id_ticket, newTicket });
            const idNumber = id_ticket + 1;
            await triggerIdTicket({ idNumber });
            alert('Gasto agregado');
        } catch (error) {
            alert("Error");
        }
    };
    
    return (
        <form className="ticket-form" onSubmit={handleSubmit}>
            <h2>Crear Nuevo Ticket</h2>

            <div className="form-group">
                <label htmlFor="area">Área</label>
                <select name="area" value={formData.area} onChange={handleChange} required>
                    <option value="">Selecciona un área</option>
                    <option value="SMT">SMT</option>
                    <option value="BE">Backend</option>
                    <option value="BB">Box Build</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="linea">Línea</label>
                <select name="linea" value={formData.linea} onChange={handleChange} required>
                    <option value="">Selecciona una línea</option>
                    <option value="SER01">SER01</option>
                    <option value="SER02">SER02</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="cliente">Cliente</label>
                <select name="cliente" value={formData.cliente} onChange={handleChange} required>
                    <option value="">Selecciona un cliente</option>
                    <option value="SER">Servertech</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="categoria_problema">Categoría del Problema</label>
                <select
                    name="categoria_problema"
                    value={formData.categoria_problema}
                    onChange={handleChange}
                    required
                >
                    <option value="">Selecciona una categoría</option>
                    <option value="Mecánico">Mecánico</option>
                    <option value="Eléctrico">Eléctrico</option>
                    <option value="Otro">Otro</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="descripcion_problema">Descripción del Problema</label>
                <textarea
                    name="descripcion_problema"
                    value={formData.descripcion_problema}
                    onChange={handleChange}
                    rows="4"
                    required
                ></textarea>
            </div>

            <button type="submit" className="submit-button">
                Crear Ticket
            </button>
        </form>
    );
};

export default TicketForm;