import './navbar.css'
import Home from '../../../assets/img/home.png'
import logout from '../../../assets/img/logout.png'
import userSettings from '../../../assets/img/user-cog.png'
import { useContext } from 'react'
import { TodosContext } from '../../../context/todos'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
  const { dispatch } = useContext(TodosContext)
  const navigate = useNavigate()

  const Logout = () => {
    dispatch({ type: 'LOGOUT' })
    navigate('/login')
  }

  return (
    <nav className='sidebar'>
      <img src={userSettings} alt='User settings' onClick={navigate('/home/editUser')} />
      <img src={Home} alt='home' onClick={navigate('/home/dashboard')} />
      <img src={logout} alt='logout' onClick={Logout} />
    </nav>
  )
}
