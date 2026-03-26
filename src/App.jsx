import { useState,useEffect } from 'react'

import './App.css'
import Header from './Components/Header'
import Main from './Components/Main'
// import { Route, Routes } from 'react-router-dom'

function App() {
  const [open, setOpen] = useState(false);

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // debugger;
    let savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    // debugger;
    localStorage.setItem("theme", theme);
  }, [theme]);


  const toggleTheme = () => {
    // debugger;
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      <div className={`Container ${theme}`}>

        <div className="menu-toggle" onClick={() => setOpen(!open)}>
          <i className={open ? "fa fa-times" : "fa fa-bars"}></i>
        </div>

        <button className="theme-btn" onClick={toggleTheme}>
          <i className={theme === "dark" ? " fa fa-moon-o" : "fa fa-sun-o"}></i>
        </button>

        <Header open={open} setOpen={setOpen} />


        <Main open={open} setOpen={setOpen} />

      </div>



    </>
  )
}

export default App
