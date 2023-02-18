import React from 'react';
import Aleatory from './components/basics/AleatoryChallenge';
import './index.css';

export default function App(props){
   return (
      <div>
         <Aleatory
            minValue={-3}
            maxValue={5}
         />
      </div>
   )
}