
var datos = new Array();
var txt = new XMLHttpRequest();
var ruta = 'numeros.txt';

txt.open("GET", ruta, false);
txt.send(null);

var datosCrudos = txt.responseText;
console.log(datosCrudos);
for (var i=0; i<datosCrudos.length; i++ ){
    datosCrudos
}

datos.forEach(function(data){
    console.log(data);

})


function cambiar(){
    console.log('cualquier cosa');
    var file = document.getElementById("file").value;
    console.log(file)
}