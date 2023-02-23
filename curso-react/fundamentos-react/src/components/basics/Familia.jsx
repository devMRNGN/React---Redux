import React, { Children, cloneElement } from 'react';

export default function Familia(props){
   return (
      <div>
         {
            Children.map(props.children, (child,i) => {
               return cloneElement(child, { ...props, key: i })
            })
         }
      </div>
   )
}