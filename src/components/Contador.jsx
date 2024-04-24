import React, { useState } from "react"

const Contador = () => {

    const [contador, setContador] = useState(0);

    return <div>
        <p>Valor actual del contador: {contador}</p>
        <button onClick={() => { setContador( contador - 1 ) }}>Disminuir</button>
        <button onClick={() => { setContador( 0 ) }}>Restablecer</button>
        <button onClick={() => { setContador( contador + 1) }}> Aumentar</button>
    </div>
}

export default Contador;