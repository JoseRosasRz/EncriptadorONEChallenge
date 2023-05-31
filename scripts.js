//Funcion para encriptar un mensaje
function toCode(){
    let input = document.getElementById("tobecoded").value;

    //Verificacion de las restricciones dentro del mensaje
    if (input === ""){
        alert("Por favor, ingrese un mensaje.");
        return;
    }else if (/[A-Z!@#$%^&*().?":{}|<>áéíóúÁÉÍÓÚ]/.test(input)) {
        alert("El mensaje NO debe contener mayúsculas, tildes o caracteres especiales.");
        return;
    }


    //Realizar la encriptacion
    let coded = "";
    for (let i = 0; i < input.length; i++) {
        const LETTER = input[i];
        switch (LETTER) {
            case "a":
                coded += "ai";
                break;
            case "e":
                coded += "enter";
                break;
            case "i": 
                coded += "imes";
                break;
            case "o":
                coded += "ober";
                break;
            case "u":
                coded += "ufat";
                break;
            default:
                coded += LETTER;
                break;
        }
    }

    //Pasar el mensaje encriptado al segundo textarea
    document.getElementById("message-shown").value = coded;
    modifyProperties();
}


//Funcion para desencriptar un mensaje encriptado
function deCode(){
    let input = document.getElementById("tobecoded").value;

    //Verificacion de las restricciones dentro del mensaje, no debería de suceder, pero por si acaso
    if (input === ""){
        alert("Por favor, ingrese un mensaje.");
        return;
    } else if (/[A-Z!@#$%^&*().?":{}|<>áéíóúÁÉÍÓÚ]/.test(input)) {
        alert("El mensaje NO debe contener mayúsculas, tildes o caracteres especiales.");
        return;
    }

    //Realizar la desencriptacion
    let deCoded = input
    .replace(/ai/g, "a")
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");


    //Pasar el mensaje desencriptado al segundo textarea
    document.getElementById("message-shown").value = deCoded;
    modifyProperties();
}


//Funcion para copiar el contenido mostrado en el segundo textarea al portapales o clipboard
function copyMessage(){
    let messageCoded = document.getElementById("message-shown").value;

    //Crear un elemento de textarea auxiliar
    let auxiliar = document.createElement("textarea");
    auxiliar.value = messageCoded;

    //Agregar el elemento al DOM
    document.body.appendChild(auxiliar);

    //Seleccionar y copiar el contenido del textarea auxiliar
    auxiliar.select();
    document.execCommand("copy");

    //Remover elemento del DOM
    document.body.removeChild(auxiliar);

    //Notificar al usuario que se ha copiado el contenido
    alert("El mensaje ha sido copiado.");

    //Limpiar el contenido del primer textarea
    document.getElementById("tobecoded").value = "";
    
}


//Funcion para mostrar el textarea con el mensaje encriptado/desencriptado
function modifyProperties() {
    let elementImg = document.getElementById("icon");
    let messageProcessed = document.getElementById("message-processed");

    elementImg.style.display = "none";
    messageProcessed.style.display = "flex";
}

//Funcion para regresar la imagen de "Ningun mensaje fue encontrado" al momento de copiar el mensaje procesado
function returningOriginalProperties() {
    let elementImg = document.getElementById("icon");
    let messageProcessed = document.getElementById("message-processed");

    elementImg.style.removeProperty("display");
    messageProcessed.style.display = "none";
}


//Funcion para devolver al estado inicial la pagina 
function initialState(){
    let elementImg = document.getElementById("icon");
    let messageProcessed = document.getElementById("message-processed");
    
    elementImg.style.removeProperty("display");
    messageProcessed.style.display = "none";
    document.getElementById("tobecoded").value = "";
}

//Verificar si el navegador es safari
let textarea = document.getElementById("message-shown");

let isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

if (isSafari) {
    textarea.addEventListener("focus", function(){
        this.blur();
        this.style.backgroundColor = "#ffffff";
    });
}