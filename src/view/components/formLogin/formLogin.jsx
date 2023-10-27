import { Link } from 'react-router-dom'
import './formLogin.css'

export const FormLogin = () => {
  return (
    <form className='form'>
      <h2 className='form__title'>Tarea Pro</h2>
      <h4 className='form__subtitle'>Login</h4>
      <fieldset>
        <div>
          <label htmlFor='email'>Email </label>
          <input type='email' id='email' />
        </div>
        <div>
          <label htmlFor='password'>Password </label>
          <input type='password' id='password' />
        </div>
      </fieldset>
      <button type='button' className='form__button'>Login</button>
      <Link to='/sign-in' className='form__link'>Create new account</Link>
    </form>
  )
}
