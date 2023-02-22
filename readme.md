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

* No react é interessante sempre você utilizar a extensão JSX para fazer seus compoentens
* O medelo base de um componente no react sempre será o seguinte:
* Sempre retornando um elemento HTML apenas, mais de um ele da erro, portanto caso deseje retornar mais de um, aconselha-se que voce coloque eles dentro de um outro
```jsx
export default function(){
   return (
      <div>
         
      </div>
   )
}
```
* Ao passar uma propriedade "props" para um componente, funciona como definir um atributo no html, da seguinte maneira
``` jsx
<ComParametro 
   titulo="Segundo Componentes" 
   subtitulo="Muito legal!"
/>
```
* Para acessar essas propriedades dentro da sua função, funciona como uma função, voce passa pra sua função os parâmetros
* Voce passa o props como parametro pra função, e voce acessa os dados dele, como se fosse um objeto com cada propriedade que voce enviou
``` jsx
export default function ComParametro(props){
   return (
      <div>
         <h2>{ props.titulo }</h2>
         <h3>{ props.subtitulo }</h3>
      </div>
   )
}
```
* Voce tambémt em a opção de passar uma "props" além de string, number, objeto e etc
* Para fazer isso, basta apenas voce envolver o dado entre chaves, ex:
``` jsx
<ComParametro
   grade={10} // number
   grades={[10,8.9,5.5,7.7]} // Array numbers
   student={{
      name: "Mayra",
      phone: "1999545665",
      responsible: "Angela Maria"
   }}
   students={[{ // Array de objetos
      name: "Mayra",
      phone: "1999545665",
      responsible: "Maria"
   },
   {
      name: "João",
      phone: "1995959559",
      responsible: "Meire"
   }]}
/>
// Caso você precise acessar esses objetos ficaria
{ props.students[0].name } // Mayra
{ props.students[1].name } // João
```
* A ideia de um componente é que você reutilize-o várias vezes se possíveis para tirar o máximo de utilidade do mesmo ex de varios alunos sendo exibidos apartir de um componente
``` jsx
<ComParametro
   title="Student situation"
   student="Mayra"
   grade={10}
/>
<ComParametro
   title="Student situation"
   student="Pedro"
   grande={8.5}
/>
```
* Utilizando props para definir se o aluno está aprovado ou não, e mostrar na tela:
``` jsx
export default function ComParametro(props){
   const status = props.grade >= 7 ? "Approved" : "Desapproved";
   return (
      <div>
         <h2>{ props.title }</h2>
         <p><strong>{ props.student }</strong> 
            have grade 
            <strong>{ props.grade }</strong>
            and is <strong>{ status }</strong>
         </p>
      </div>
   )
}
```

### Props is read only: É impossivel alterar uma propriedade que já foi passada como parâmetro, causará um erro em seu código caso você tente, então tome cuidado, uma propriedade é apenas para leitura, ex:
``` jsx
export default function ReadOnly(props){
   props.title = "New title";
   return (
      <h1>{ props.title }</h1>
   )
}
```

### React fragment error: Trata-se do erro que comentei la atrás, uma função jsx do react deve retornar apenas UMA html TAG, caso deseja retornar mais de um, você deve envolve-los com uma outra TAG, ex:
```jsx
// ERRO
export default function FragmentError(props){
   return (
      <h1>{ props.title }</h1>
      <h3>{ props.subtitle }</h3>
   )
}
// Possivel solução 1: essa mostrará que as tags estão envolvidas por uma div no html da página
export default function FragmentSoluction1(props){
   return (
      <div>
         <h1>{ props.title }</h1>
         <h3>{ props.subtitle }</h3>
      </div>
   )
}
// Possivel solução 2: está não envolverá os elementos com nd, apenas mostraram eles mesmos no HTML e mesmo assim livra do erro
export default function FragmentSoluction2(props){
   return (
      <React.Fragment>
         <h1>{ props.title }</h1>
         <h3>{ props.subtitle }</h3>
      </React.Fragment>
   )
}
// Possivel solução 3: sintaxé mais reduzida, não há possibilidade de utilizar propriedades nesse modelo
export default function FragmentSoluction2(props){
   return (
      <>
         <h1>{ props.title }</h1>
         <h3>{ props.subtitle }</h3>
      </>
   )
}
```

## Forma de deixar uma função mais simplificada (Enxuta)

* O export default serve para poder fazer isso, quando voce coloca somente o export, voce obrigatoriamente precisa por um nome para a sua função
* Já quando voce acompanha o export com o default voce pode simplificar a função e retornar apenas ela simplificada, muitas vezes não colocando nem nome, ex: função anônima
``` jsx
import React from 'react';
//Função anonima
export default function(props){
   return (
      <div></div>
   )
}
// Array function com props
export default props => {
   return (
      <div></div>
   )
}
// Arrow function sem props
export default () => {
   return (
      <div></div>
   )
}
// Array function com props, porém que voce não irá utilizar logo voce coloca um "underline" = "_", para ficar explicito que voce não irá utilizar
export default _ => {
   return (
      <div></div>
   )
}
// FORMA MAIS REDUZIDA DE TODAS QUE CONSEGUIMOS CHEGAR, automaeticamente nessa forma, ele já retorna oq tem na função, logo voce retira o envolver da função e retira o return
export default _ => 
   <div>
      <p></p>
   </div>
```

## ClassName

* No React quando definir uma classe para estilizar, deverá utilizar "className", pois class já é uma palavra reservada do JS

## Children props

* Caso voce necessite passar um componente como propriedade para outro componente, isso é possivel utilizando o "children"
* Detalhe, voce pode utilizar e passar quantos componentes voce quiser...
* Ex, sintaxe: 
``` jsx
<Card titulo="Exemplo de Card">
   <Aleatory min={10} max={30}/>
   <Aleatory min={10} max={30}/>
   <Aleatory min={10} max={30}/>
   <Aleatory min={10} max={30}/>
   <Aleatory min={10} max={30}/>
   <Aleatory min={10} max={30}/>
</Card>
```
* Para acessar e utilizar possivelmente depois esses "filhos" passados como props, segue o ex:
``` jsx
export default function Card(props){
   return (
      <div>
         <div>{ props.children }</div>
      </div>
   )
}
// Com isso será mostrado todos os outros componentes colocados dentro da props, pois todos são elementos filhos
```

## Passar cores dinâmicamente para componentes

* passar cores dinamicamentes para cards, fazendo com que cada um receba uma cor diferente através das props, ex:
* Enviando a color como propriedade:
```jsx
<Card 
   titulo="#04 - Exemplo de Card" color="#080">
      <Aleatory min={10} max={30}/>
</Card>
```
* Utilizando a color pra ser renderizada como estilo
```jsx
export default function Card(props) {
   const cardStyle = {
      backgroundColor: props.color || '#F00',
      borderColor: props.color || '#F00',
   }
   return (
      <div className='Card' style={cardStyle}>
         <div className="Title">{ props.titulo }</div>
         <div className="Content">{ props.children }</div>
      </div>
   )
}
```
* Podemos também passar diretamente para o style, o objeto, sem precisar criar uma variavel para armazena-lo
```jsx
return (
   <div className="Card" style={{
      backgroundColor: props.color || "#F00",
      borderColor: props.color || "#F00",
   }}></div>
)
```