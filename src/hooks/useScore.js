import { useState } from 'react';

const useScore = () => {
    const [score, setScore] = useState(-1);

    const updateScore = (value) => {
        setScore(value);
    };

    return [score, updateScore];
};

export default useScore;