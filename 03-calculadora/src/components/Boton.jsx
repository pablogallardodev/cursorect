import './boton.css'

const Boton = (params) => {
  const {texto, clase, handleClick} = params
  
  return <button className={clase} onClick={handleClick}>{texto}</button>
}

export default Boton