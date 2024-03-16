import {HOST, PORT} from "../configs/configs.js";

const URL = `${HOST}${PORT}/paciente/`;


export async function getAllPacientes(){
    const response = await fetch(URL);
    
    if(response.status !== 200){
        return false;
    }
    const result = await response.json();
    return result;
}