import { useEffect, useState } from 'react'
import Buscador from './components/Buscador'
import Navbar from './components/Navbar'

function App() {

  const [pokemones, setPokemones] = useState([])

  useEffect(() => {
    const getPokemones = async () => {
      // Recuperamos el listado de los pokemones
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
      const listaPokemones = await response.json()
      const { results } = listaPokemones // Guardamos el result
      
      // Ahora por cada result (pokemon), necesitamos obtener la información
      const newPokemones = results.map( async (pokemon) => {
        const response = await fetch(pokemon.url)
        const poke = await response.json()

        return {
          id: poke.id,
          name: poke.name,
          img: poke.sprites.other.dream_world.front_default
        }
      })

      // Como new pokemones retorna un array de promesas
      // necesitamos esperar a que se resuelvan todas
      // por eso recurrimos a Primise.all
      setPokemones(await Promise.all(newPokemones))
    }


    getPokemones()
  }, [])

  return (
    <>
    <Navbar />
    <div className="App">
      <Buscador/>

      {
        pokemones.map(pokemon => {
          return (
            <div>
              <img src={pokemon.img} alt={pokemon.name} />
              <p>{pokemon.name}</p>
              <span>{pokemon.id}</span>
            </div>
          )
        })
      }
    </div>
    </>
  )
}

export default App
