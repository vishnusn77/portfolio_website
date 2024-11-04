import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000); // Adjust timing if needed
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading && (
                <div className="splash-screen">
                    <div className="loading-animation">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                </div>
            )}
            <div className={loading ? 'hidden' : 'fade-in'}>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        {/* Add other routes here for different pages */}
                    </Routes>
                </Router>
            </div>
        </>
    );
};

export default App;
