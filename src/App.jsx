import {React, useState} from "react"
import { Routes, Route } from "react-router-dom"
// import Texto from "./components/Texto"
import Contador from "./components/Contador"
import ListaNombres from "./components/ListaNombres";
import Pokemones from "./components/Pokemones";
import Referencia from "./components/Referencia";
import Estilos from "./components/Estilos"
import Navbar from "./components/Navbar";
import CrudApp from "./components/crud/CrudApp";
import CrudAPI from "./components/crud/CrudAPI";
import Menu from "./components/Menu";
import ContactForm from "./components/ContactForm"
import Modales from "./components/Modales"
import TodoList from "./components/TodoList";
import Memorizacion from "./components/Memorizacion";
import ThemeContext from "./components/ThemeContext";

import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  const [theme, setTheme] = useState('light')

  const handleTheme = (e) => { setTheme(e.target.value) }

  return ( 
    <>
      <div className={`text-center py-1 my-1 ${theme}`}>
        <input type="radio" name="theme" id="light" value="light" onClick={handleTheme}/>
        <label htmlFor="light" className="mx-1">Claro</label>
        <input type="radio" name="theme" id="dark" value="dark" onClick={handleTheme}/>
        <label htmlFor="dark" className="mx-1">Oscuro</label>
      </div>
      <div className={`container-fluid p-3 d-flex flex-row`}>
        <Menu theme={theme}/>
        <div className="container">
          <Routes>
            <Route path='/theme' element={<ThemeContext theme={theme}/>}/>
            <Route path='/memorizacion' element={<Memorizacion />}/>
            <Route path='/todolist' element={<TodoList />}/>
            <Route path='/modales' element={<Modales />}/>
            <Route path='/contador' element={<Contador />}/>
            <Route path='/crudAPI' element={<CrudAPI />}/>
            <Route path='/crudApp' element={<CrudApp />}/>
            <Route path='/navbar' element={<Navbar />}/>
            <Route path='/estilos' element={<Estilos />}/>
            <Route path='/referencia' element={<Referencia />}/>
            <Route path='/pokemones' element={<Pokemones />}/>
            <Route path='/listaNombres' element={<ListaNombres />}/>
            <Route path='/contactForm' element={<ContactForm />}/>
            <Route path='*' element={<h2>Curso React by Pablo Gallardo</h2>}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App;