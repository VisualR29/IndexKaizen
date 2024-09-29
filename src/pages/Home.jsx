import React from 'react';
import './home.css';

const HomePage = () => {

    return (
        <div className="portada-container">
            <div className="overlay"></div>
            <div className="content">
                <h1>Gestor de tickets</h1>
                <p>Gestiona los tickets de problemas, optimiza tu línea de producción y conoce tu tiempo muerto.</p>
            </div>
        </div>
    );
}

export default HomePage;
