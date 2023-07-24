import { mensajes } from "./mensaje.js";
    
    export async function medico(address){
        const tarjeta = parseFloat(document.getElementById('tarjetaprofesional').value);
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const consultorio = document.getElementById('consultorio').value;
        const correo = document.getElementById('correo').value;
        const especialidad = document.getElementById('especialidad').value;
        const respuesta = await fetch(address + formType, {
          "method": "POST",
          "headers": {
            "Content-Type": "application/json"
          },
          "body": JSON.stringify({ tarjetaProfesional: tarjeta, nombre:nombre, apellido:apellido, consultorio:consultorio, correo:correo, nombreEspecialidad:especialidad })
        }); 
        mensajes(respuesta.status)
        
      }
    
    
    
      export async function tablaMedicos(address){
        const data = await fetch(address + formType);
        const datos = await data.json();
        console.log(datos);
        const container = document.getElementById("container");
        const tabla = document.createElement('table');
        tabla.className = "table table-striped";
        
        // Crear la cabecera de la tabla
        const filaCabecera = tabla.insertRow();
        filaCabecera.className = "text-center";
        filaCabecera.insertCell().innerHTML = "Tarjeta Profesional";
        filaCabecera.insertCell().innerHTML = "Nombre";
        filaCabecera.insertCell().innerHTML = "Apellido";
        filaCabecera.insertCell().innerHTML = "Consultorio";
        filaCabecera.insertCell().innerHTML = "Correo";
        filaCabecera.insertCell().innerHTML = "Especialidad";
    
        // Agregar los médicos a la tabla
        for (const medico of datos){
            const filaMedico = tabla.insertRow();
            filaMedico.className = "text-center"; 
            filaMedico.insertCell().innerHTML = medico.tarjetaProfesional;
            filaMedico.insertCell().innerHTML = medico.nombre;
            filaMedico.insertCell().innerHTML = medico.apellido;
            filaMedico.insertCell().innerHTML = medico.consultorio;
            filaMedico.insertCell().innerHTML = medico.correo;
            filaMedico.insertCell().innerHTML = medico.especialidad?.nombre || '';
        }
    
        container.appendChild(tabla);
    }
    
  