import './App.css';
import { Footer, SideBar, TopHeader } from './components';
import Terminal from './components/Terminal';
import { useAppContext } from './context/AppContext';
import Pages from './pages';

function App() {
    const { openTerminal } = useAppContext();
    return (
        <div className="h-screen w-screen overflow-hidden grid grid-rows-[auto_1fr_auto] grid-cols-[auto_1fr]">
            <TopHeader />
            <SideBar />
            <Pages />
            <Footer />
            {openTerminal && <Terminal />}
        </div>
    );
}

export default App;
