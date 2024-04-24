import { useState, useCallback } from "react"
import MemoHijo from "./MemoHijo";

  const Memorizacion = () => {
    
    const [contador, setContador] = useState(0);
    const [text, setText] = useState("")

    // const sumar = () => { setContador( contador + 1) }
    const sumar = useCallback(() => setContador(contador + 1), [contador])
    
    // const restar = () => { setContador( contador - 1 ) }
    const restar = useCallback(() => setContador(contador - 1), [contador])

    const handleChange = (e) => setText(e.target.value)

    return (
      <div>
        <h1>Memorización</h1>

        <p>{contador}</p>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>

        <input type="text" onChange={handleChange} value={text} />

        <MemoHijo contador={contador} sumar={sumar} restar={restar}/>
      </div>
    )
  }
  
  export default Memorizacion