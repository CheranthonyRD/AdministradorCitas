import { Storage } from "../classes/Storage.js";
import {ToastContainer, toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function Paciente({paciente, setPaciente, setPacientes}){
    const color = getRandomColor();

    function editPaciente(){
        setPaciente(paciente);
    }

    async function deletePaciente(){
        const URL = `http://localhost:1234/paciente/delete/${paciente._id}`;
        const deleteOne = await fetch(URL, {method: "DELETE"});

        if(deleteOne.status !== 204){
           if(!toast.isActive()){
            toast.error("El paciente no pudo ser borrado", {toastId: "1"});
            return;
           }
        }

        const pacientes = await getAllPacientes();
        setPacientes(pacientes);
        toast.success("El paciente fue borrado con exito", {toastId: "1"});
        return;
    }

    
    
    return(
        <div className="h-72 w-1/4 bg-white shadow-lg rounded-xl flex flex-col justify-start">
            
            {/*Mascota nombre*/}
            <h3 className={"text-center py-3 h-1/6 text-white rounded-t-xl uppercase " + color}>{paciente.mascota}</h3>

            {/*info*/}
            <div className="w-full h-5/6 flex flex-col bg-gray-100 px-2">
                
                <div id="" className="flex flex-col border-b-2 border-b-gray-200">
                    <p className="font-bold">Propietario: {" "} </p>
                    <span className="text-lg">{paciente.propietario}</span>
                </div>

                <div id="" className="flex flex-col border-b-2 border-b-gray-200">
                    <p className="font-bold">Email: {" "}</p>
                    <span>{paciente.email}</span>
                </div>

                <div id="" className="flex flex-col border-b-2 border-b-gray-200">
                    <p className="font-bold">Alta:</p>
                    <span>{paciente.alta}</span>
                </div>

                <div id="" className="flex flex-col border-b-2 border-b-gray-200">
                    <p className="font-bold">Sintomas: {" "}</p>
                    <span>{paciente.sintomas}</span>
                </div>
            </div>

            {/* actions */}
            <div className="w-full h-1/6 rounded-b-xl flex">

                <div className="w-1/2 flex justify-center items-center">
                    <i onClick={editPaciente} className="fa-solid fa-file-pen text-2xl text-blue-600 hover:text-blue-700 hover:cursor-pointer"></i>
                </div>

                <div className="w-1/2 flex justify-center items-center border-l-2 border-l-gray-200">
                    <i onClick={deletePaciente} className="fa-solid fa-trash text-2xl text-red-600 hover:text-red-700 hover:cursor-pointer"></i>
                </div>
            </div>
        </div>
    );
}


function getRandomColor(){
    const colors = ["bg-emerald-700", "bg-cyan-700", "bg-sky-700", "bg-indigo-700", 
                    "bg-fuchsia-700", "bg-rose-700" , "bg-red-700"]
    const length = colors.length;

    const random = Math.floor(Math.random() * length);

   return colors[random];
}

async function getAllPacientes(){
    const URL = "http://localhost:1234/paciente/";
    const response = await fetch(URL);

    if(response.status === 200){
        const data = await response.json();
        return data;
    }

    return response.json();
}


export default Paciente;