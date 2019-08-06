import Nav from './Componentes/Nav'
import './App.css';
import Card from './Componentes/Card'
import React, { useState, useEffect }from 'react'
import axios from 'axios';



function App() {  
 
   return (
    
    <div className="App">
      <Nav name="Fabian Esteban Higuita Alvarez"/>
      <Card name="ipod"/>
      
    </div>
  );
}

export default App;
