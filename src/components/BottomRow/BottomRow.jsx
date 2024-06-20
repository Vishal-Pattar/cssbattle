import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import useScore from '../../hooks/useScore';
import './BottomRow.css';

const BottomRow = ({ id, codeContent }) => {
    const [score, updateScore] = useScore();

    const handleSubmit = async () => {
        const payload = {
            html: codeContent,
            challenge: id
        };

        try {
            const response = await axios.post('https://cssbattle-backend.onrender.com/process', payload);
            updateScore(response.data.score);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        if (score !== -1) {
            alert(`You Scored: ${score.toFixed(2)}`);
        }
    }, [score]);

    return (
        <div className="row">
            <Button variant='contained' sx={{ margin: '8px' }} onClick={handleSubmit}>Submit</Button>
        </div>
    );
};

export default BottomRow;
