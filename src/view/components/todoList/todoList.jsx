import { useEffect, useState } from 'react'
import { Todo } from '../todo/todo'
import './todoList.css'

/* eslint-disable react/prop-types */

export const Todolist = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const userId = globalThis.localStorage.getItem('userId')
    fetch(`https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/todo?userId=${userId}`)
      .then((response) => response.json())
      .then((response) => {
        setTodos(response.todos)
      })
  }, [])

  return (
    <div className='containerTodo'>
      {
          todos && todos.map(todo => (
            <Todo key={todo._id} todo={todo} />
          ))
          }  : <h1>No tienes tareas pendientes</h1>
    </div>
  )
}
