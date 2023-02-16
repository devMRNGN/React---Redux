# Fundamentos REACT

## Começando um projeto com react

* Criando um projeto
```
npx create-react-app nomedoapp 
```
* Após isso entrar na pasta do novo projeto e executar
```
npm start
```
Com isso seu projeto já está rodando e funcionando, porém indicasse que voce apague todos arquivos que estão na pasta "src" e crie apenas um "index.js" nela, assim você tem seu projeto criado e funcionando do zero

## Começando o arquivo do zero

Primeiramente no seu index.js voce precisará criar o react-dom que irá renderizar o jsx no HTML, para isso siga os seguintes passos:
* Passo 1:
``` javascript
import ReactDOM from 'react-dom'; // Importar a react-dom
```
* Passo 2:
``` javascript
// Utilizando a DOM do JS, voce pegará o elemento que possui o ID 'root' do seu HTML
const el = document.getElementById('root');
```
* Passo 3: 
``` javascript
// Agora basta usar o reactDOM e passar nele oq irá renderizar, e como segundo parametro passamos o el, que é aonde o que voce passou irá ser renderizado
ReactDOM.render('Olá react', el);
```
Passo 4: Shortcut para os passos acima
``` javascript
// Passando diretamente o root sem defini-lo em uma váriavel para o reactDOM
ReactDOM.render(
   'Olá react', 
   document.getElementById('root')
);
```
Passo 5: Importe react e torne seu arquivo JSX
``` javascript
import React from 'react';
ReactDOM.render(
   <div>Olá react</div>,
   document.getElementById('root')
)
```

### Conceito importante na hora de criar importações

Algo importante na hora de importar coisas é saber que há coisas que só precisam ser importadas, exemplo do css
* CSS:
``` javascript
import './index.css'; // Com isso seu css já estará funcionando na sua app
```
Porém há coisas que necessitam declarar uma váriavel da importação, que irá armazenar tudo que foi importado, exemplo importando o ReactDOM
* ReactDOM
```javascript
import nomedavariavel from 'react-dom'; // Aqui estou importando e armazenando em uam variavel
// Para usar basta voce utilizar puxando o nome da váriavel que usou para importar ex:
nomedavariavel.render(
   <div>Olá react</div>,
   document.getElementById('root');
)

```

## Renderizando Javascript no react

Funciona apartir de um documento que possua react nele, caso ele possua para renderizar seu Javascript como HTML, basta botar ele entre chaves!
* EX1: 
```javascript
import React from 'react';

const tag = <strong>Olá react</strong>;

ReactDOM.render(
   <div>{ tag }</div>, // Aqui estou renderizando a váriavel Tag dentro do HTML
   document.getElementById('root')
);
```

## Como referenciar arquivo CSS react

Recomenda-se que sempre você crie arquivos que possuam o mesmo nome do seu arquivo, exemplo possuo um arquivo index.js e crio um index.css
* Passo 1:
``` javascript
// Crie seu arquivo index.css
```
* Passo 2: 
``` javascript
// Utilizando css normalmente 
body {
   background-color: #222; // Fundo cinza
}
```

## Criando o primeiro componentes funcionais

* Passo 1: 
```javascript
// Crie uma pasta "components" dentro de "src"
// Isso serve para organizar melhor os arquivos
```
* Passo 2:
```javascript
// Após isso crie seus componentes, sempre coloque a primeira letra do componente como letra Maiúscula por conta de boa prática
```
* Passo 3:
``` js
// Crie seu componente e exporte-o
export default function First(){
   return "First component";
}
```
* Passo 4:
```js
// Após isso basta importar seu componente aonde irá renderizar ele, para fzr isso siga o seguinte exemplo:
import First from './components/basics/First';
```
* Passo 5:
```js
// Para utilizar seu componente na sua aplicação e renderiza-lo realmente, siga o seguinte exemplo:
import First from './components/basics/First';

// Basta abrir e fechar a tag com o nome da variavel que definiu no import
ReactDOM.render(
   <div>
      <First></First> 
   </div>,
   document.getElementById('root')
);
```

Do mesmo modo que conseguimos por um texto JSX para uma váriavel, conseguimos colocar como retorno de uma função no React

## Colocando JSX dentro de um componente

É uma boa prática que voce sempre retorne a div principal entre os parenteses
O react não se importa muito se a função sua irá retornar um texto, uma string ou um JSX, o react lida bem com todos os tipos de retornos, porém, quando deseja retornar um JSX é importante se ligar que é necessário que voce import o react

```js
import React from 'react';

export default function First(){
   return (
      <div>
         <h2>First component</h2>
      </div>
   );
}
```

## Componentes com propriedades/parâmetros

