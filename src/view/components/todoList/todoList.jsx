import { useContext } from 'react'
import { TodosContext } from '../../../context/todos'
import { Todo } from '../todo/todo'
import './todoList.css'

/* eslint-disable react/prop-types */

export const Todolist = () => {
  const { state } = useContext(TodosContext)

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
