import usePokemones from '../hooks/usePokemones'
import './pokemones.css'

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

  const { pokemones, masPokemones } = usePokemones()
  
  return (
    <section className='pokemon-container'>
      { pokemones.map(pokemon => <Pokemon {...pokemon} key={pokemon.id}/> )}
      <button className='btn-buscar' onClick={masPokemones}>Mostrar más pokemones</button>
    </section>
  )
}

export default Pokemones