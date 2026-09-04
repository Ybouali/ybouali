import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import 'highlight.js/styles/night-owl.css';
import App from './App.tsx';
import { AppProvider } from './context/AppContext.tsx';

createRoot(document.getElementById('root')!).render(
    <HelmetProvider>
        <BrowserRouter>
            <AppProvider>
                <App />
            </AppProvider>
        </BrowserRouter>
    </HelmetProvider>
);
