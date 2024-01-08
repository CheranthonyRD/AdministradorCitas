import { Router } from "express";
import { getAllPacientes, deleteAllPacientes, createNewPaciente, deleteOneById } from "../controllers/PacienteController.js";

const routerPaciente = Router();

//routes pacientes
routerPaciente.get("/", getAllPacientes);
routerPaciente.delete("/deleteAll", deleteAllPacientes);
routerPaciente.post("/create", createNewPaciente);
routerPaciente.delete("/delete/:id", deleteOneById);

export default routerPaciente;