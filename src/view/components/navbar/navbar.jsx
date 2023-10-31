import Home from '../../../assets/img/home.png'
import userSettings from '../../../assets/img/user-cog.png'
import './navbar.css'

export const Navbar = () => {
  return (
    <nav className='sidebar'>
      <img src={Home} alt='home' />
      <img src={userSettings} alt='User settings' />
    </nav>
  )
}