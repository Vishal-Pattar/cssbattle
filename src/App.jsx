import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppContent from './components/AppContent/AppContent';
import LandingPage from './components/LandingPage/LandingPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage />} />
                <Route path="/:id" element={<AppContent />} />
            </Routes>
        </Router>
    );
};

export default App;