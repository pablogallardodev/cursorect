import './pokemones.css'
import usePokemones from '../hooks/usePokemones'
import InfiniteScroll from 'react-infinite-scroll-component'
import Cargando from './Cargando'
import DetallePokemon from './DetallePokemon'
import { useState } from 'react'

function Pokemon({ id, nombre, imagen, verPokemon }) {
  return (
    <div className='pokemon-card' onClick={verPokemon}>
      <img src={imagen} alt={nombre} className='pokemon-imagen' />
      <p className='pokemon-titulo'>
        <span>#{id}</span>
        <span>{nombre}</span>
      </p>
    </div>
  )
}

function Pokemones() {

  const { pokemones, masPokemones, verMas } = usePokemones()
  const [mostrar, setMostrar] = useState({ mostrar: false, pokemon: {} })

  const verPokemon = (pokemon) => setMostrar({ mostrar: true, pokemon })

  const noVerPokemon = () => setMostrar({ mostrar: false, pokemon: {}})
  
  return (
    <>
      <DetallePokemon {...mostrar} cerrar={noVerPokemon}/>
      <InfiniteScroll
        dataLength={pokemones.length}
        next={masPokemones}
        hasMore={verMas}
        loader={<Cargando />}
        endMessage={
          <h3 className='titulo' style={{ gridColumn: '1/6' }}>Lo siento, no hay más pokemones por mostrar</h3>
        }
        className='pokemon-container'
      >
        { pokemones.map(pokemon => <Pokemon {...pokemon} key={pokemon.id} verPokemon={() => verPokemon(pokemon)}/> )}
      </InfiniteScroll>
    </>
  )
}

export default Pokemones