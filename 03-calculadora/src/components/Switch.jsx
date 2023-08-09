import { useState } from 'react'
import './switch.css'
import { useEffect } from 'react'

const Switch = () => {

  const [theme, setTeheme] = useState('claro')

  const handleChange = (e) => setTeheme(e.target.checked ? 'oscuro' : 'claro')

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <section className="switch">
      <label className="toggle">
        <input type="checkbox" className='check-switch' onChange={handleChange} hidden/>
        <span className='slider'/>
      </label>
    </section>
  )
}

export default Switch