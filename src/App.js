import React from 'react';
import './App.css';
import Title from './components/Title';
import Img from './components/Img';
import LinkReact from './components/LinkReact.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">       

      <Img/>
        <Title/>
        <LinkReact/>
        
      </header>
    </div>
  );
}

export default App;
