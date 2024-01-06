import {useState} from "react"
import {ToastContainer, toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


function Formulario({pacientes, setPacientes, paciente}){
    
    const [mascota, setMascota] = useState("");
    const [propietario, setPropietario] = useState("");
    const [email, setEmail] = useState("");
    const [alta, setAlta] = useState("");
    const [sintomas, setSintomas] = useState("");

    function handleForm(e){
        e.preventDefault();
        const id = "id"; 
        const info = {
            id: generateRandomId(),
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

        toast.success("Paciente Agregado Correctamente!", {toastId: id});
        const nuevosPacientes = [...pacientes, info];
        setPacientes(nuevosPacientes);
        resetStates({setMascota,setPropietario,setEmail,setAlta,setSintomas});
        e.target.reset();
        }


    
    return(
        <div className="w-1/3 mb-10">
            <h2 className="text-center text-4xl font-bold mb-5">Seguimiento de Pacientes</h2>
            <p className="text-center text-xl font-bold mb-10">Añade Pacientes y {" "} <span className="text-indigo-600">Administralos</span></p>

            <form onSubmit={handleForm} className="bg-white px-5 py-8 rounded-lg shadow-xl">
            
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
                    <input className="w-full border-2 border-gray-200 py-2 px-1 outline-none rounded-lg" type="text" placeholder="Nombre de la mascota" onChange={e => setMascota(e.target.value)} value={paciente.mascota} />
                </div>
                <div className="mb-2">
                    <label className="block mb-2 text-xl font-bold" htmlFor="">Nombre Propietario</label>
                    <input className="w-full border-2 border-gray-200 py-2 px-1 outline-none rounded-lg" type="text" placeholder="Nombre del propietario" onChange={e=>setPropietario(e.target.value)} value={paciente.propietario} />
                </div>
                <div className="mb-2">
                    <label className="block mb-2 text-xl font-bold" htmlFor="">Email</label>
                    <input className="w-full border-2 border-gray-200 py-2 px-1 outline-none rounded-lg" type="text" placeholder="Correo electronico" onChange={e => setEmail(e.target.value)} value={paciente.email}/>
                </div>
                <div className="mb-2">
                    <label className="block mb-2 text-xl font-bold" htmlFor="">Alta</label>
                    <input className="w-full border-2 border-gray-200 py-2 px-1 outline-none rounded-lg" type="date" onChange={e => setAlta(e.target.value)} value={paciente.alta} />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-xl font-bold" htmlFor="">Sintomas</label>
                    <textarea className="min-w-full min-h-40 max-h-40 border-2 border-gray-200 py-2 px-1 outline-none rounded-lg" name="" cols="30" rows="10" placeholder="Describe los sintomas" onChange={e => setSintomas(e.target.value)} value={paciente.sintomas}></textarea>
                </div>
                <div className="">
                    <button className="hover:bg-indigo-700 w-full block bg-indigo-600 py-3 text-white uppercase font-bold rounded-lg">Agregar Paciente</button>
                </div>
            </form>
        </div>
    );

}

function VerifyIfInfoIsEmpty(info){    
    return Object.values(info).some( i => i === "");
}



//function to generateRandomID

function generateRandomId(){
    return crypto.randomUUID() + Date.now();
}

//funtion to reset the states
function resetStates({setMascota, setPropietario, setEmail, setAlta, setSintomas}){
    setMascota("");
    setPropietario("");
    setEmail("");
    setAlta("");
    setSintomas("");
}

export default Formulario;