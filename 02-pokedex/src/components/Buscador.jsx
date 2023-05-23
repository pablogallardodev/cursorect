import './buscador.css'
import { Buscar } from './Icons';

function Buscador({ busqueda, setBusqueda, buscarPokemon }) {
  
  return (
    <>
      <h3 className='titulo'>Mas de 800 pokemones, elige tu favorito</h3>
      <form className='container-buscar' onSubmit={buscarPokemon}>
        <input type="text" placeholder='Encuentra tu pokemon' className='input-buscar'
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)} />
        <button className='btn-buscar' type='submit'>
          <Buscar />
          Buscar pokemon
        </button>
      </form>
    </>
  )
}

export default Buscador;