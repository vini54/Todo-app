import { useContext, useState } from 'react';
import { Container } from './styles';
import { Itens } from '../../Context/Context';

let idAcc = 0
const generateId = () => {
   idAcc = idAcc + 1
   return idAcc
}

export function NewTodo() {

   const [itens, setItens] = useContext(Itens)
   const [complete, setComplete] = useState(false)
   const [isEdit, setIsEdit] = useState(false)

   const handleComplete = () => {
      if(complete === true){
         setComplete(false)
      }else{
         setComplete(true)
      }
   }
   const handleKeyPress = (e) => {
      if(e.key === "Enter" && e.target.value.length > 2){
         const newTodo = {
            id: generateId(),
            content: e.target.value,
            state: complete
         }
         setItens((existItens) => {
            return [...existItens, newTodo]
         })
         setIsEdit(false)
         if(isEdit === false){
            e.target.value = ''
            setComplete(false)
         }
      }
   }
   return(
      <Container complete={complete}>
         <button onClick={handleComplete}></button>
         <input onKeyPress={handleKeyPress} type="text" placeholder="Create a new todo..."></input>
      </Container>
   );
}