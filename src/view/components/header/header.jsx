import iconUser from '../../../assets/img/user-circle.png'
import './header.css'

export const Header = () => {
  return (
    <header className='user-panel'>
      <p>Bienvenido</p>
      <img src={iconUser} alt='icon-user' />
    </header>
  )
}
