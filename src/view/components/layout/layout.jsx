import { Header } from '../header/header'
import { Navbar } from '../navbar/navbar'
// import { Outlet } from 'react-router-dom'
import './layout.css'
import { Container } from '../container/container'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Header />
        <main className='content'>
          <Outlet />
        </main>
      </Container>
    </>
  )
}
