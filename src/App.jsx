import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Texto from "./components/Texto"
import Contador from "./components/Contador"
import ListaNombres from "./components/ListaNombres";
import Pokemones from "./components/Pokemones";
import Referencia from "./components/Referencia";
import Estilos from "./components/Estilos"
import Navbar from "./components/Navbar";
import CrudApp from "./components/crud/CrudApp";
import CrudAPI from "./components/crud/CrudAPI";

import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return ( 
  <div className="container">
    <BrowserRouter>
      <Routes>
        <Route path='/contador' element={<Contador />}/>
        <Route path='/crudAPI' element={<CrudAPI />}/>
        <Route path='/crudApp' element={<CrudApp />}/>
        <Route path='/navbar' element={<Navbar />}/>
        <Route path='/estilos' element={<Estilos />}/>
        <Route path='/referencia' element={<Referencia />}/>
        <Route path='/pokemones' element={<Pokemones />}/>
        <Route path='/listaNombres' element={<ListaNombres />}/>
        <Route path='*' element={<h2>Curso React by Pablo Gallardo</h2>}/>
      </Routes>
    </BrowserRouter> 
  </div>)
}

export default App;