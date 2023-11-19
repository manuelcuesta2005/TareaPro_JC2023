import { useContext } from 'react'
import { TodosContext } from '../../../context/todos'
import user from '../../../assets/img/user.png'
import './formEditUser.css'

export const FormEditUser = () => {
  const { state } = useContext(TodosContext)

  return (
    <form className='form--editUser'>
      <img src={user} alt='usuario' />
      <fieldset className='form--edit'>
        <div className='form--edit__input'>
          <label htmlFor='firstName'>First Name</label>
          <input type='text' id='firstName' name='firstName' defaultValue={state.user.firstName} />
        </div>
        <div className='form--edit__input'>
          <label htmlFor='lastName'>Last Name</label>
          <input type='text' id='lastName' name='lastName' defaultValue={state.user.lastName} />
        </div>
        <div className='form--edit__input'>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' name='email' defaultValue={state.user.email} />
        </div>
        <div className='form--edit__input'>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' name='password' defaultValue={state.user.password} />
        </div>
      </fieldset>
      <button type='submit' className='form--edit__button'> Editar Usuario </button>
    </form>
  )
}
