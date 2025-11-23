import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { AppProvider } from './context/AppContext.tsx';

createRoot(document.getElementById('root')!).render(
    <AppProvider>
        <StrictMode>
            <App />
        </StrictMode>
    </AppProvider>
);
