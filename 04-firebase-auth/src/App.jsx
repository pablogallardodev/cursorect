import { useState } from 'react'
import './App.css'
import {loginGoogle, loginUsuario, onSignOut, registroUsuario} from './Firebase/client'
import useUsuairo from './hooks/useUsuario'

function App() {
  const usuario = useUsuairo()
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({ email: '', password: '', error: ''})

  const handleSubmit = () => {
    if (isLogin) {
      loginUsuario(formData, setFormData)
    } else {
      registroUsuario(formData, setFormData)
    }

    setTimeout(() => setFormData({...formData, error: ''}), 3000)
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
            <input type="password" placeholder='Contraseña' value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}/>
            <span className="error">{formData.error}</span>
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
