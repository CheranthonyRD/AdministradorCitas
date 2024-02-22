import { useState, useEffect } from "react";
import { getAllPacientes } from "../services/Paciente.js";

export function usePacientes({render}){
    const [pacientes, setPacientes] = useState([]);

    useEffect(()=>{
        loadPacientes();
    }, [render]);

    function loadPacientes(){
        getAllPacientes().then(data =>{
            if (data !== false) {
                setPacientes(data);
            }
        });        
    }

    return {pacientes, loadPacientes}
}



export default usePacientes
