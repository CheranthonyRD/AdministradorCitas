import { Router } from "express";
import { getAllPacientes, deleteAllPacientes, createNewPaciente, deleteOneById, updateOneById } from "../controllers/PacienteController.js";

const routerPaciente = Router();

//routes pacientes
routerPaciente.get("/", getAllPacientes);
routerPaciente.delete("/deleteAll", deleteAllPacientes);
routerPaciente.post("/create", createNewPaciente);
routerPaciente.delete("/delete/:id", deleteOneById);
routerPaciente.patch("/update/:id",updateOneById);

export default routerPaciente;