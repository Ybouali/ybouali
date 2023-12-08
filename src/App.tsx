import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';

function App() {

  const [themeMode, setThemeMode] = useState(true)

  function handleChangeTheme() {
    setThemeMode(!themeMode)
  }
 
  return (
    <div className={themeMode ? 'bg-blue-900 min-h-screen px-20' : 'bg-indigo-100 min-h-screen px-20' } >
      <NavBar mode={themeMode} changeTheme={handleChangeTheme} />
      <p>--------------------------------------------------------------------------------------------</p>
      <h1 className={themeMode ? 'text-gray-100' : 'text-slate-950' } > yesss </h1>
      <h1 className={themeMode ? 'text-gray-100' : 'text-slate-950' } > Noooo </h1>
    </div>
  );
}

export default App;
