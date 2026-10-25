import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Partners from './pages/Partners.jsx';
import Lectors from './pages/Lectors.jsx';
import Contacts from './pages/Contacts.jsx';
import Lectorsdetail from './pages/Lectorsdetail.jsx';
import ErrorBoundary from './components/ErrorBoundary'; //ErrorBoundary
import { Routes, Route } from "react-router-dom";
import './styles/styles.css';

function App() {
    //Добавляем стейт для сброса ошибки
    const [retryKey, setRetryKey] = React.useState(0);
    return (
        <div className="app">
            <Navbar />

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/partners" element={<Partners />} />

                    {/* 2. Оборачиваем Lectors в ErrorBoundary */}
                    <Route
                        path="/lectors"
                        element={
                            <ErrorBoundary>
                                <Lectors />
                            </ErrorBoundary>
                        }
                    />

                    <Route path="/lectors/:id" element={<Lectorsdetail />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
            </main>

            <footer className="footer">
                &copy; 2026 МастерЗнаний
            </footer>
        </div>
    );
}

export default App;