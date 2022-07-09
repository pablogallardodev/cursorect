import React, { useState } from 'react'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'

const baseDatos = [
  { id:1, equipo:'Barcelona', pais: 'España' },
  { id:2, equipo:'Guadalajara', pais: 'México' },
  { id:3, equipo:'Boca JR', pais: 'Argentina' },
  { id:4, equipo:'Manchester City', pais: 'Inglaterra' },
  { id:5, equipo:'Real Madrid', pais: 'España' },
]

const CrudApp = () => {

  const [equipos, setEquipos] = useState(baseDatos);

  // inserción de datos
  const addEquipo = (equipo) => {
    setEquipos([
      ...equipos,
      equipo
    ])
  }

  return <>
    <h2>CRUD de equipos de futbol...</h2>
    <CrudForm addEquipo={addEquipo}/>
    <CrudTable equipos={equipos}/>
  </>
}

export default CrudApp