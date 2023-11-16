import { useContext } from 'react'
import { TodosContext } from '../../../context/todos'
import './formEditUser.css'

export const FormEditUser = () => {
  const { state } = useContext(TodosContext)

  return (
    <form>
      <fieldset className='form--container'>
        <div className='form--container__input'>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' name='name' defaultValue={state.currentTodo ? state.currentTodo.name : ''} />
        </div>
        <div className='form--container__input'>
          <label htmlFor='description'>Description</label>
          <input type='text' id='description' name='description' defaultValue={state.currentTodo ? state.currentTodo.description : ''} />
        </div>
        <div className='form--container__input'>
          <label htmlFor='finishDate'>Finish Date</label>
          <input type='date' id='finishDate' name='finishDate' defaultValue={state.currentTodo ? state.currentTodo.finishDate : ''} />
        </div>
      </fieldset>
      <button type='submit' className='formTodo__button'> Editar Usuario </button>
    </form>
  )
}
