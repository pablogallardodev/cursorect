import useForm from "../hooks/useForm"

const ContactForm = () => {

  const initialData = {
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: ''
  }

  const onValidate = (form) => {
    let errors = {}
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;

    if (!form.nombre.trim()) {
      errors.nombre = 'El campo "Nombre" no debe ser vacio.'
    } else if (!regexName.test(form.nombre)){
      errors.nombre = 'El campo "Nombre" solo acepta letras y espacios.'
    }

    if (!form.correo.trim()) {
      errors.correo = 'El campo "Correo" no debe ser vacio.'
    } else if (!regexEmail.test(form.correo)){
      errors.correo = 'El campo "Correo" contiene un formato no valido.'
    }

    if (!form.asunto.trim()) {
      errors.asunto = 'El campo "Asunto" no debe ser vacio.'
    } else if (!regexName.test(form.asunto)){
      errors.asunto = 'El campo "Asunto" solo acepta letras y espacios.'
    }

    if (!form.mensaje.trim()) {
      errors.mensaje = 'El campo "Mensaje" no debe ser vacio.'
    } else if (!regexComments.test(form.mensaje)){
      errors.mensaje = 'El campo "Mensaje" acepta solo 255 caracteres.'
    }

    return errors
  }

  const { form, errors, loading, handleChange, handleSubmit } = useForm(initialData, onValidate)

  return (
    <form className='w-100' onSubmit={handleSubmit}>
      <label className='form-label'>Nombre</label>
      <input type="text" className='form-control' name="nombre" value={form.nombre} onChange={handleChange}/>
      {errors.nombre && <div className="alert alert-danger p-1">{errors.nombre}</div>}

      <label className='form-label'>Correo electrónico</label>
      <input type="email" className='form-control' name="correo" value={form.correo} onChange={handleChange}/>
      {errors.correo && <div className="alert alert-danger p-1">{errors.correo}</div>}

      <label className='form-label'>Asunto</label>
      <input type="text" className='form-control'name="asunto" value={form.asunto} onChange={handleChange}/>
      {errors.asunto && <div className="alert alert-danger p-1">{errors.asunto}</div>}

      <label className='form-label'>Mensaje</label>
      <textarea className='form-control'name="mensaje" value={form.mensaje} onChange={handleChange}/>
      {errors.mensaje && <div className="alert alert-danger p-1">{errors.mensaje}</div>}

      <button className='btn btn-warning mt-1 w-100' disabled={loading}>{loading ? "Enviando..." : "Enviar"}</button>
    </form>
  )
}

export default ContactForm