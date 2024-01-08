//hooks
import { useEffect, useState } from "react"

import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes";
import { Storage } from "./classes/Storage";


function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});


  useEffect(()=>{
    const URL = "http://localhost:1234/paciente/";
    fetchData(URL)
    .then(data=>{
      setPacientes(data);
    });
  }, [])

  return (
    <div className="h-screen container mx-auto pt-10">
      <Header/>
      <div className="flex gap-5 lg:pl-4">
        <Formulario paciente={paciente} pacientes={pacientes} setPacientes={setPacientes}/>
        <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente}/>
      </div>
    </div>
  )
}

async function fetchData(URL){
  const response = await fetch(URL);
  const pacientes = (response.status === 200) ? await response.json() : await response.json();

  return pacientes;
}

export default App
