import { Link } from 'react-router-dom'

export const FormSignIn = () => {
  return (
    <form className='form'>
      <h2 className='form__title'>Tarea Pro</h2>
      <h4 className='form__subtitle'>Login</h4>
      <fieldset>
        <div>
          <label htmlFor='firstName'>First Name </label>
          <input type='text' id='firstName' />
        </div>
        <div>
          <label htmlFor='lastName'>Last Name </label>
          <input type='text' id='lastName' />
        </div>
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
      <p>have you a account? <Link to='/login' className='form__link'>Log in</Link> </p>
    </form>
  )
}
