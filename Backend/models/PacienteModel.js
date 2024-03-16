import db from "../database/database.js";

class PacienteModel {

    collection = db.collection("citas");

    async getAll(){
        const pacientes = await this.collection.find({}).toArray();
        return pacientes;
    }

    async getOneById({id}){
        const paciente = await this.collection.findOne({_id:id});
        return paciente;
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
        return paciente;
    }

    async deleteAll(){
        const deleteMany = await this.collection.deleteMany();

        if(deleteMany.deletedCount){
            return true;
        }
        return false;
    }

    async updateOneById(id, body){

        const update = await this.collection.updateOne({_id: id}, {$set: body});        
        return update.modifiedCount;
    }
}

export default PacienteModel;


