//hooks
import { useEffect, useState } from "react"

import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes";
import { Storage } from "./classes/Storage";


function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});


  return (
    <div className="h-screen container mx-auto pt-10">
      <Header/>
      <div className="flex gap-5">
        <Formulario paciente={paciente} pacientes={pacientes} setPacientes={setPacientes}/>
        <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente}/>
      </div>
    </div>
  )
}

export default App
