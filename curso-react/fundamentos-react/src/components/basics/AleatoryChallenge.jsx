import React from 'react';

export default function Aleatory(props){
   const {min, max} = props;

   const valueDrawn = Math.floor(Math.random() * (max - min + 1) + min);
   return (
      <div>
         <h1>Look for average value between: <strong>{ min }</strong> and <strong>{ max }</strong></h1>
         <h2>Value drawn: { valueDrawn }</h2>
      </div>
   ) 
}