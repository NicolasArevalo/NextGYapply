// Teniendo una cadena con varias palabras claves entre corchetes {}, 
// encuentre dichas palabras y retorne un Array con las palabras, colocando su primera letra en mayúscula.

var palabras = ["juan", "{carlos}", "pedro", "camilo", "{pablo}"]
var mostrarObj = document.getElementById("mostrarPalabras");
var regExp = /\{({^\}}+)}/g;
var resultado = [];
var i = 0;

while (regExp.exec(palabras)) {
    resultado.push(match[i]);
    i += 1;
}

// console.log("Se encontró:", resultado);



//mostrarObj.innerHTML = palabras;

function hallarCorchetes(){

}