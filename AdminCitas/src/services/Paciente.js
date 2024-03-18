import {HOST, PORT} from "../configs/configs.js";

const URL = `${HOST}${PORT}/paciente/`;


export async function getAllPacientes(){
    const response = await fetch(URL);
    
    if(response.status !== 200){
        return [];
    }
    const result = await response.json();
    return result;
}

export async function createNewPaciente({paciente}){
    const newPaciente = JSON.stringify(paciente);
    const headers = {'Content-Type': "application/json"}
    const method = 'POST';

    const options = {method, headers, body: newPaciente};
    const response = await fetch(URL, options);

    return (response.ok) ? true : false;
}

export async function updatePaciente({id, paciente}){
    const method = "PACTH";
    const updatePaciente = JSON.stringify(paciente);
    const headers = {'Content-Type': "application/json"};

    const options = {method, headers, body: updatePaciente};

    const url = `${URL}${id}`;

    const response = await fetch(url, options);

    return (response.ok) ? true : false;
}

export async function deletePaciente({id}){
    const method = "DELETE";  
    const options ={method};
    const url = `${URL}${id}`;

    const response = await fetch(url, options);

    return (response.ok) ? true : false;
}

export async function getOnePaciente({id}){
    const url = `${URL}${id}`;
    const response = await fetch(url);

    if(!response.ok){
        return {};
    }

    const paciente = await fetch(url);
    return paciente;
}