import React, { useState } from 'react';
import { Container } from './styles';
import closeSvg from '../../imgs/icon-cross.svg'

export function TodoItem(props) {
   const {item, onChange, onRemoveItem} = props
   const id = item.id
   const value = item.content
   const state = item.state
   const [complete, setComplete] = useState(state)
   const [close, setClose] = useState(false)
   const handleClick = () => {
      if(complete === true){
         setComplete(false)
         onChange(id, value, false)
      }else{
         setComplete(true)
         onChange(id, value, true)
      }  
   }
   const handleHover = (e, state) => {
      if(state === true){
         setClose(true)
      }else{
         setClose(false)
      }
   }
   const removeItem = () => {
      onRemoveItem(id)
   }
  return (
     <Container 
         complete={complete} 
         onMouseEnter={(e) => handleHover(e, true)}
         onMouseLeave={(e) => handleHover(e, false)}
      >
        <button onClick={handleClick}></button>
        <p onClick={handleClick}>{value}</p>
        {close && <img onClick={removeItem} src={closeSvg} />}
     </Container>
  );
}