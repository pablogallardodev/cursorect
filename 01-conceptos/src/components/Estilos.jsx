import "./Estilos.css"
import misEstilos from "./Estilos.module.css"

const Estilos = () => {

  const estilos = {
    backgroundColor: '#124578',
    color: 'white',
    padding: 5
  }

  return <>
    <h1>Estilos...</h1>

    <h3 style={{ backgroundColor: 'red', width: '100%', padding: 5 }}>Estilos dentro de la misma linea</h3>
    
    <h3 style={estilos}>Estilos con variable</h3>
    
    <h3 className="succes">Estilos en hoja externa</h3>

    <h3 className={misEstilos.error}>Estilos con "module"</h3>
  </>
}

export default Estilos;