const Nombres=[];
let sum=0;
function capturar(){
    let nomb=document.getElementById("nombre").value;
    let gast=document.getElementById("gasto").value;
    return{nombre:nomb, gasto:gast}    
    } function crearP(datos){
        let Elemento=document.getElementById("ListaDeDatos")
        let p = document.createElement("p");
        let pTexto = document.createTextNode(`${datos.nombre}` + " pagó $" + `${datos.gasto}`);
        p.appendChild(pTexto);
        Elemento.appendChild(p);    
    }
    document.getElementById("boton").onclick=function(){
        Nombres.push(capturar());
        crearP(capturar());
        sum= sum + parseInt(capturar().gasto);
        document.getElementById("resultado").innerHTML= " $" + sum;
        document.getElementById("contribucion").innerHTML= " $" + sum/Nombres.length;
    };
