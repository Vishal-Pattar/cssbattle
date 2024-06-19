import React from 'react';
import './ActualTarget.css';

const ActualTarget = ({ id }) => {
    const target = require(`../../assets/expected_${id}.png`);

    return (
        <div className='targetbox'>
            <div className='targetrender'>
                <img src={target} alt={`Target for ID ${id}`} onError={(e) => { e.target.onerror = null; e.target.src = '../../assets/default.png'; }} />
            </div>
        </div>
    );
};

export default ActualTarget;