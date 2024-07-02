import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useScore from '../../hooks/useScore';
import './BottomRow.css';

const BottomRow = ({ id, codeContent }) => {
    const [score, updateScore] = useScore();
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [scoreUpdateTrigger, setScoreUpdateTrigger] = useState(false);

    const handleSubmit = async () => {
        const payload = {
            html: codeContent,
            challenge: id
        };

        try {
            setIsButtonDisabled(true);
            const response = await axios.post('https://cssbattle-backend.onrender.com/process', payload);
            updateScore(response.data.score);
            setScoreUpdateTrigger(prev => !prev);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        const handleScoreChange = () => {
            if (score !== -1) {
                setIsButtonDisabled(false);
                alert(`You Scored: ${score.toFixed(2)}`);
            }
        };
        handleScoreChange();
    }, [scoreUpdateTrigger, score]);

    return (
        <div className="row">
            <button type='button' 
            className={`submit-button ${isButtonDisabled ? 'disabled' : ''}`} 
            onClick={handleSubmit}
            disabled={isButtonDisabled} >Submit</button>
            <div>&copy; 2024 Creative Minds - Designed with passion for CSS battles</div>
        </div>
    )
};

export default BottomRow;