import React from 'react'

const CrudTable = ({ equipos }) => {

  console.log(equipos.length);

  return <>
    <h3>Equipos actuales</h3>
    <table border='1'>
      <tr>
        <td>#</td>
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
                    <button className='btn btn-warning mx-1'>Editar</button>
                    <button className='btn btn-danger mx-1'>Eliminar</button>
                  </td>
                </tr>
        })
      }
    </table>
  </>
}

export default CrudTable