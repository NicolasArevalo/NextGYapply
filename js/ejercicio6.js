const obj = [{
    "ciudad": "Barranquilla",
    "enero": 50800,
    "febrero": 80000,
    "marzo": 20000,
    "totalVentas": 150800
},{
    "ciudad": "Cartagena",
    "enero": 245,
    "febrero": 1000,
    "marzo": 100,
    "totalVentas": 1345
},{
    "ciudad": "Sincelejo",
    "enero": 5,
    "febrero": 90,
    "marzo": 45,
    "totalVentas": 140
},{
    "ciudad": "Bogota",
    "enero": 345000,
    "febrero": 0,
    "marzo": 20000,
    "totalVentas": 365000
},{
    "ciudad": "Tunja",
    "enero": 67000,
    "febrero": 90000,
    "marzo": 13000,
    "totalVentas": 170000
}]


function ejecutarSeis(){

    var mostrar = document.getElementById("mostrarSeis");
    var ciudadUsuario = document.getElementById("ciudad").value;
    /* console.log(ciudadUsuario); */

    for(var i=0; i<=obj.length-1; i++){
        /* console.log('entré al for'); */
        if(obj[i]['ciudad'] === ciudadUsuario){
            mostrar.innerHTML=('Enero: '+obj[i]['enero'] + " <br> Febrero: " + obj[i]['febrero']+" <br> Marzo: " + obj[i]['marzo']+" <br> Total de ventas: " + obj[i]['totalVentas']);
            break;
        }

    }
}