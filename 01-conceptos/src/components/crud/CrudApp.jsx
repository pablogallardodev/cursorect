import React, { useState, useEffect, useContext } from 'react'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'
import { ThemeContext } from '../../context/ThemeContext';

const CrudApp = () => {

  const { theme } = useContext(ThemeContext)
  const [editData, setEditData] = useState(null);
  const [equipos, setEquipos] = useState(() => {
    const saveEquipos = window.localStorage.getItem("equiposData");
    if (saveEquipos) {
      return JSON.parse(saveEquipos);
    } else {
      return []
    }
  });

  useEffect(() => {
    window.localStorage.setItem("equiposData", JSON.stringify(equipos))
  }, [equipos])

  // inserción de datos
  const addEquipo = (equipo) => {
    setEquipos([
      ...equipos,
      equipo
    ])
  }

  // editar un equipo
  const editEquipo = (equipo) => {
    const newEquipos = equipos.map(el => el.id === equipo.id ? equipo : el)
    setEquipos(newEquipos)
    setEditData(null)
  }

  // Eliminar un equipo
  const deleteEquipo = id => {
    const isDelete = window.confirm(`¿Deseas eliminar el registro con id: ${id}?`)

    if (isDelete) {
      const newEquipos = equipos.filter(el => el.id !== id)
      setEquipos(newEquipos);
    }
  }

  return <div className={theme}>
    <h2>CRUD de equipos de futbol...</h2>
    <CrudForm addEquipo={addEquipo} editEquipo={editEquipo} editData={editData}/>
    <CrudTable equipos={equipos} setEditData={setEditData} deleteEquipo={deleteEquipo}/>
  </div>
}

export default CrudApp