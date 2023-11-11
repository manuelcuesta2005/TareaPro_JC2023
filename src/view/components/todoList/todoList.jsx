import { Todo } from '../todo/todo'

/* eslint-disable react/prop-types */

export const Todolist = ({ todos }) => {
  return (
    <div className='containerTodo'>
      {
          todos && todos.map(todo => (
            <Todo key={todo._id} todo={todo} />
          ))
      } : <h1>No tienes tareas pendientes</h1>
    </div>
  )
}
