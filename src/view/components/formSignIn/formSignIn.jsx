import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { TodosContext } from '../../../context/todos'
import { API_URL_USER } from '../../../env'

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

    fetch(API_URL_USER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(response => response.json())
      .then(response => {
        window.sessionStorage.setItem('_id', response._id)
        console.log('user ID: ' + window.sessionStorage.getItem('_id'))
        //  window.sessionStorage.setItem('token', response.token)
        //  dispatch({ type: 'LOGIN', payload: true })
        dispatch({ type: 'LOGIN', payload: response.user })
        window.alert('Bienvenido a Tarea Pro, ' + response.user.firstName)
        navigate('/home/dashboard')
      })
  }
  return (
    <form className='form' onSubmit={handleSubmit}>
      <h2 className='form__title'>Tarea Pro</h2>
      <h4 className='form__subtitle'>Login</h4>
      <fieldset className='form__containerInput'>
        <div className='form__containerInput--div'>
          <label htmlFor='firstName'>First Name </label>
          <input type='text' id='firstName' name='firstName' required />
        </div>
        <div className='form__containerInput--div'>
          <label htmlFor='lastName'>Last Name </label>
          <input type='text' id='lastName' name='lastName' required />
        </div>
        <div className='form__containerInput--div'>
          <label htmlFor='email'>Email </label>
          <input type='email' id='email' name='email' required />
        </div>
        <div className='form__containerInput--div'>
          <label htmlFor='password'>Password </label>
          <input type='password' id='password' name='password' required />
        </div>
      </fieldset>
      <button type='submit' className='form__button'>Sign In</button>
      <p>have you a account? <Link to='/login' className='form__link'>Log in</Link> </p>
    </form>
  )
}
