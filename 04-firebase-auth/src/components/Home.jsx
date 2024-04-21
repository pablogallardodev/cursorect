import { onSignOut } from '../Firebase/client'
import useUsuairo from '../hooks/useUsuario'

const Home = () => {
  const usuario = useUsuairo()

  return (
    <nav>
      <h1>{usuario}</h1>
      <button onClick={ onSignOut }>Cerrar sesión</button>
    </nav>
  )
}

export default Home