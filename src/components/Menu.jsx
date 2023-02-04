import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext';

const Menu = () => {
  const { theme, handleTheme } = useContext(ThemeContext)

  return (
    <div className={`d-flex flex-column justify-content-start ${theme}`}>
      <div className={`text-center py-1 my-1`}>
        <input type="radio" name="theme" id="light" value="light" onChange={handleTheme}/>
        <label htmlFor="light" className="mx-1">Claro</label>
        <input type="radio" name="theme" id="dark" value="dark" onChange={handleTheme}/>
        <label htmlFor="dark" className="mx-1">Oscuro</label>
      </div>
      <h2 className='text-center'>Menú</h2>
      <Link to='/theme' className='btn btn-primary m-1'>Context</Link>
      <Link to='/memorizacion' className='btn btn-primary m-1'>Memorizacion</Link>
      <Link to='/todolist' className='btn btn-primary m-1'>Todo List</Link>
      <Link to='/modales' className='btn btn-primary m-1'>Modales</Link>
      <Link to='/contactForm' className='btn btn-primary m-1'>Validar Formulario</Link>
      <Link to='/crudAPI' className='btn btn-primary m-1'>Crud API</Link>
      <Link to='/crudApp' className='btn btn-primary m-1'>Crud App</Link>
      <Link to='/navbar' className='btn btn-primary m-1'>Navbar</Link>
      <Link to='/estilos' className='btn btn-primary m-1'>Estilos</Link>
      <Link to='/referencia' className='btn btn-primary m-1'>Referencia</Link>
      <Link to='/pokemones' className='btn btn-primary m-1'>Pokemones</Link>
      <Link to='/contador' className='btn btn-primary m-1'>Contador</Link>
      <Link to='/listaNombres' className='btn btn-primary m-1'>Lista Nombres</Link>
    </div>
  )
}

export default Menu