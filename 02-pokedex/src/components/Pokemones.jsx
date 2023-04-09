import usePokemones from '../hooks/usePokemones'
import InfiniteScroll from 'react-infinite-scroll-component'
import './pokemones.css'
import Cargando from './Cargando'

function Pokemon({ id, nombre, imagen }) {
  return (
    <div className='pokemon-card'>
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
  
  return (
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
      { pokemones.map(pokemon => <Pokemon {...pokemon} key={pokemon.id}/> )}
    </InfiniteScroll>
  )
}

export default Pokemones