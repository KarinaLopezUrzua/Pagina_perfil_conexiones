/*Dar click y remover la solicitud de amistad */
/*Dar click y el boton de solicitudes disminuya*/
/*Dar click en aceptar tus conexiones aumente el numero*/

var usuarioUno = document.querySelector(".contenido .solicitud_uno" );
var usuarioDos = document.querySelector(".contenido .solicitud_dos" );

var botonSolicitudes = document.querySelector(".boton2");
var botonAmistades = document.querySelector(".boton3");

function solicitudAmistad (element) {
    if(element == 11){
        usuarioUno.remove();
        botonSolicitudes.innerHTML--;
        botonAmistades.innerHTML++;
    }
    else if(element ==12){
        usuarioUno.remove();
        botonSolicitudes.innerHTML--;
    }
    else if(element ==21){
        usuarioDos.remove();
        botonSolicitudes.innerHTML--;
        botonAmistades.innerHTML++;
    }
    else {
        usuarioDos.remove();
        botonSolicitudes.innerHTML--;
    }
}

/*Al dar click en editar el perfil, se cambie el nombre */
    var nombreDePerfil = document.querySelector(".bloque2 h1");

function editarPerfil(){
    console.log(nombreDePerfil);
    nombreDePerfil.innerHTML = "Karina López Urzúa";
}