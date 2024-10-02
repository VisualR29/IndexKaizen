import React, { useEffect, useState } from 'react';
import './ticketForm.css';
import { useGetIdQuery, usePostIdMutation, usePostTicketMutation } from '../services/AppServices';
import { useParams, useNavigate } from 'react-router-dom';

const TicketForm = () => {

    const navigate = useNavigate();

    const [triggerPostTicket] = usePostTicketMutation();
    const [triggerIdTicket] = usePostIdMutation();
    const { data: initialIdTicket } = useGetIdQuery();

    const [idTicket, setIdTicket] = useState(initialIdTicket);

    const [formData, setFormData] = useState({
        cliente: '',
        area: '',
        linea: '',
        categoria_problema: '',
        descripcion_problema: ''
    });

    const clienteByLineaByArea = {
        Servertech: {
            SMT: ['L01', 'L02', 'L03', 'L04', 'L05', 'L06', 'L07', 'L08', 'L09', 'L10', 'L11'],
            BE: ['Oracle Vertical', 'Oracle Horizontal', 'Enas', 'Enas Especiales', 'SKU', 'Wolf', 'Pro4x'],
            BB: ['Ola6', 'Ola8', 'Ola9', 'Ola5', 'CMA', 'PowerCord']
        }
    };

    let { category } = useParams();
    category = category.toLowerCase();
    console.log("category: " + category);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name === 'cliente') {
            setFormData((prevState) => ({
                ...prevState,
                area: '',
                linea: ''
            }));
        }

        if (name === 'area') {
            setFormData((prevState) => ({
                ...prevState,
                linea: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newTicket = {
            id_ticket: `TICKET${idTicket}`,
            categoria: category,
            fecha_hora_reporte: new Date().toISOString(),
            cliente: formData.cliente,
            area: formData.area,
            linea: formData.linea,
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

            const nextId = idTicket + 1;
            setIdTicket(nextId);

            await triggerIdTicket({ idNumber: nextId });

            alert('Ticket agregado con éxito');

            navigate(-1);

        } catch (error) {
            alert("Error al agregar el ticket");
            navigate(-1);
            console.error(error);
        }
    };

    useEffect(() => {
        if (initialIdTicket) {
            setIdTicket(initialIdTicket);
        }
    }, [initialIdTicket]);

    const getCliente = () => {
        return formData ? Object.keys(clienteByLineaByArea) : [];
    };

    const getAreas = () => {
        return formData.cliente ? Object.keys(clienteByLineaByArea[formData.cliente]) : [];
    };

    const getLineas = () => {
        return formData.area ? clienteByLineaByArea[formData.cliente][formData.area] : [];
    };

    return (
        <form className="ticket-form" onSubmit={handleSubmit}>
            <h2>Crear Nuevo Ticket</h2>

            <div className="form-group">
                <label htmlFor="cliente">Cliente</label>
                <select name="cliente" value={formData.cliente} onChange={handleChange} required>
                    <option value="">Selecciona un cliente</option>
                    {getCliente().map((cliente) => (
                        <option key={cliente} value={cliente}>{cliente}</option>
                    ))}
                </select>
            </div>

            {formData.cliente && (
                <div className="form-group">
                    <label htmlFor="area">Área</label>
                    <select name="area" value={formData.area} onChange={handleChange} required>
                        <option value="">Selecciona un área</option>
                        {getAreas().map((area) => (
                            <option key={area} value={area}>{area}</option>
                        ))}
                    </select>
                </div>
            )}

            {formData.area && (
                <div className="form-group">
                    <label htmlFor="linea">Línea</label>
                    <select name="linea" value={formData.linea} onChange={handleChange} required>
                        <option value="">Selecciona una línea</option>
                        {getLineas().map((linea) => (
                            <option key={linea} value={linea}>{linea}</option>
                        ))}
                    </select>
                </div>
            )}

            <div className="form-group">
                <label htmlFor="categoria_problema">Categoría del Problema</label>
                <select
                    name="categoria_problema"
                    value={formData.categoria_problema}
                    onChange={handleChange}
                    required
                >
                    <option value="">Selecciona una categoría</option>
                    <option value="Apagon">Apagón</option>
                    <option value="Arranque">Arranque</option>
                    <option value="Cambio de modelo">Cambio de modelo</option>
                    <option value="Cambio de turno">Cambio de turno</option>
                    <option value="Comedor">Comedor</option>
                    <option value="Ergonomia">Ergonomía</option>
                    <option value="Facturacion">Facturación</option>
                    <option value="Falla corriente electrica">Falla corriente eléctrica</option>
                    <option value="Falla de torniquete">Falla de torniquete</option>
                    <option value="Falla del sistema">Falla del sistema</option>
                    <option value="Falla en equipo">Falla en equipo</option>
                    <option value="Falta de herramienta">Falta de herramienta</option>
                    <option value="Falta de material">Falta de material</option>
                    <option value="Falta de personal">Falta de personal</option>
                    <option value="Junta">Junta</option>
                    <option value="Linea desactualizada">Línea desactualizada</option>
                    <option value="No corre">No corre</option>
                    <option value="Pausa de salud">Pausa de salud</option>
                    <option value="Problemas con ayuda visual">Problemas con ayuda visual</option>
                    <option value="QRQC">QRQC</option>
                    <option value="Validacion">Validación</option>
                    <option value="Work Order">Work Order</option>
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
