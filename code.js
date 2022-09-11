const inputMensaje = document.querySelector(".mensaje");

const inputResultado= document.querySelector(".resultado");

const textoAdvertencia=document.querySelector(".cuadro-texto");

const btnEncriptar= document.querySelector(".encriptar");

const btnDesencriptar= document.querySelector(".desencriptar");

const btnCopiar=document.querySelector(".copiar");

function vaciar(elemento) {
    elemento.value="";
}

function comprobarContenidoVacio(string){
    if ( (string.trim()).length == 0) {
        return false;
    }else{
        return true;
    }
}

function cambioPantalla(){

    if (comprobarContenidoVacio(inputResultado.value)) {

        inputResultado.style.backgroundImage="none";
        textoAdvertencia.style.display ="none";

    }else{

        textoAdvertencia.style.display ="block";

        if(screen.width<=768){
            inputResultado.style.backgroundImage="none";
        }else{
            inputResultado.style.backgroundImage="url(imagenes/Muñeco.png)";
        }
        
    }

}

function encriptar(){
    var mensaje = inputMensaje.value;
    mensaje= mensaje.toLowerCase();
    var mensajeEncriptado=mensaje.replaceAll("e","enter")
                                    .replaceAll("i","imes")
                                    .replaceAll("o","ober")
                                    .replaceAll("a","ai")
                                    .replaceAll("u","ufat");

    inputResultado.value = mensajeEncriptado;
    vaciar(inputMensaje);
    cambioPantalla();
}

function desencriptar(){
    var mensaje = inputMensaje.value;
    
    var mensajeDesencriptado = mensaje.replaceAll("enter","e")
                                    .replaceAll("imes","i")
                                    .replaceAll("ober","o")
                                    .replaceAll("ai","a")
                                    .replaceAll("ufat","u");

   
    inputResultado.value = mensajeDesencriptado;
    vaciar(inputMensaje);
    cambioPantalla();
}

function copiar(){

    var mensajeEncriptado =inputResultado.value;

    if (comprobarContenidoVacio(mensajeEncriptado)) {

        navigator.clipboard.writeText(mensajeEncriptado);

        alert('Mensaje copiado!');
        
        vaciar(inputResultado);

        cambioPantalla();

    }else{
        cambioPantalla();
    }
    
}

btnEncriptar.onclick= encriptar;

btnDesencriptar.onclick= desencriptar;

btnCopiar.onclick=copiar;
