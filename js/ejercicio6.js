const obj = [{
    "ciudad": "Barranquilla",
    "mes": "marzo",
    "totalVentas": 9087000
},{
    "ciudad": "Cartagena",
    "mes": "enero",
    "totalVentas": 298765
},{
    "ciudad": "Sincelejo",
    "mes": "enero",
    "totalVentas": 345678
},{
    "ciudad": "Bogota",
    "mes": "enero",
    "totalVentas": 44556677
},{
    "ciudad": "Tunja",
    "mes": "enero",
    "totalVentas": 1588888
}]

const objJsonExterno = JSON.parse(ciudades.json);
console.log(objJsonExterno);


function ejecutarSeis(){

    var mostrar = document.getElementById("mostrarSeis");
    var ciudadUsuario = document.getElementById("ciudad").value;
    console.log(ciudadUsuario);

    for(var i=0; i<=obj.length-1; i++){
        console.log('entré al for');
        if(obj[i]['ciudad'] === ciudadUsuario){
            mostrar.innerHTML=('Mes: '+obj[i]['mes'] + " <br> Total de ventas: " + obj[i]['totalVentas']);
            break;
        }

    }
}