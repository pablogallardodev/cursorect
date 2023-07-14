import './boton.css'

const Boton = (params) => {
  const {texto, clase} = params
  
  return <button className={clase}>{texto}</button>
}

export default Boton