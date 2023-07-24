export class Form{
    async fetchEspecialidades() {
        try {
            const response = await fetch("http://localhost:8080/Especialidad");
            const data = await response.json();
            
            const select = document.createElement("select");
            select.classList.add("form-control");
            
            const defaultOption = document.createElement("option");
            defaultOption.text = "-- Seleccione una especialidad --";
            defaultOption.value = "";
            defaultOption.disabled = true;
            defaultOption.selected = true;
            select.appendChild(defaultOption);
            
            for (const especialidad of especialidades) {
                const option = document.createElement("option");
                option.text = especialidad.nombre;
                option.value = especialidad.idEspecialidad;
                select.appendChild(option);
            }
            
            selectContainer.appendChild(select);            
      
          selectContainer.appendChild(select);
        } catch (error) {
          console.error(error);
        }
      }

    async render(){
        const formType = window.formType;
        const res = await fetch("http://localhost:8080/formulario/"+formType)
        const form = await res.json()
        console.log(form)
        const container = document.getElementById("container")
        const formHTML = document.createElement("form")
        formHTML.classList.add("container")
        const titulo = document.createElement("h1")
        titulo.className = "text-center mt-3 mb-3"
        titulo.innerHTML = "Formulario para "+formType
        for(const [key,values] of Object.entries(form.properties)){

            const label = document.createElement("label")
            label.innerHTML = key
            formHTML.appendChild(label)
            if(key.toString() == "Especialidad"){
                const response = await fetch("http://localhost:8080/especialidad");
                const data = await response.json();
                const select = document.createElement("select")
                select.name = key.toLowerCase()
                select.id = key.toLowerCase()
                select.classList.add("form-control")
                for (const especialidad of data) {
                    const option = document.createElement("option");
                    option.text = especialidad.nombre;
                    option.value = especialidad.nombre;
                    select.appendChild(option);
                  }
                  formHTML.appendChild(select)
            }else{
                const input = document.createElement("input")
                input.name = key.replace(/\s/g, "").toLowerCase()
                input.id = key.replace(/\s/g, "").toLowerCase()
                input.classList.add("form-control")
                if(values.type == "integer"){
                    input.type = "number"
                }else if(values.type == "date-time" || values.format == "date-time"){
                    input.type = "date"
                }else{
                    input.type = "string"
                    input.pattern = "[A-Za-z]";
                }         
                formHTML.appendChild(input)
            }

        }

        const boton = document.createElement("button")
        boton.setAttribute("type", "submit")
        boton.className ="btn btn-success mt-2 text-center"
        boton.innerHTML = "Enviar"
        boton.id = "enviar"
        formHTML.appendChild(boton)
        container.appendChild(titulo)
        container.appendChild(formHTML)
    }

    getBotonEnviar() {
        return document.getElementById("enviar");
    }
      
}
const form = new Form()

