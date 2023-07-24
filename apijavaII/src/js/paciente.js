import { mensajes } from "./mensaje.js";
export async function paciente(address) {
    const cedula= parseFloat(document.getElementById('cedula').value);
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaInput = document.getElementById('fechadenacimiento').value;
    const fechaArray = fechaInput.split("-");
    const fecha = fechaArray[2] + "-" + fechaArray[1] + "-" + fechaArray[0];
    const telefono = parseInt(document.getElementById('telefono').value);
    console.log({ cedula:cedula, nombre:nombre, apellido:apellido, fechadenacimiento:fecha, telefono:telefono});
    const respuesta = await fetch(address + formType, {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json"
      },
      "body": JSON.stringify({ cedula:cedula, nombre:nombre, apellido:apellido, fechadenacimiento:fecha, telefono:telefono})
    }); 
    console.log(respuesta.status)
    mensajes(respuesta.status)
  }

  export async function tablaPacientes(address){
    const data = await fetch(address + formType)
    const datos = await data.json();
    console.log(datos)
    const container = document.getElementById("container")
    const tabla = document.createElement('table')
    tabla.className = "table table-striped"
    const fila = tabla.insertRow();
    fila.className = "text-center";
    fila.insertCell().innerHTML = "Cedula";
    fila.insertCell().innerHTML = "Nombre";
    fila.insertCell().innerHTML = "Apellido";
    fila.insertCell().innerHTML = "Fecha de nacimiento";
    fila.insertCell().innerHTML = "Telefono";

    for (const pacientes of datos){
        const fila = tabla.insertRow();
        fila.className = "text-center"; 
        fila.insertCell().innerHTML = pacientes.cedula;
        fila.insertCell().innerHTML = pacientes.nombre;
        fila.insertCell().innerHTML = pacientes.apellido
        fila.insertCell().innerHTML = pacientes.fechadenacimiento;
        fila.insertCell().innerHTML = pacientes.telefono;
    }

    container.appendChild(tabla);
}