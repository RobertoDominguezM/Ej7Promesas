window.addEventListener("load", manejarEventosSubmit, false);

function manejarEventosSubmit(event){
    event.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/users") //devuelve una promesa
        .then(response => {response.json(),
        console.log("hola")}
        ) //El método json() devuelve otra promesa
        .then(
            datosUsuario => crearNuevaTabla.log(datosUsuario)
            ) //then() de la segunda promesa
        .catch(error => console.error(error));
}

function crearNuevaTabla(datos){
    for(i=0; i < datos.length; i++){
        let tabla = document.getElementById("tabla");
        let td = document.createElement("td");
        let tr = 
        td.innerHTML = "tr" + datos[0].name + " " + datos[0].email;

        console.log(datos[i]);
    }
}