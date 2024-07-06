import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useShowResult from '../../hooks/useShowResult';
import './BottomRow.css';

const BottomRow = ({ id, codeContent }) => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [scoreUpdateTrigger, setScoreUpdateTrigger] = useState(false);
    const { toggleShowResult, score, updateScore } = useShowResult();

    const handleSubmit = async () => {
        const payload = {
            html: codeContent,
            challenge: id
        };

        try {
            setIsButtonDisabled(true);
            const response = await axios.post(`${process.env.REACT_APP_URL}/process`, payload);
            updateScore(response.data.score);
            setScoreUpdateTrigger(prev => !prev);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        if (score !== -1 && isButtonDisabled) {
            toggleShowResult(true);
            setIsButtonDisabled(false);
            // alert(`You Scored: ${score.toFixed(2)}`);
        }
    }, [scoreUpdateTrigger, score, isButtonDisabled, toggleShowResult]);

    return (
        <div className="row">
            <button type='button' 
            className={`submit-button ${isButtonDisabled ? 'disabled' : ''}`} 
            onClick={handleSubmit}
            disabled={isButtonDisabled} >Submit</button>
            <div>&copy; 2024 Creative Minds - By <a href='https://github.com/Vishal-Pattar'>Vishal Pattar</a></div>
        </div>
    );
};

export default BottomRow;