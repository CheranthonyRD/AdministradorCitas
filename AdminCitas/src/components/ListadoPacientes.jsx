import Paciente from "./Paciente";
import {usePacientes} from "../hooks/usePacientes.js";
import { useState } from "react";

function ListadoPacientes({setPaciente, setPacientes, render, setRender}){
    const {pacientes, loadPacientes} = usePacientes({render});
    
    return(
        <div className=" w-3/4 px-4 mb-5">
            <h2 className="text-4xl font-bold text-center mb-20">Listado Pacientes</h2>

            {/* conditional rendering */}

            {pacientes && pacientes.length ? (
                <>
                    <div className="flex flex-wrap gap-3 justify-center">
                        {pacientes.length >= 1 && pacientes.map((p)=>
                            <Paciente setPacientes={loadPacientes} setPaciente={setPaciente} key={p._id} paciente={p} setRender={setRender}/>
                        )}
                    </div> 
                </>
            ) : (
                <>
                 <div className="mt-[-60px]">
                    <p className="text-center text-2xl font-bold">Aun no hay pacientes, comienza a agregarlos {" "} 
                    <span className="text-indigo-600">y administralos</span></p>
                 </div>   
                </>
            )}                     
        </div>
    );
}


export default ListadoPacientes;