import React, { useState, useEffect } from 'react'
import CrudForm from './CrudForm'
import CrudTable from './CrudTable'
import Loader from './Loader'
import Message from './Message'
import { helpFetch } from '../../helpers/helpFetch'

const CrudAPI = () => {

  const API = helpFetch()
  const [editData, setEditData] = useState(null)
  const [equipos, setEquipos] = useState(null)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    setLoading(true)
    API.get("equipos").then((response) => {
      if (!response.error) {
        setEquipos(response)
        setErrorMessage(null)
      } else {
        setEquipos(null)
        setErrorMessage(response.statusText)
      }

      setLoading(false)
    })    
  }, [])

  // inserción de datos
  const addEquipo = (equipo) => {
    setLoading(true)
    const options = {
      body: equipo
    }

    API.post("equipos", options).then(response => {
      if (!response.error) {
        setEquipos([...equipos, equipo])
        setErrorMessage(null)
      } else {
        setEquipos(null)
        setErrorMessage(response.statusText)
      }

      setLoading(false)
    })
  }

  // editar un equipo
  const editEquipo = (equipo) => {
    setLoading(true)
    const options = {
      body: equipo
    }

    API.put("equipos", options, equipo.id).then(response => {
      if (!response.error) {
        const newEquipos = equipos.map(el => el.id === equipo.id ? equipo : el)
        setEquipos(newEquipos)
        setEditData(null)
        setErrorMessage(null)
      } else {
        setEquipos(null)
        setErrorMessage(response.statusText)
      }

      setLoading(false)
    })
  }

  // Eliminar un equipo
  const deleteEquipo = id => {
    setLoading(true)
    const isDelete = window.confirm(`¿Deseas eliminar el registro con id: ${id}?`)

    if (isDelete) {
      API.del("equipos", id).then( response => {
        if (!response.error) {
          const newEquipos = equipos.filter(el => el.id !== id)
          setEquipos(newEquipos)
          setErrorMessage(null)
        } else {
          setEquipos(null)
          setErrorMessage(response.statusText)
        }
  
        setLoading(false)
      })
    } else {
      setLoading(false)
    }
  }

  return <>
    <h2>CRUD API de equipos</h2>
    <CrudForm addEquipo={addEquipo} editEquipo={editEquipo} editData={editData}/>
    { 
      loading
      ? <Loader />
      : equipos && <CrudTable equipos={equipos} setEditData={setEditData} deleteEquipo={deleteEquipo}/> 
    }
    { errorMessage && <Message text={errorMessage}/> }
  </>
}

export default CrudAPI