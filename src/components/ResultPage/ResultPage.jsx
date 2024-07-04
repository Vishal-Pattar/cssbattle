import React from 'react';
import './ResultPage.css';
import { IoCloseCircle } from "react-icons/io5";
import useShowResult from '../../hooks/useShowResult';
import GaugeChart from 'react-gauge-chart';

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
                <GaugeChart nrOfLevels={25} percent={score/100}  colors={["#FF0000", "#00FF00"]} hideText={true} needleColor="#FFFFFF" needleBaseColor="#FFFFFF"/>
                <div className='text text3'>{score.toFixed(2) + " %"}</div>
            </div>
        </div>
    );
};

export default ResultPage;