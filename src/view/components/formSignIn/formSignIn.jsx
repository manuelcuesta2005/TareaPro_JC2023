import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { TodosContext } from '../../../context/todos'
import { API_URL } from '../../../env'

export const FormSignIn = () => {
  const { dispatch } = useContext(TodosContext)
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    let body = {}
    for (const element of event.target.elements) {
      if (element.name) {
        body = { ...body, [element.name]: element.value }
      }
    }

    fetch(API_URL + '/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(response => response.json())
      .then(response => {
        dispatch({ type: 'LOGIN', payload: response.user })
        window.alert('Bienvenido a Tarea Pro, ' + response.user.firstName)
        navigate('/dashboard')
      })
  }
  return (
    <form className='form' onSubmit={handleSubmit}>
      <h2 className='form__title'>Tarea Pro</h2>
      <h4 className='form__subtitle'>Login</h4>
      <fieldset>
        <div>
          <label htmlFor='firstName'>First Name </label>
          <input type='text' id='firstName' name='firstName' />
        </div>
        <div>
          <label htmlFor='lastName'>Last Name </label>
          <input type='text' id='lastName' name='lastName' />
        </div>
        <div>
          <label htmlFor='email'>Email </label>
          <input type='email' id='email' name='email' />
        </div>
        <div>
          <label htmlFor='password'>Password </label>
          <input type='password' id='password' name='password' />
        </div>
      </fieldset>
      <button type='submit' className='form__button'>Sign In</button>
      <p>have you a account? <Link to='/login' className='form__link'>Log in</Link> </p>
    </form>
  )
}
