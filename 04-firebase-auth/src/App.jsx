import Home from './components/Home'
import Login from './components/Login'
import useUsuairo from './hooks/useUsuario'

function App() {
  const usuario = useUsuairo()

  return usuario ? <Home /> : <Login />
}

export default App
