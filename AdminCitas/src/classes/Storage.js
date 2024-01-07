
class Storage {

    static setPaciente(paciente){
        const getPacientes = this.getPacientes();

        if(getPacientes !== null){
            const pacientes = JSON.parse(getPacientes);
            const newPaciente = [...pacientes, paciente];
            localStorage.setItem("pacientes", JSON.stringify(newPaciente));
        }else{
            localStorage.setItem("pacientes", JSON.stringify([paciente]));
        }
    }

    //get all pacientes from localStorage
    static getPacientes(){
        return localStorage.getItem("pacientes");
    }

}



export {Storage};