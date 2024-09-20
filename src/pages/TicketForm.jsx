import React, { useState } from 'react';
import './ticketForm.css';
import { usePostTicketMutation } from '../services/AppServices';

const TicketForm = () => {
    
    const [postTicket] = usePostTicketMutation();

    const [formData, setFormData] = useState({
        area: '',
        linea: '',
        cliente: '',
        categoria_problema: '',
        descripcion_problema: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTicket = {
            id_ticket: `TICKET${Math.floor(Math.random() * 100000)}`, 
            categoria: 'qa', 
            fecha_hora_reporte: new Date().toISOString(),
            area: formData.area,
            linea: formData.linea,
            cliente: formData.cliente,
            categoria_problema: formData.categoria_problema,
            descripcion_problema: formData.descripcion_problema,
            nivel_escalabilidad: 'Bajo', 
            estado_ticket: 'Espera', 
            operario_reporta: 'Operario001', 
            asignado_a: ['Tecnico002', 'Jefe002', 'Gerente001'], 
            resolucion: {}
        };

        postTicket(newTicket);
        console.log('Ticket creado:', newTicket);
    };

    return (
        <form className="ticket-form" onSubmit={handleSubmit}>
            <h2>Crear Nuevo Ticket</h2>

            <div className="form-group">
                <label htmlFor="area">Área</label>
                <select name="area" value={formData.area} onChange={handleChange} required>
                    <option value="">Selecciona un área</option>
                    <option value="SMT">SMT</option>
                    <option value="QA">QA</option>
                    <option value="Producción">Producción</option>
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
                    <option value="SER">SER</option>
                    <option value="TEX">TEX</option>
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