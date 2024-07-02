import React from 'react';
import './ResultPage.css';
import { IoCloseCircle } from "react-icons/io5";
import useShowResult from '../../hooks/useShowResult';
import useScore from '../../hooks/useScore';

const ResultPage = () => {
    const [showResult, toggleShowResult] = useShowResult();
    const [score, updateScore] = useScore();

    const handleExit = () => {
        toggleShowResult(false);
    }

    return (
        <div className='result-body'>
            {showResult && (
                <div className="result-container">
                    <div className='exit' onClick={handleExit}><IoCloseCircle size={'25px'} /></div>
                    <div className='text1 text'>Congratulations</div>
                    <div className='text2 text'>You scored</div>
                    <div className='text3 text'>{score}</div>
                </div>
            )}
        </div>
    )
};

export default ResultPage;