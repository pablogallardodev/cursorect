import React, { useState, useEffect } from 'react'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'

const CrudAPI = () => {

  const [editData, setEditData] = useState(null);
  const [equipos, setEquipos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/equipos")
    .then((response) => response.json())
    .then((data) => {
      setEquipos(data)
    })
  }, [])

  // inserción de datos
  const addEquipo = (equipo) => {}

  // editar un equipo
  const editEquipo = (equipo) => {}

  // Eliminar un equipo
  const deleteEquipo = id => {}

  return <>
    <h2>CRUD API de equipos</h2>
    <CrudForm addEquipo={addEquipo} editEquipo={editEquipo} editData={editData}/>
    <CrudTable equipos={equipos} setEditData={setEditData} deleteEquipo={deleteEquipo}/>
  </>
}

export default CrudAPI