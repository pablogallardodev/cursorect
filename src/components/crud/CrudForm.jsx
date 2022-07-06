import React from 'react'

const CrudForm = () => {
  return <>
    <form className='m-3'>
      <label htmlFor="equipo">Equipo:</label>
      <input type="text" name="equipo"/>
      <label htmlFor="pais">Pais:</label>
      <input type="text" name="pais"/>
      <input className='btn btn-success mx-1' type="submit" value="Agregar" />
      <input className='btn btn-danger mx-1' type="reset" value="Cancelar" />
    </form>
  </>
}

export default CrudForm