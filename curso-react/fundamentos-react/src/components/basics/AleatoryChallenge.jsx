import React from 'react';

export default props => {
   const valueDrawn = Math.floor(Math.random() * (props.maxValue - props.minValue + 1) + props.minValue);
   return (
      <div>
      <h1>Look for average value between: { props.minValue } and { props.maxValue }</h1>
      <h2>Value drawn: { valueDrawn }</h2>
   </div>
   ) 
}