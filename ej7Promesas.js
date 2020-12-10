window.addEventListener("load", manejarEventosSubmit, false);

function manejarEventosSubmit(event){
    event.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/users") //devuelve una promesa
        .then(response => {
            console.log("hola");
            return response.json();
        }) //El método json() devuelve otra promesa
        .then(
            datosUsuario => crearNuevaTabla(datosUsuario)
            ) //then() de la segunda promesa
        .catch(error => console.error(error));
}

function crearNuevaTabla(datosUsuario){
    console.log(datosUsuario);
    let tabla = document.getElementById("tabla");
    for(i=0; i < datosUsuario.length; i++){
        console.log(datosUsuario[i]);
        let tr = document.createElement("tr");
        tr.innerHTML = "<td>" + datosUsuario[i].name + "</td>" + "<td>" + datosUsuario[i].email + "</td>";
        tabla.appendChild(tr);
        
    }
}