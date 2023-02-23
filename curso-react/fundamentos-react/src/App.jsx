import React from 'react';

import Aleatory from './components/basics/AleatoryChallenge';
import ComParametro from './components/basics/ComParametro';
import Fragmento from './components/basics/Fragmento';
import Card from './components/layout/Card';
import First from './components/basics/First';
import Familia from './components/basics/Familia';
import FamiliaMembro from './components/basics/FamiliaMembro';
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos'

import './App.css';
import './index.css';

export default function App(){
   return (
      <div className="App">
         <h1>Fundamentos React</h1>
         <div className='Cards'>
            <Card color="#CE8DB7" titulo="#06 - Tabela de produtos">
               <TabelaProdutos/>
            </Card>

            <Card color="#FF4C65" titulo="#06 - Lista de alunos">
               <ListaAlunos/>
            </Card>

            <Card titulo="#05 - Componente com filhos" color="#00C8F8">
               <Familia sobrenome="Ferreira">
                  <FamiliaMembro nome="Pedro" />
                  <FamiliaMembro nome="Rosana" />
                  <FamiliaMembro nome="Luiz" />
               </Familia>
            </Card>

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