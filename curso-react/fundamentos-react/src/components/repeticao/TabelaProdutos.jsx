import React from 'react';
import produtos from '../../data/produtos';

export default function TabelaProdutos(props){

   const thStyle = {
      
   }

   const trStyle = {
      border: "1px solid red",
      width: '450px',
      display: 'flex',
      justifyContent: 'space-between',
      padding: "5px 20px"
   }

   const produtosLI = produtos.map(produto => {
      const formatedPrice = produto.valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
      return (
         <tr key={produto.id} style={trStyle}>
            <th>{ produto.id }</th>
            <th>{ produto.nome }</th>
            <th>{ formatedPrice }</th>
         </tr>
      )
   });

   return (
      <table style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5}}>
         <colgroup span={'3'}></colgroup>
         <tr style={trStyle}>
            <th>Id</th>
            <th>Nome</th>
            <th>Preço</th>
         </tr>
         { produtosLI }
      </table>
   )
}