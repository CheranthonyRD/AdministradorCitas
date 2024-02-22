//hooks
import { useEffect, useState } from "react"

import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes";

import usePacientes from "./hooks/usePacientes.js";


function App() {
  
  const [paciente, setPaciente] = useState({});
  const [render, setRender] = useState(false);
  const {pacientes, loadPacientes} = usePacientes({render});

  return (
    <div className="h-screen container mx-auto pt-10">
      <Header/>
      <div className="flex gap-5 lg:pl-4">
        <Formulario pacientes={pacientes} paciente={paciente} setPacientes={loadPacientes} setPaciente={setPaciente} render={render} setRender={setRender}/>
        <ListadoPacientes setPaciente={setPaciente} render={render} setRender={setRender}/>
      </div>
    </div>
  )
}

export default App
