import { useState } from 'react'
import Modal from './Modal'
import Contador from './Contador'
import Formulario from './ContactForm'

const Modales = () => {

  const [mostrar, setMostrar] = useState(false)
  const [verContador, setVerContador] = useState(false)
  const [verFormulario, setVerFormulario] = useState(false)

  return (
    <div className="w-100">
      <h1>Modales</h1>
      <button className='btn btn-success m-2' onClick={() => setMostrar(true)}>Ver modal</button>
      <Modal isOpen={mostrar} onClose={() => setMostrar(false)}>
        <h2>Prueba de children</h2>
        <h4>Segundo componente</h4>
        <button>Cerarr</button>
      </Modal>

      <button className='btn btn-success m-2' onClick={() => setVerContador(true)}>Ver contador</button>
      <Modal isOpen={verContador} onClose={() => setVerContador(false)}>
        <Contador />
      </Modal>

      <button className='btn btn-success m-2' onClick={() => setVerFormulario(true)}>Ver Formulario</button>
      <Modal isOpen={verFormulario} onClose={() => setVerFormulario(false)}>
        <Formulario />
      </Modal>
    </div>
  )
}

export default Modales