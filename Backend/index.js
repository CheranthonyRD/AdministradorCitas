import express from "express";
import cors from "cors";
import "dotenv/config";
import routerPaciente from "./routes/Paciente.js";

const app = express();
const PORT = process.env.PORT ?? 0;
const HOST = process.env.HOST ?? 'http://localhost:';

app.use(express.json());
app.disable("x-powered-by");
app.use(cors());

app.use("/paciente", routerPaciente);

app.listen(PORT, ()=>{
    console.log(`Running in PORT ${HOST}${PORT}`);
});


