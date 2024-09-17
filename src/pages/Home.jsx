import './home.css';
import avatar from '../assets/avatar.avif'
import React from 'react';
import 'bulma/css/bulma.css';

const HomePage = () => {
    return (
        <section className="hero is-fullheight home">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <div className="columns is-centered">
                        <div className="column is-half">
                            <figure className="image is-128x128	is-inline-block">
                                <img src={avatar} alt="Logo" />
                            </figure>
                            <h1 className="title is-2">Bienvenido al Sistema Andon</h1>
                            <p className="subtitle is-4">
                                Monitoreo en tiempo real y gestión de incidencias en la línea de producción.
                            </p>
                            {/* <Link to="/dashboard" className="button is-primary is-large mt-4">
                                Ir al Panel de Control
                            </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePage;
