import React, { useState, useEffect } from 'react'

const Pokemones = () => {
    
    const [pokemones, setPokemones] = useState([]);

    useEffect(() => {
        async function obtenerPokemones() {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
            const data = await response.json();

            setPokemones(data.results);
        }

        obtenerPokemones();
    }, [])

    return (
        <ul>        
            {pokemones.map((pokemon, index) => {
                return <li key={index}>{pokemon.name}</li>
            })}
        </ul>
    )
}

export default Pokemones