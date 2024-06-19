import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppContent from './components/AppContent/AppContent';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/:id" element={<AppContent />} />
            </Routes>
        </Router>
    );
};

export default App;