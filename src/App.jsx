import React from "react"
import Texto from "./components/Texto"
import Contador from "./components/Contador"
import ListaNombres from "./components/ListaNombres";
import Pokemones from "./components/Pokemones";
import Referencia from "./components/Referencia";
import Estilos from "./components/Estilos"

import "./App.css"

const App = () => {

  return <div className="container">
    {/* <Texto name="Pablo" apellido="Gallardo" edad={25} />
    <Texto name="Juan" apellido="Ochoa" edad={30}/> 
    <Contador />
    <ListaNombres />
    <Pokemones />
    <Referencia /> */}
    <Estilos />
  </div>
}

export default App;