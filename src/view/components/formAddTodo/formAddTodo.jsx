import { useContext } from 'react'

import { TodosContext } from '../../../context/todos'
import { createTodo, updateTodo } from '../../../services/todos'
import './formAddTodo.css'

export const FormAddTodo = () => {
  const { state, dispatch } = useContext(TodosContext)
  const text = state.currentTodo ? 'Actualizar' : 'Crear'

  const handleSubmit = (event) => {
    event.preventDefault()
    let body = { userId: state.user._id, isCompleted: false }
    for (const element of event.target.elements) {
      if (element.name) {
        body = { ...body, [element.name]: element.value }
      }
    }
    state.currentTodo ? update(body, event) : create(body, event)
  }

  const create = (body, event) => {
    createTodo(body)
      .then(todo => {
        window.alert('Se creó la tarea: ' + todo.name)
        dispatch({ type: 'CREATE_TODO', payload: todo })
        event.target.reset()
      })
  }

  const update = (body, event) => {
    updateTodo({ ...body, _id: state.currentTodo._id })
      .then(todo => {
        window.alert('Se actualizó la tarea: ' + todo.name)
        dispatch({ type: 'UPDATE_TODO', payload: todo })
        event.target.reset()
      })
  }

  return (
    <form className='formTodo' onSubmit={handleSubmit}>
      <h3 className='formTodo__title'>Administrador de Tareas</h3>
      <fieldset className='form--container'>
        <div className='form--container__input'>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' name='name' required defaultValue={state.currentTodo ? state.currentTodo.name : ''} />
        </div>
        <div className='form--container__input'>
          <label htmlFor='description'>Description</label>
          <input type='text' id='description' name='description' required defaultValue={state.currentTodo ? state.currentTodo.description : ''} />
        </div>
        <div className='form--container__input'>
          <label htmlFor='finishDate'>Finish Date</label>
          <input type='date' id='finishDate' name='finishDate' required defaultValue={state.currentTodo ? state.currentTodo.finishDate : ''} />
        </div>
      </fieldset>
      <button type='submit' className='formTodo__button'> {text} Tarea </button>
    </form>
  )
}
