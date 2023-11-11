/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { deleteTodo } from '../../../services/todos'
import { TodosContext } from '../../../context/todos'
import Edit from '../../../assets/icons/edit.png'
import Trash from '../../../assets/icons/trash.png'
import Check from '../../../assets/icons/check.png'
import './todo.css'

export const Todo = ({ todos }) => {
  const { dispatch } = useContext(TodosContext)

  const handleDelete = () => {
    deleteTodo(todos._id)
      .then(todos => {
        window.alert('la Tarea: ' + todos.name + '; Ha sido eliminada')
        dispatch({ type: 'DELETE_TODO', payload: todos._id })
      })
  }

  return (
    <div className='card'>
      <h3 className='card__title'>{todos.name}</h3>
      <p className='card__description'>{todos.description}</p>
      <button onClick={handleDelete}><img src={Trash} alt='trash' /></button>
      <button><img src={Edit} alt='pencil' /></button>
      <button><img src={Check} alt='check' /></button>
    </div>
  )
}
