import { useContext, useEffect } from 'react'
import { TodosContext } from '../../../context/todos'
import { Todo } from '../todo/todo'
import './todoList.css'

/* eslint-disable react/prop-types */

export const Todolist = () => {
  const { state, dispatch } = useContext(TodosContext)

  useEffect(() => {
    const userId = state.user._id
    fetch(`https://birsbane-numbat-zjcf.1.us-1.fl0.io/api/todo?userId=${userId}`)
      .then((response) => response.json())
      .then((response) => {
        dispatch({ type: 'GET_TODO', payload: response.todos })
      })
  }, [])

  return (
    <div className='containerTodo'>
      {
          state.todos.map(todo => (
            <Todo key={todo._id} todo={todo} />
          ))
          }
    </div>
  )
}
