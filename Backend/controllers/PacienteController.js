import PacienteModel from "../models/PacienteModel.js";

const pacienteModel = new PacienteModel();

const getAllPacientes = async (req, res)=>{
    const all = await pacienteModel.getAll();

    if(all.length){
        return res.status(200).json(all);
    }

    return res.status(400).json([]);
}

const deleteAllPacientes = async (req, res)=>{
    const deleteMany = await pacienteModel.deleteAll();

    if(deleteMany){
       return res.status(200).send("Se eliminaron todos los pacientes");
    }

    return res.status(400).send("no se puede eliminar");
}

const createNewPaciente = async (req, res) =>{
    const data = req.body;
    data._id = getRandomId();

    const create  = pacienteModel.create(data);

    if(create){
        return res.status(201).json({success: "Paciente creado"});
    }

    return res.status(400).json({error: "error al crear paciente"});
    
}

const deleteOneById = async (req, res)=>{
    const id = req.params.id;
    const paciente = await pacienteModel.deleteOneById(id);

    if(!paciente){
        return res.status(400).json({error: "No se pudo eliminar el paciente"});
    }
    return res.status(204).json({success: "Se elimino el paciente"});
}

const updateOneById = async (req, res)=>{
    const {id} = req.params;
    const update = await pacienteModel.updateOneById(id, req.body);
    
    if(update){
        return res.status(200).send({success: "Paciente actualizado correctamente"});
    }

    return res.status(400).json({error: "Paciente no fue actualizado"});

}


//funtions utils
const getRandomId = () =>{
    return crypto.randomUUID() + "-" + Date.now();
}


export {getAllPacientes, deleteAllPacientes, createNewPaciente, deleteOneById, updateOneById}