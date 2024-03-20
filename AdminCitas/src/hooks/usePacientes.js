import { useState, useEffect } from "react";
import { getAllPacientes } from "../services/Paciente.js";

function usePacientes(){
    const [pacientes, setPacientes] = useState([]);    

    function loadPacientes(){
        getAllPacientes().then( pacientes => {
            setPacientes(pacientes);
        });
    }

    useEffect(loadPacientes, []);

    return {pacientes, loadPacientes}
}

export default usePacientes
