import './App.css';
import { Footer, SideBar, TopHeader } from './components';
import Pages from './pages';

function App() {
    return (
        <div className="h-screen w-screen overflow-hidden grid grid-rows-[auto_1fr_auto] grid-cols-[auto_1fr]">
            <TopHeader />
            <SideBar />
            <Pages />
            <Footer />
        </div>
    );
}

export default App;
