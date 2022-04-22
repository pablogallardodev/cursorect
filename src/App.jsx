import React from "react"
import Texto from "./components/Texto"
import Contador from "./components/Contador"
import ListaNombres from "./components/ListaNombres";

import "./App.css"

const App = () => {

    return <div className="container">
        {/* <Texto name="Pablo" apellido="Gallardo" edad={25} />
        <Texto name="Juan" apellido="Ochoa" edad={30}/>
        <Contador /> */}
        <ListaNombres />
    </div>
}

export default App;