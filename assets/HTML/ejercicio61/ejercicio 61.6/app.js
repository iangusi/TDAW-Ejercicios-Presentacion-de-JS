const boton = document.querySelector("button")

boton.addEventListener("click", function(){
    const numeros = document.querySelector("input").value

    const arreglo = numeros.split(",").map(num => Number(num.trim()));

    if(arreglo.some(isNaN)){
        alert("Hay algún valor que no es un número.")
        return;
    }

    document.querySelector("div").textContent="Resultado: " + arreglo.reduce((total, num) => total + num, 0)/arreglo.length;
})