const numeros=[1,2,4,5,6,7,8,5,5234,234,23,423,4,23,5,3,645,6]
var primos = [];
var pares = [];



function ejecutarDos() {
    var resultadoEj2 = document.getElementById("resultadoEj2");
    var numerosShow = document.getElementById("numerosEj2");

    numerosShow.innerHTML = numeros;
    
    console.log('cualquier cosa');
    numeros.forEach(element => {

        if (element % 2 == 0) { // Para los pares

            pares.push(element);
        }

        if(primo(element)) primos.push(element);

        console.log('primos: '+primos);
        console.log('pares: '+pares);

        function primo(numero) {

            for (var i = 2; i < numero; i++) {

                if (numero % i === 0) {
                    return false;
                }

            }

            return numero !== 1;
        }

    });

    resultadoEj2.innerHTML = ('primos: '+primos+'<br> pares: '+pares);

}