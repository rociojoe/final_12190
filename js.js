
let precio = document.getElementById("precio").value;
let cantidad = document.getElementById("cantidad").value;

addEventListener('submit'){
    if(precio === ''){
        alert ("agrega un precio");
    }
    if(cantidad === ''){
        alert("agrega una cantidad");
    }
}
function calcular_regular(){

    let precio = Number(document.getElementById("precio").value);

    let cantidad = Number(document.getElementById("cantidad").value);

    let total_regular = cantidad * precio;


    
    
    document.getElementById("total_regular").innerHTML = "Total: " + total_regular.toFixed(2);
    
}

function calcular_super(){

    let precio = Number(document.getElementById("precio").value);

    let cantidad = Number(document.getElementById("cantidad").value);

    let total_super = cantidad * precio;



    document.getElementById("total_super").innerHTML = "Total: " + total_super.toFixed(2);


    
}

function calcular_diesel(){

    let precio = Number(document.getElementById("precio").value);

    let cantidad = Number(document.getElementById("cantidad").value);

    let total_diesel = cantidad * precio;



    document.getElementById("total_diesel").innerHTML = "Total: " + total_diesel.toFixed(2);


    
}



