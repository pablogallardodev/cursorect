import React, { useState, useEffect } from 'react'

const Pokemones = () => {
    
    const [pokemones, setPokemones] = useState([]);
    const [anterior, setAnterior] = useState(null);
    const [siguiente,setSiguiente] = useState(null);
    const [actual, setActual] = useState('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');

    useEffect(() => {
        async function obtenerPokemones() {
            const response = await fetch(actual);
            const data = await response.json();
            console.log(data);
            setPokemones(data.results);
            setAnterior(data.previous);
            setSiguiente(data.next);
        }

        obtenerPokemones();
    }, [actual])

    return (
        <div>
            <ul>        
                {pokemones.map((pokemon, index) => {
                    return <li key={index}>{pokemon.name}</li>
                })}
            </ul>
            <button onClick={() => anterior !== null && setActual(anterior)}>Anteriores</button>
            <button onClick={() => siguiente !== null && setActual(siguiente)}>Siguientes</button>
        </div>
    )
}

export default Pokemones