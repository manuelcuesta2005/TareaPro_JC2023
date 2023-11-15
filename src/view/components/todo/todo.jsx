/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { deleteTodo } from '../../../services/todos'
import { TodosContext } from '../../../context/todos'
import { formatDate } from '../../../hooks/formatDate'
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
      }).catch(error =>
        console.error(error)
      )
  }

  return (
    <div className='card'>
      <h3 className='card__title'>{todo.name}</h3>
      <p className='card__description'>{todo.description}</p>
      <p className='card__time'>Fecha: {formatDate(todo.finishDate)}</p>
      <div className='card__buttons'>
        <button onClick={handleDelete}><img src={Trash} alt='trash' width={32} /></button>
        <button><img src={Edit} alt='pencil' width={32} /></button>
        <button><img src={Check} alt='check' width={32} /></button>
      </div>
    </div>
  )
}
