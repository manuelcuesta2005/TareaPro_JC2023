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
    let body = {}
    for (const element of event.target.elements) {
      if (element.name) {
        body = { ...body, [element.name]: element.value }
      }
    }
    fetch(API_URL_USER + '/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(response => response.json())
      .then(response => {
        dispatch({ type: 'LOGIN', payload: response.user })
        navigate('/dashboard')
      }

      )
  }

  return (
    <form className='form' onSubmit={handleLogin}>
      <h2 className='form__title'>Tarea Pro</h2>
      <h4 className='form__subtitle'>Login</h4>
      <fieldset className='form__containerInput'>
        <div className='form__containerInput--div'>
          <label htmlFor='email'>Email </label>
          <input type='email' id='email' />
        </div>
        <div className='form__containerInput--div'>
          <label htmlFor='password'>Password </label>
          <input type='password' id='password' />
        </div>
      </fieldset>
      <button type='button' className='form__button'>Login</button>
      <p> Dont have a account? <Link to='/sign-in' className='form__link'>Create new account</Link> </p>
    </form>
  )
}
