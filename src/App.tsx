import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { ThemeType } from './types/appTypes';

function App() {

  const [themeMode, setThemeMode] = useState(true)

  function handleChangeTheme() {
    setThemeMode(!themeMode)
    console.log(themeMode)
  }

  return (
    <div className={themeMode ? 'bg-gray-800' : 'bg-slate-50' } >
      <NavBar changeTheme={handleChangeTheme} />
      <h1 className={themeMode ? 'text-gray-500' : 'text-inherit' } > yesss </h1>
      <h1 className={themeMode ? 'text-inherit' : 'text-gray-500' } > Noooo </h1>
    </div>
  );
}

export default App;
