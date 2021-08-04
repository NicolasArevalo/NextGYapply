
function ejecutar(){

    var exp = document.getElementById("exp").value;
    var mostrar = document.getElementById("mostrarCinco");
    var op = 0;

    var expNum = exp.split(/(?=[-+*/()])|(?<=[-+*/()])/);
    
    for (var i=0; i<=expNum.length; i++){
       console.log(expNum[i]);

      if(op!=0){
         if (expNum[i] === '+'){
            op = op + parseInt(expNum[i + 1])
            i = i+1;
            /* console.log('En el mas1: '+op); */
         }else if (expNum[i] === '-'){
            op = op - parseInt(expNum[i + 1]);
            i = i+1;
            /* console.log('En el meno1: '+op); */
         }else if (expNum[i] === '*'){
            op = op * parseInt(expNum[i + 1]);
            i = i+1;
            /* console.log('En el por1: '+op); */
         }else if (expNum[i] === '/'){
            op = op / parseInt(expNum[i + 1]);
            i = i+1;
            /* console.log('En el dividir1: '+op); */
         } 
      } else {
         op = parseInt(expNum[i])
         /* console.log('i fuera del if ' + i) */
         if (expNum[i + 1] === '+') {
            op = op + parseInt(expNum[i + 2])
            i = i + 2;
            /* console.log('En el mas: ' + op); */
         } else if (expNum[i + 1] === '-') {
            op = op - parseInt(expNum[i + 2]);
            i = i + 2;
            /* console.log('En el menos: ' + op); */
         } else if (expNum[i + 1] === '*') {
            op = op * parseInt(expNum[i + 2]);
            i = i + 2;
            /* console.log('En el por: ' + op); */
         } else if (expNum[i + 1] === '/') {
            op = op / parseInt(expNum[i + 2]);
            i = i + 2;
            /* console.log('En el dividir: ' + op); */
         }

      }

    }
    mostrar.innerHTML = op;
    /* console.log('final final: '+op) */

    /* 3+3*3-3/3 */


}