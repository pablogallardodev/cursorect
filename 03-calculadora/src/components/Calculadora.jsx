import Boton from './Boton'
import './calculadora.css'

const Calculadora = () => {
  return (
    <main>
      <input className='resultado' type="text" value='50' />
      <input className='display' type="text" value='25+25'/>
      <Boton texto='C' clase='gris'/>
      <Boton texto='+/-' clase='gris'/>
      <Boton texto='%' clase='gris'/>
      <Boton texto='/' clase='operacion'/>
      <Boton texto='7' clase='numero'/>
      <Boton texto='8' clase='numero'/>
      <Boton texto='9' clase='numero'/>
      <Boton texto='*' clase='operacion'/>
      <Boton texto='4' clase='numero'/>
      <Boton texto='5' clase='numero'/>
      <Boton texto='6' clase='numero'/>
      <Boton texto='-' clase='operacion'/>
      <Boton texto='1' clase='numero'/>
      <Boton texto='2' clase='numero'/>
      <Boton texto='3' clase='numero'/>
      <Boton texto='+' clase='operacion'/>
      <Boton texto='.' clase='numero'/>
      <Boton texto='0' clase='numero'/>
      <Boton texto='◀' clase='numero'/>
      <Boton texto='=' clase='operacion'/>
    </main>
  )
}

export default Calculadora