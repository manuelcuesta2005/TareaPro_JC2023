/* eslint-disable react/prop-types */
import { useContext } from 'react'
import iconUser from '../../../assets/img/user.png'
import { TodosContext } from '../../../context/todos'
import './header.css'

export const Header = () => {
  const { state } = useContext(TodosContext)
  return (
    <header className='user-panel'>
      {state.user
        ? (<p>Bienvenido, {state.user.firstName}</p>)
        : (<p>Usuario no registrado</p>)}
      <img src={iconUser} alt='icon-user' />
    </header>
  )
}
