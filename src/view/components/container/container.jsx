import './container.css'

// eslint-disable-next-line react/prop-types
export const Container = ({ children }) => {
  return (
    <section className='container'>
      {children}
    </section>
  )
}
