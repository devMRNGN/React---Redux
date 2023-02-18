import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import First from './components/basics/First';
import ComParametro from './components/basics/ComParametro';

ReactDOM.render(
   <div>
      <First/>
      <ComParametro 
         title="Student situation" // Student situation
         student="Mayra" // Mayra have grade 10
         grade={10}
      />
      <ComParametro 
         title="Student situation" // Student situation
         student="Pedro" // Pedro have grade 8.5
         grade={6}
      />
   </div>,
   document.getElementById('root')
);