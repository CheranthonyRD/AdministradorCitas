
const URL = "http://localhost:1234/";

export async function getAllPacientes(){
    const FULL_PATH = URL.concat("paciente");
    const response = await fetch(FULL_PATH);
    
    if(response.status !== 200){
        return false;
    }
    const result = await response.json();
    return result;
}