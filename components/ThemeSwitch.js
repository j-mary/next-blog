import { useState, useEffect } from 'react';
import DarkTheme from './DarkTheme';

const loadDarkMode = () => {
  //   if (typeof window !== 'undefined' && window.localStorage) return false;

  if (typeof localStorage === 'undefined') return false;

  const value = localStorage.getItem('darkMode');
  return value != null ? JSON.parse(value) : false;
};

const ThemeSwitch = () => {
  const [darkMode, setDartMode] = useState(loadDarkMode);
  const text = darkMode ? 'Light Mode' : 'Dark Mode';

  const handleClick = () => {
    localStorage.setItem('darkMode', JSON.stringify(!darkMode));
    setDartMode(!darkMode);
  };

  //   useEffect(() => {
  //     const darkMode = JSON.parse(localStorage.getItem('darkMode')) ?? false;
  //     setDartMode(darkMode);
  //   }, []);

  return (
    <>
      <button onClick={handleClick} suppressHydrationWarning>
        {text}
      </button>
      <style jsx>
        {`
          button {
            background: none;
            border: none;
            cursor: pointer;
            color: inherit;
          }
        `}
      </style>
      {darkMode && <DarkTheme />}
    </>
  );
};

export default ThemeSwitch;
