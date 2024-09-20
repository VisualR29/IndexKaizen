import React from 'react';
import './home.css';
import { usePostTicketMutation } from '../services/AppServices';

const HomePage = () => {

    const [triggerPostTicket] = usePostTicketMutation();

    const ticketEjemplo = {
        id_ticket: "TICKET12346",
        categoria: "ind",
        fecha_hora_reporte: "2024-09-15T14:35:00",
        area: "SMT",
        linea: "SER01",
        cliente: "SER",
        categoria_problema: "Mecánico",
        descripcion_problema: "Falla en el sensor de temperatura del motor.",
        nivel_escalabilidad: "Bajo",
        estado_ticket: "Espera",
        operario_reporta: "Operario001",
        asignado_a: [
            "Tecnico002",
            "Jefe002",
            "Gerente001"
        ],
        resolucion: {
            fecha_hora_resolucion: "2024-09-15T16:20:00",
            acciones_tomadas: "Reemplazo del sensor defectuoso y calibración del sistema de monitoreo.",
            tiempo_inactividad: "1 hora 45 minutos"
        }
    }

    const handleClick = async (values) => {
        alert('Botón presionado');
        const idTicket = "TICKETID2"
        try {
            await triggerPostTicket({
                idTicket,
                ticket: { values }
            });
            alert('Gasto agregado');
        } catch (error) {
            alert("Error");
            console.error(error);
        }
        alert("Fin de programa")
    };

    return (
        <div className="portada-container">
            <div className="overlay"></div>
            <div className="content">
                <h1>Gestor de tickets</h1>
                <p>Gestiona los tickets de problemas, optimiza tu línea de producción y conoce tu tiempo muerto.</p>
                {/* Se corrige el onClick para pasar una función anónima */}
                <button onClick={() => handleClick(ticketEjemplo)}>PRESIONAME</button>
            </div>
        </div>
    );
}

export default HomePage;
