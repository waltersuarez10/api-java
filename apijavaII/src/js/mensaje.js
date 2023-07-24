export function mensajes(respuesta){
  switch (respuesta) {
      case 201:
          Swal.fire({
              icon: 'success',
              title: 'Creado con éxito!',
            });
          break;
      case 400:
          Swal.fire({
              icon: 'error',
              title: 'Ha sucedido un error revise los datos',            
            });
          break;
      case 422:
          Swal.fire({
              icon: 'error',
              title: "Revise la información"          
            });
          break;
      case 409:
          Swal.fire({
              icon: 'error',
              title: 'Ya existe un registro con esta información'          
            });
          break;
      default:
          Swal.fire({
              icon: 'error',
              title: 'Error interno'
            });
          break;
  
    }
}