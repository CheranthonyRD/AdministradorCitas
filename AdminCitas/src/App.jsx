//hooks
import { useEffect, useState } from "react"

import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes";
import usePacientes from "./hooks/usePacientes.js";


function App() {
  const {pacientes, loadPacientes} = usePacientes();

  return (
    <div className="h-screen container mx-auto pt-10">
      <Header/>
      <div className="flex gap-5 lg:pl-4">
        <Formulario loadPacientes={loadPacientes} />
        <ListadoPacientes pacientes={pacientes} loadPacientes={loadPacientes} />
      </div>
    </div>
  )
}

export default App
