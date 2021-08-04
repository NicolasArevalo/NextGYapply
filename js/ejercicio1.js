
function calc() {

    var numero = Number(document.getElementById("number").value);
    var mostrar = document.getElementById("resultado");

    let i = 0;
    let result;
    for(i; i<=numero; ++i){
        result = 4 * i;
        mostrar.innerHTML += result + " - ";
    }
}

