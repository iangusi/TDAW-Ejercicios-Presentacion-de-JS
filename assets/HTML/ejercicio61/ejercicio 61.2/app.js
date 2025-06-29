const boton = document.querySelector("button")

boton.addEventListener("click", function(){
    const numero = document.querySelector("input").value
    const resultado = document.querySelector("div")
    let tabla = `<h3>Tabla del ${numero}</h3>`
    for(i=1; i<= 10; i++){
        tabla += `${numero} x ${i} = ${numero * i}<br>`;
    }

    resultado.innerHTML = tabla;
})