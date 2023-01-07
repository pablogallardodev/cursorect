import { memo, useMemo } from 'react'

const MemoHijo = ({ contador, sumar, restar }) => {

  // let maxNumero = 0

  // for (let i = 0; i < 1000000000; i++) {
  //   maxNumero ++    
  // }

  const maxNumero = useMemo(() => {
    let maxNumero = 0

    for (let i = 0; i < 1000000000; i++) {
      maxNumero ++    
    }

    return maxNumero
  }, [])

  console.log('Renderizando hijo')

  return (
    <div>
      <h1>MemoHijo</h1>

      <p>{contador}</p>
      <button onClick={sumar}>+</button>
      <button onClick={restar}>-</button>

      <h3>{maxNumero}</h3>
    </div>
  )
}

export default memo(MemoHijo)