import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Whoiam from './pages/Whoiam';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';
import Footer from './components/Footer';

function App() {
    const [themeMode, setThemeMode] = useState(true);

    function handleChangeTheme() {
        setThemeMode(!themeMode);
    }

    return (
        <div
            className={
                themeMode
                    ? 'bg-blue-950 md:px-20 min-h-screen'
                    : 'bg-indigo-100 md:px-20 min-h-screen'
            }
        >
            <Router basename="/ybouali">
                <NavBar mode={themeMode} changeTheme={handleChangeTheme} />
                <Routes>
                    <Route path="/" element={<Whoiam mode={themeMode} />} />
                    <Route
                        path="/projects"
                        element={<Projects mode={themeMode} />}
                    />
                    <Route
                        path="/contactme"
                        element={<ContactMe mode={themeMode} />}
                    />
                </Routes>
            </Router>
            <Footer mode={themeMode} />
        </div>
    );
}

export default App;
