import db from "../database/database.js";

class PacienteModel {

    collection = db.collection("citas");

    async getAll(){
        const pacientes = await this.collection.find({}).toArray();
        return pacientes;
    }

    async create(paciente){
        const insert = await this.collection.insertOne(paciente);

        if(insert.insertedId){
            return true;
        }
        return false;
    }
}

export default PacienteModel;


