import { useContext } from 'react'
import { TodosContext } from '../../../context/todos'
import { updateUser } from '../../../services/users.js'
import user from '../../../assets/img/user.png'
import './formEditUser.css'

export const FormEditUser = () => {
  const { state, dispatch } = useContext(TodosContext)

  const handleEdit = (event) => {
    event.preventDefault()
    let body = {}
    for (const element of event.target.elements) {
      if (element.name) {
        body = { ...body, [element.name]: element.value }
      }
    }
    updateUser({ ...body, _id: state.user._id })
      .then(user => {
        window.alert('Se ha actualizado el usuario')
        dispatch({ type: 'UPDATE_USER', payload: user })
        event.target.reset()
      })
  }
  return (
    <form className='form--editUser' onSubmit={handleEdit}>
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
