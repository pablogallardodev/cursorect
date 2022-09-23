import { useState } from 'react'

const useForm = (initialData) => {
  const [form, setForm] = useState(initialData);
  const [loading, setLoading] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = () => { }

  return { form, loading, handleChange, handleSubmit }
}

export default useForm;