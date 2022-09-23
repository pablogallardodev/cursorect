import useForm from "../hooks/useForm"

const ContactForm = () => {

  const initialData = {
    nombre: 'Pablo',
    correo: 'correo@prueba.com',
    asunto: 'Saludo',
    mensaje: 'Hola soy Pablo Gallardo !!!'
  }

  const { form, loading, handleChange, handleSubmit } = useForm(initialData)

  return (
    <form className='w-100'>
      <label className='form-label'>Nombre</label>
      <input type="text" className='form-control' name="nombre" value={form.nombre} onChange={handleChange}/>

      <label className='form-label'>Correo electrónico</label>
      <input type="email" className='form-control' name="correo" value={form.correo} onChange={handleChange}/>

      <label className='form-label'>Asunto</label>
      <input type="text" className='form-control'name="asunto" value={form.asunto} onChange={handleChange}/>

      <label className='form-label'>Mensaje</label>
      <textarea className='form-control'name="mensaje" value={form.mensaje} onChange={handleChange}/>

      <button className='btn btn-warning mt-1 w-100'>Enviar</button>
    </form>
  )
}

export default ContactForm