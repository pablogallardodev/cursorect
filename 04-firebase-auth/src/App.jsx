import './App.css'
import {loginGoogle, onSignOut} from './Firebase/client'
import useUsuairo from './hooks/useUsuario'

function App() {
  const usuario = useUsuairo()

  return (
    <main>
      {
        usuario
        ? <section>
            <h1>Bienvenido {usuario}</h1>
            <button onClick={ onSignOut }>Cerrar sesión</button>
          </section>
        : <section>
            <h1>Firebase Auth</h1>
            <input type="email" placeholder='Correo electrónico' />
            <input type="password" placeholder='Contraseña' />
            <button>Iniciar sesión</button>
            <h3>ó</h3>
            <button onClick={loginGoogle}>Iniciar sesión con Google</button>
            <h3>¿No tienes cuenta?<span> Crea una cuenta</span></h3>
          </section>
      }
    </main>
  )
}

export default App
