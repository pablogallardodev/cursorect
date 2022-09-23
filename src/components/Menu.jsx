import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className='d-flex flex-column justify-content-start'>
      <h2 className='text-center'>Menú</h2>
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