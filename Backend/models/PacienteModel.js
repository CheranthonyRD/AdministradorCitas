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

    async deleteOneById(id){
        const paciente = await this.collection.findOneAndDelete({_id: id});
        
        if(paciente._id){
            return true;
        }

        return false;
    }

    async deleteAll(){
        const deleteMany = await this.collection.deleteMany();

        if(deleteMany.deletedCount){
            return true;
        }
        return false;
    }
}

export default PacienteModel;


