import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { TodosContext } from '../../../context/todos'
import { API_URL_USER } from '../../../env'
import './formLogin.css'

export const FormLogin = () => {
  const { dispatch } = useContext(TodosContext)
  const navigate = useNavigate()

  const handleLogin = (event) => {
    event.preventDefault()
    fetch(API_URL_USER + '/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: event.target.elements.email.value,
        password: event.target.elements.password.value
      })
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Error al iniciar sesión')
        }
      })
      .then((data) => {
        dispatch({ type: 'LOGIN', payload: data.user })
        navigate('/home/dashboard')
      })
      .catch(error => console.error(error))
  }

  return (
    <form className='form' onSubmit={handleLogin}>
      <h2 className='form__title'>Tarea Pro</h2>
      <h4 className='form__subtitle'>Login</h4>
      <fieldset className='form__containerInput'>
        <div className='form__containerInput--div'>
          <label htmlFor='email'>Email </label>
          <input type='email' id='email' required />
        </div>
        <div className='form__containerInput--div'>
          <label htmlFor='password'>Password </label>
          <input type='password' id='password' required />
        </div>
      </fieldset>
      <button type='submit' className='form__button'>Login</button>
      <p> Dont have a account? <Link to='/sign-in' className='form__link'>Create new account</Link> </p>
    </form>
  )
}
