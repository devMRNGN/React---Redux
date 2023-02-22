import React from 'react';
import Aleatory from './components/basics/AleatoryChallenge';
import ComParametro from './components/basics/ComParametro';
import Fragmento from './components/basics/Fragmento';
import Card from './components/layout/Card';
import First from './components/basics/First';
import './App.css';
import './index.css';

export default function App(){
   return (
      <div className="App">
         <h1>Fundamentos React</h1>

         <div className='Cards'>
            <Card titulo="#04 - Exemplo de Card" color="#FA6900">
               <Aleatory min={10} max={30}/>
            </Card>

            <Card color="#E94C6F" titulo="#03 - Fragmento">
               <Fragmento/>
            </Card>

            <Card color="#E8B71A" titulo="#02 - Com Parâmetro">
               <ComParametro title="Student situation" student="João Marangoni" grade={8}/>
            </Card>

            <Card color="#588C73" titulo="#01 - First Component">
               <First/>
            </Card>
         </div>
      </div>
   )
}