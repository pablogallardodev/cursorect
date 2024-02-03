import './App.css'
import {loginGoogle} from './Firebase/client'

function App() {

  return (
    <main>
      <section>
        <h1>Firebase Auth</h1>
        <input type="email" placeholder='Correo electrónico' />
        <input type="password" placeholder='Contraseña' />
        <button>Iniciar sesión</button>
        <h3>ó</h3>
        <button onClick={loginGoogle}>Iniciar sesión con Google</button>
        <h3>¿No tienes cuenta?<span> Crea una cuenta</span></h3>
      </section>
    </main>
  )
}

export default App
