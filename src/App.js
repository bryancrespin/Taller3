import './App.css';
import React from 'react';
import Welcome from  './components/welcome';
import Carrera from  './components/carrera';
import Programacion from  './components/programacion';

function App() {
  return (
    <div className="App">
     
    <Welcome></Welcome>
    <Carrera></Carrera>
    <Programacion></Programacion>
    </div>
  );
}

export default App;
