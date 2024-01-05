//hooks
import { useState } from "react"

import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"


function App() { 
  const [pacientes, setPacientes] = useState([]);
  return (
    <div className="h-screen container mx-auto pt-10">
      <Header/>
      <div className="flex gap-5">
        <Formulario pacientes={pacientes} setPacientes={setPacientes}/>
        <ListadoPacientes pacientes={pacientes}/>
      </div>
    </div>
  )
}

export default App
