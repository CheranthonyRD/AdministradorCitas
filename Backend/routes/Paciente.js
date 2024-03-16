import { Router } from "express";
import { getAllPacientes, deleteAllPacientes, createNewPaciente, deleteOneById, updateOneById } from "../controllers/PacienteController.js";

const routerPaciente = Router();

//routes pacientes
routerPaciente.get("/", getAllPacientes);
routerPaciente.post("/", createNewPaciente);
routerPaciente.delete("/:id", deleteOneById);
routerPaciente.patch("/:id",updateOneById);

export default routerPaciente;