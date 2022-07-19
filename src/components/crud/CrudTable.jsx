import React from 'react'

const CrudTable = ({ equipos, setEditData }) => {

  

  return <>
    <h3>Equipos actuales</h3>
    <table className='table w-50'>
      <tr>
        <td>ID</td>
        <td>Equipo</td>
        <td>Pais</td>
        <td></td>
      </tr>
      {
        equipos.length === 0 ? <tr>No hay datos</tr>
        : equipos.map((equipo, index) => {
          return <tr key={index}>
                  <td>{equipo.id}</td>
                  <td>{equipo.equipo}</td>
                  <td>{equipo.pais}</td>
                  <td>
                    <button className='btn btn-outline-warning mx-1'
                    onClick={() => setEditData(equipo)}>Editar</button>
                    <button className='btn btn-outline-danger mx-1'>Eliminar</button>
                  </td>
                </tr>
        })
      }
    </table>
  </>
}

export default CrudTable