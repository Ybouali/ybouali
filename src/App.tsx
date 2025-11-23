import './App.css';
import { TopHeader } from './components';
import Pages from './pages';

function App() {
    return (
        <div className="h-screen w-screen overflow-hidden grid grid-rows-[auto_1fr_auto] grid-cols-[auto_1fr]">
            <TopHeader />
            <Pages />
        </div>
    );
}

export default App;
