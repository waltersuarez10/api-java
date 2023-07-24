
import { mensajes } from "./mensaje.js";
export async function cita(address){
    const fechaC = document.getElementById("fecha").value;
    const fechaArray = fechaC.split("-")
    const fecha = fechaArray[2] + "-" + fechaArray[1] + "-" + fechaArray[0];
    const cedula = parseFloat(document.getElementById("cedulapaciente").value);
    const tarjeta =parseFloat(document.getElementById("tarjetaprofesional").value);
    const respuesta = await fetch(address + formType, {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json"
      },
      "body": JSON.stringify({ fecha:fecha, cedula_paciente:cedula, tarjeta_profesional:tarjeta})
    }); 
    mensajes(respuesta.status)
  }

  export async function tablaCitas(address){
    const data = await fetch(address + formType)
    const datos = await data.json();
    console.log(datos)
    const container = document.getElementById("container")
    const tabla = document.createElement('table')
    tabla.className = "table table-striped"
    const fila = tabla.insertRow();
    fila.className = "text-center";
    fila.insertCell().innerHTML = "Id Cita";
    fila.insertCell().innerHTML = "Fecha de la cita";
    fila.insertCell().innerHTML = "Nombre Medico";
    fila.insertCell().innerHTML = "Apellido Medico";
    fila.insertCell().innerHTML = "Cedula Paciente";
    fila.insertCell().innerHTML = "Nombre Paciente";
    fila.insertCell().innerHTML = "Apellido Paciente";
    
    console.log(datos)
    for (const citas of datos){
        const fila = tabla.insertRow();
        fila.className = "text-center"; 
        fila.insertCell().innerHTML = citas.id_Cita;
        fila.insertCell().innerHTML = citas.dia_Cita;
        fila.insertCell().innerHTML = citas.nombre_medico;
        fila.insertCell().innerHTML = citas.apellido_medico;
        fila.insertCell().innerHTML = citas.cedula_paciente;
        fila.insertCell().innerHTML = citas.nombre_paciente;
        fila.insertCell().innerHTML = citas.apellido_paciente;
    }

    container.appendChild(tabla);
}