import { useState } from 'react';

const useShowResult = () => {
    const [showResult, setShowResult] = useState(false);

    const toggleShowResult = (value) => {
        setShowResult(value);
    };

    return [showResult, toggleShowResult];
};

export default useShowResult;