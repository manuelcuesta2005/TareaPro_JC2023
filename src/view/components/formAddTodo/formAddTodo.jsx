import './formAddTodo.css'

export const FormAddTodo = () => {
  return (
    <form className='formTodo'>
      <h3 className='formTodo__title'>Administrador de Tareas</h3>
      <fieldset className='form--container'>
        <div className='form--container__input'>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' name='name' />
        </div>
        <div className='form--container__input'>
          <label htmlFor='description'>Description</label>
          <input type='text' id='description' name='description' />
        </div>
        <div className='form--container__input'>
          <label htmlFor='finishDate'>Finish Date</label>
          <input type='date' id='finishDate' name='finishDate' />
        </div>
      </fieldset>
      <button className='formTodo__button'> Crear Tarea </button>
    </form>
  )
}
