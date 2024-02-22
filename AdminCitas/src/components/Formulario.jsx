import {useEffect, useState} from "react"
import {ToastContainer, toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { Storage } from "../classes/Storage";

function Formulario({pacientes, paciente, setPaciente, setPacientes, setRender, render}){
    
    const [mascota, setMascota] = useState("");
    const [propietario, setPropietario] = useState("");
    const [email, setEmail] = useState("");
    const [alta, setAlta] = useState("");
    const [sintomas, setSintomas] = useState("");

    useEffect(()=>{
       if(Object.keys(pacientes).length > 1){
        setMascota(paciente.mascota);
        setPropietario(paciente.propietario);
        setEmail(paciente.email);
        setAlta(paciente.alta);
        setSintomas(paciente.sintomas);
       }
    }, [paciente]);

    async function handleForm(e){
        e.preventDefault();
        
        const id = "id"; 
        const info = {
            mascota,
            propietario,
            email,
            alta,
            sintomas
        }

        if(VerifyIfInfoIsEmpty(info)){
            if(!toast.isActive(id)){
                toast.error("Los campos no pueden estar vacios", {toastId: id});
            }
            return;
        }

        if(paciente._id){
            const URL = `http://localhost:1234/paciente/update/${paciente._id}`;
            const request = {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "PATCH",
                body: JSON.stringify(info)
            }
            const update = await fetch(URL, request);

            if(update.status === 200){
                toast.success("Paciente Actualizado correctamente!", {toastId: id});
                resetStates({setMascota,setPropietario,setEmail,setAlta,setSintomas});
                setPaciente({});
                setRender(!render);
            }
            return;
        }

        const insert = await insertOne(info);
        
        if(Object.getOwnPropertyNames(insert).includes("success")){
            toast.success(insert.success, {toastId: id});
            resetStates({setMascota,setPropietario,setEmail,setAlta,setSintomas});
            setRender(!render);
            return;
        }

      

        return toast.error(insert.error, {toastId: id});
        
    }


    
    return(
        <div className="w-1/3 mb-10">
            <h2 className="text-center text-4xl font-bold mb-5">Seguimiento de Pacientes</h2>
            <p className="text-center text-xl font-bold mb-10">Añade Pacientes y {" "} <span className="text-indigo-600">Administralos</span></p>

            <form  className="bg-white px-5 py-8 rounded-lg shadow-xl">
            
                <ToastContainer 
                    position="top-left"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
                <div className="mb-2">
                    <label className="block mb-2 text-xl font-bold" htmlFor="">Nombre Mascota</label>
                    <input className="w-full border-2 border-gray-200 py-2 px-1 outline-none rounded-lg" 
                    type="text" 
                    placeholder="Nombre de la mascota" 
                    onChange={e => setMascota(e.target.value)} 
                    value={mascota} />
                </div>
                <div className="mb-2">
                    <label className="block mb-2 text-xl font-bold" htmlFor="">Nombre Propietario</label>
                    <input className="w-full border-2 border-gray-200 py-2 px-1 outline-none rounded-lg" 
                    type="text" 
                    placeholder="Nombre del propietario" 
                    onChange={e=>setPropietario(e.target.value)} 
                    value={propietario} />
                </div>
                <div className="mb-2">
                    <label className="block mb-2 text-xl font-bold" htmlFor="">Email</label>
                    <input className="w-full border-2 border-gray-200 py-2 px-1 outline-none rounded-lg" 
                    type="text" 
                    placeholder="Correo electronico" 
                    onChange={e => setEmail(e.target.value)} 
                    value={email}/>
                </div>
                <div className="mb-2">
                    <label className="block mb-2 text-xl font-bold" htmlFor="">Alta</label>
                    <input className="w-full border-2 border-gray-200 py-2 px-1 outline-none rounded-lg" 
                    type="date" 
                    onChange={e => setAlta(e.target.value)} 
                    value={alta} />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-xl font-bold" htmlFor="">Sintomas</label>
                    <textarea className="min-w-full min-h-40 max-h-40 border-2 border-gray-200 py-2 px-1 outline-none rounded-lg" 
                    name="" cols="30" rows="10" 
                    placeholder="Describe los sintomas" 
                    onChange={e => setSintomas(e.target.value)} 
                    value={sintomas}></textarea>
                </div>
                <div className="">
                    <button onClick={handleForm} className="hover:bg-indigo-700 w-full block bg-indigo-600 py-3 text-white uppercase font-bold rounded-lg">{paciente._id ? "Actualizar Paciente" : "Agregar Paciente"}</button>
                </div>
            </form>
        </div>
    );

}

function VerifyIfInfoIsEmpty(info){    
    return Object.values(info).some( i => i === "");
}

//funtion to reset the states
function resetStates({setMascota, setPropietario, setEmail, setAlta, setSintomas}){
    setMascota("");
    setPropietario("");
    setEmail("");
    setAlta("");
    setSintomas("");
}

//function to insert Paciente with API

async function insertOne(paciente){
    const URL = "http://localhost:1234/paciente/create";

    const request = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(paciente)
    }

    const response = await fetch(URL, request);

    return response.json();
}

export default Formulario;