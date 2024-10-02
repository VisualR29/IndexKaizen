import React from 'react';
import './loading.css';

const Loading = ({ message, act }) => {
    return (
        <div className="loading-container">
            {act ? (
                <div className="spinner">
                    <div className="spinner-icon"></div>
                </div>
            ) : (
                <div className="error-icon">
                    ❌
                </div>
            )}
            <p>{message}</p>
        </div>
    );
};

export default Loading;
