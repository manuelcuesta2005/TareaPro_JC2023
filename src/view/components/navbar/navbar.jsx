import './navbar.css'
import Home from '../../../assets/img/home.png'
import logout from '../../../assets/img/logout.png'
import userSettings from '../../../assets/img/user-cog.png'
import { useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'

export const Navbar = () => {
  const navigate = useNavigate()

  const Logout = () => {
    window.localStorage.clear()
    if (window.localStorage.clear() === undefined) {
      navigate('/login')
    }
  }

  return (
    <nav className='sidebar'>
      <img src={userSettings} alt='User settings' />
      <img src={Home} alt='home' />
      <img src={logout} alt='logout' onClick={Logout} />
    </nav>
  )
}
