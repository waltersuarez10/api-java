import { mensajes } from "./mensaje.js";
export async function especialidad(address){
    const nombre = document.getElementById('nombre').value;
    const respuesta = await fetch(address + formType, {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json"
      },
      "body": JSON.stringify({nombre:nombre})
    }); 
    mensajes(respuesta.status)
  }

  export async function tablaEspecialidad(address){
    const data = await fetch(address + formType)
    const datos = await data.json();
    console.log(datos)
    const container = document.getElementById("container")
    const tabla = document.createElement('table')
    tabla.className = "table table-striped"
    const fila = tabla.insertRow();
    fila.className = "text-center";
    fila.insertCell().innerHTML = "IdEspecialidad";
    fila.insertCell().innerHTML = "Nombre";
    for (const especialidad of datos){
        const fila = tabla.insertRow();
        fila.className = "text-center";
        fila.insertCell().innerHTML = especialidad.idEspecialidad;
        fila.insertCell().innerHTML = especialidad.nombre;
    }

    container.appendChild(tabla);
}