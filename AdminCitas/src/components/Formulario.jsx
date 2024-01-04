
function Formulario(){

    function handleForm(e){
        e.preventDefault();
        console.log(e.target)
    }
    return(
        <div className="w-1/2 mb-10">
            <h2 className="text-center text-4xl font-bold mb-5">Seguimiento de Pacientes</h2>
            <p className="text-center text-xl font-bold mb-10">Añade Pacientes y {" "} <span className="text-indigo-600">Administralos</span></p>

            <form onSubmit={handleForm} className="bg-white px-5 py-8 rounded-lg shadow-xl">
                <div className="mb-2">
                    <label className="block mb-2 text-xl font-bold" htmlFor="">Nombre Mascota</label>
                    <input className="w-full border-2 border-gray-200 py-2 px-1 outline-none rounded-lg" type="text" placeholder="Nombre de la mascota" />
                </div>
                <div className="mb-2">
                    <label className="block mb-2 text-xl font-bold" htmlFor="">Nombre Propietario</label>
                    <input className="w-full border-2 border-gray-200 py-2 px-1 outline-none rounded-lg" type="text" placeholder="Nombre del propietario" />
                </div>
                <div className="mb-2">
                    <label className="block mb-2 text-xl font-bold" htmlFor="">Email</label>
                    <input className="w-full border-2 border-gray-200 py-2 px-1 outline-none rounded-lg" type="text" placeholder="Correo electronico" />
                </div>
                <div className="mb-2">
                    <label className="block mb-2 text-xl font-bold" htmlFor="">Alta</label>
                    <input className="w-full border-2 border-gray-200 py-2 px-1 outline-none rounded-lg" type="date" />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 text-xl font-bold" htmlFor="">Sintomas</label>
                    <textarea className="min-w-full min-h-40 max-h-40 border-2 border-gray-200 py-2 px-1 outline-none rounded-lg" name="" id="" cols="30" rows="10" placeholder="Describe los sintomas"></textarea>
                </div>
                <div className="">
                    <button className="hover:bg-indigo-700 w-full block bg-indigo-600 py-3 text-white uppercase font-bold rounded-lg">Agregar Paciente</button>
                </div>
            </form>
        </div>
    );

}

export default Formulario;