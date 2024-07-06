import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopRow.css';

const TopRow = () => {
    const navigate = useNavigate();

    // Function to handle click event
    const navigateHome = () => {
        navigate('/');
    };
    return (
        <div className="top-row">
            <button type='button' className='home-button' onClick={navigateHome}>Home</button>
            <div className='banner-text'>CSS BATTLE</div>
            <div className='visitor-count'>Visitor Count: 0</div>
        </div>
    );
};

export default TopRow;