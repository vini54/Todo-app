import React, { useContext } from 'react';
import { useState } from 'react/cjs/react.development';
import { Itens } from '../../Context/Context';
import { TodoItem } from '../TodoItem/TodoItem';
import { Container } from './styles';

export function TodoList() {

  const [itens, setItens] = useContext(Itens)
  const [filter, setFilter] = useState("All")
  const handleFilter = (e) => {
    const p = document.querySelectorAll('.filters p')
    p.forEach((item) => {item.classList.remove('active')})
    e.target.classList.add('active')
    setFilter(e.target.innerText)
  }

  const changeState = (id, content, state) => {
    setItens((existingItens) => {
      return existingItens.map((item) => {
        if (item.id === id){
          return {id, content, state}
        }
        else{
          return item
        }
      })
    })
  }

  const removeItem = (id) => {
    setItens((existingItens) => {
      return existingItens.filter((item) => item.id !== id)
    })
  }

  const clearCompleted = () => {
    setItens((existingItens) => {
      return existingItens.filter((item) => item.state !== true)
    })
  }

  const activeItens = itens.filter((i) => i.state === false)
  const completedItens = itens.filter((i) => i.state === true)

  return (
    <Container>
      <div className="itens">
      {filter === "All" && 
      itens.map((item, index) => {
        return <TodoItem 
          key={item.id}
          item={item}
          index={index}
          onChange={changeState}
          onRemoveItem={removeItem}
        />
      })}
      {filter === "Active" && 
        activeItens.map((item, index) => {
            return <TodoItem 
            item={item}
            key={item.id}
            index={index}
            onChange={changeState}
            onRemoveItem={removeItem}
          />
        })
      }
      {filter === "Completed" && 
        completedItens.map((item, index) => {
            return <TodoItem 
            item={item}
            key={item.id}
            index={index}
            onChange={changeState}
            onRemoveItem={removeItem}
          />
        })
      }
      </div>
      
      <div className="nav">
        <div className="length">{activeItens.length} itens left</div>
        <div className="filters">
          <p onClick={handleFilter} className="active">All</p>
          <p onClick={handleFilter}>Active</p>
          <p onClick={handleFilter}>Completed</p>
        </div>
        <div onClick={clearCompleted} className="clear">Clear completed</div>
      </div>
    </Container>
  )
}