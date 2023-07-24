import { tablaCitas } from "./cita.js";
import { tablaEspecialidad } from "./especialidad.js";
import { tablaMedicos } from "./medico.js";
import { tablaPacientes } from "./paciente.js";

const address = "http://localhost:8080/"
export async function renderT(){
    const formType = window.formType;
    const container = document.getElementById("container");
    const titulo = document.createElement("h1");
    titulo.className = "text-center mt-2 mb-4";
    titulo.innerHTML = " Tabla de "+formType
    container.appendChild(titulo);
    switch(formType) {
        case "medico":
            await tablaMedicos(address)
            break
        case "especialidad":
            await tablaEspecialidad(address)
            break
        case "paciente":
            await tablaPacientes(address)
            break
        case "cita":
            await tablaCitas(address)
            break
    }
}

renderT()