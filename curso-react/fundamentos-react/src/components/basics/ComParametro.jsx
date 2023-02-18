import React from 'react';

export default function ComParametro(props){
   const status = props.grade >= 7 ? "Approved" : "Desapproved";
   return (
      <div>
         <h2>{ props.title }</h2>
         <p>
            <strong>{ props.student }</strong> have grade <strong>{ props.grade }</strong> and is <strong>{ status }</strong>
         </p>
      </div>
   )
}