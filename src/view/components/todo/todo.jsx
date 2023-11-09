/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { deleteTodo } from '../../../services/todos'
import { TodosContext } from '../../../context/todos'
import Edit from '../../../assets/icons/edit.png'
import Trash from '../../../assets/icons/trash.png'
import Check from '../../../assets/icons/check.png'
import './todo.css'

export const Todo = ({ todo }) => {
  const { dispatch } = useContext(TodosContext)

  const handleDelete = () => {
    deleteTodo(todo._id)
      .then(todo => {
        window.alert('la Tarea: ' + todo.name + '; Ha sido eliminada')
        dispatch({ type: 'DELETE_TODO', payload: todo._id })
      })
  }

  return (
    <div className='card'>
      <h3 className='card__title'>{todo.name}</h3>
      <p className='card__description'>{todo.description}</p>
      <button onClick={handleDelete}><img src={Trash} alt='trash' /></button>
      <button><img src={Edit} alt='pencil' /></button>
      <button><img src={Check} alt='check' /></button>
    </div>
  )
}
