import { useState, useEffect } from "react";
import { getAllPacientes } from "../services/Paciente.js";

export function usePacientes(){
    const [pacientes, setPacientes] = useState([]);
    
    useEffect(()=>{
        loadPacientes();
    }, []);

    function loadPacientes(){
        getAllPacientes().then(pacientes =>{setPacientes(pacientes)});
    }


    return {pacientes, loadPacientes}
}

export default usePacientes
