import { useState, useContext, createContext } from 'react';
const ShowResultContext = createContext();

export const ShowResultProvider = ({ children }) => {
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(-1);

    const toggleShowResult = (value) => {
        setShowResult(value);
    };

    const updateScore = (value) => {
        setScore(value);
    };

    return (
        <ShowResultContext.Provider value={{ showResult, toggleShowResult, score, updateScore }}>
            {children}
        </ShowResultContext.Provider>
    );
};

const useShowResult = () => {
    const context = useContext(ShowResultContext);
    if (!context) {
        throw new Error('useShowResult must be used within a ShowResultProvider');
    }
    return context;
};

export default useShowResult;