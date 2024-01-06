import Paciente from "./Paciente";


function ListadoPacientes({pacientes}){
    const key = crypto.randomUUID() + Date.now();
    return(
        <div className=" w-3/4 px-4 mb-5">
            <h2 className="text-4xl font-bold text-center mb-20">Listado Pacientes</h2>

            <div className="flex flex-wrap gap-3 justify-center">
               {pacientes.length >= 1 && pacientes.map((p)=>
                <Paciente key={p.id} paciente={p}/>
               )}
            </div>           
        </div>
    );
}


export default ListadoPacientes;