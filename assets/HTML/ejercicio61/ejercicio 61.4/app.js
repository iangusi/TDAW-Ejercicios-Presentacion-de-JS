const boton = document.querySelector("button")

boton.addEventListener("click", function(){
    const numeros = document.querySelector("input").value

    const arreglo = numeros.split(",").map(num=>Number(num.trim()));

    let mayor, aux=arreglo[0]

    for (i=1; i<arreglo.length; i++){
        if(arreglo[i]>aux){
            aux=arreglo[i]
            mayor=i
        }
    }
    document.querySelector("div").innerHTML= "El elemento mayor se encuentra en la posición: " + mayor
})


