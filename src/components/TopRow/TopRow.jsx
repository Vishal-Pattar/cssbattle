import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopRow.css';
import useVisitorCount from '../../hooks/useVisitorCount';

const TopRow = () => {
    const navigate = useNavigate();
    const visitorCount = useVisitorCount();
    
    const navigateHome = () => {
        navigate('/');
    };

    return (
        <div className="top-row">
            <button type='button' className='home-button' onClick={navigateHome}>Home</button>
            <div className='banner-text'>CSS BATTLE</div>
            <div className='visitor-count'>Visitor Count: {visitorCount}</div>
        </div>
    );
};

export default TopRow;