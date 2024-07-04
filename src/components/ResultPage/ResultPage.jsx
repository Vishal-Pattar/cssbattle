import React from 'react';
import './ResultPage.css';
import { IoCloseCircle } from "react-icons/io5";
import useShowResult from '../../hooks/useShowResult';

const ResultPage = () => {
    const { showResult, toggleShowResult, score } = useShowResult();

    const handleExit = () => {
        toggleShowResult(false);
    };

    if (!showResult) return null;

    return (
        <div className='result-body'>
            <div className="result-container">
                <div className='exit' onClick={handleExit}><IoCloseCircle size={'25px'} /></div>
                <div className='text text1'>Congratulations</div>
                <div className='text text2'>You scored</div>
                <div className='text text3'>{score.toFixed(2) + " %"}</div>
            </div>
        </div>
    );
};

export default ResultPage;