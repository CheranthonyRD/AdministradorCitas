import z from "zod";


const onlyLetters = new RegExp('^[a-zA-Z]+$');
const pacienteSchema = z.object({
    mascota: z.string
        ({
         required_error: "El nombre de la mascota es requerido",
        })
        .regex(onlyLetters, "El nombre debe incluir solo letras")
        .min(2, {message: "El nombre debe contener minimo 2 letras"})
        .trim(),
    propietario: z.string
    ({
     required_error: "El nombre del propietario es requerido",
    })
    .regex(onlyLetters, "El nombre debe incluir solo letras")
    .min(2, {message: "El nombre debe contener minimo 2 letras"})
    .trim(),

})

export function schemaPaciente ({paciente}) {
    return pacienteSchema.safeParse(paciente);
}

