import Home from '../../../assets/img/home.png'
import userSettings from '../../../assets/img/user-cog.png'
// import { Link } from 'react-router-dom'
import logout from '../../../assets/img/logout.png'
import './navbar.css'

export const Navbar = () => {
  return (
    <nav className='sidebar'>
      <img src={userSettings} alt='User settings' />
      <img src={Home} alt='home' />
      <img src={logout} alt='logout' />
    </nav>
  )
}
