import { useState } from 'react'
import './App.css'
import {loginGoogle, onSignOut} from './Firebase/client'
import useUsuairo from './hooks/useUsuario'

function App() {
  const usuario = useUsuairo()
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({ email: '', pasword: ''})

  const handleSubmit = () => {
    if (isLogin) {
      console.log("Iniciando sesión...", formData)
    } else {
      console.log("Registrando usuario...", formData)
    }
  }

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
            <input type="email" placeholder='Correo electrónico' value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}/>
            <input type="password" placeholder='Contraseña' value={formData.pasword} onChange={(e) => setFormData({...formData, pasword: e.target.value})}/>
            <button onClick={handleSubmit}>{ isLogin ? 'Iniciar sesión' : 'Registrarse' }</button>
            <h3>ó</h3>
            <button onClick={loginGoogle}>{ isLogin ? 'Iniciar sesión con Google' : 'Registrarse con Google'}</button>
            {
              isLogin
              ? <h3>¿No tienes cuenta?<span onClick={() => setIsLogin(!isLogin) }> Crea una cuenta</span></h3>
              : <h3>¿Ya tienes cuenta?<span onClick={() => setIsLogin(!isLogin) }> Iniciar Sesión</span></h3>
            }
          </section>
      }
    </main>
  )
}

export default App
