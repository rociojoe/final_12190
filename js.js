


document.addEventListener("submit", function (event) {
    if (document.getElementById("precio").value.trim() === "") {
        event.preventDefault();
        alert("agrega un precio");
    }
    if (document.getElementById("cantidad").value.trim() === "") {
        event.preventDefault();
        alert("agrega una cantidad");
    }
});






let precio = document.getElementById("precio").value;
let cantidad = document.getElementById("cantidad").value;

function calcular_regular(){

    let precio = Number(document.getElementById("precio").value);

    let cantidad = Number(document.getElementById("cantidad").value);

    let total_regular = cantidad * precio;

    let exencion = total_regular * 0.90;


    
    
    document.getElementById("total_regular").innerHTML = "Total: " + total_regular.toFixed(2);
    document.getElementById("exencion_regular").innerHTML = "Exencion: " + exencion.toFixed(2);



}

function calcular_super(){

    let precio = Number(document.getElementById("precio").value);

    let cantidad = Number(document.getElementById("cantidad").value);

    let total_super = cantidad * precio;

    let exencion = total_super * 0.90;

    document.getElementById("total_super").innerHTML = "Total: " + total_super.toFixed(2);
    document.getElementById("exencion_super").innerHTML = "Exencion: " + exencion.toFixed(2);

    
}

function calcular_diesel(){

    let precio = Number(document.getElementById("precio").value);

    let cantidad = Number(document.getElementById("cantidad").value);

    let total_diesel = cantidad * precio;

    let exencion = total_diesel * 0.90;

    document.getElementById("total_diesel").innerHTML = "Total: " + total_diesel.toFixed(2);
    document.getElementById("exencion_diesel").innerHTML = "Exencion: " + exencion.toFixed(2);

    
}







