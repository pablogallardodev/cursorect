import React, { useState } from "react";

const ListaNombres = () => {

    const [nombre, setNombre] = useState("");
    const [nombres, setNombres] = useState([]);

    const guardar = () => {
        setNombres([...nombres, nombre]);
        setNombre("");
    }

    return (
        <div>
            <p>Ingresa un nombre: </p>
            <input type="text" value={nombre} onChange={(e) => { setNombre(e.target.value) }}/>
            <button onClick={guardar}>Enviar</button>
            <ul>
                {
                    nombres.map((elemento, index) => {
                        return <li key={index}>{elemento}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default ListaNombres;