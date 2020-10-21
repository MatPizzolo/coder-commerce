import React from 'react';
import './App.css';
import NavbarApp from './components/Navbar/Navbar';
import Home from './components/Home/Home';


function App() {
  return (    
    <>
    
        <NavbarApp />

    <h2>Las ofertas de la semana</h2>
      
      <Home />

    </>
  );
}

export default App;
