const boton = document.querySelector("#submit")

boton.addEventListener("click", function(){
    const nombre = document.querySelector("#nombre")
    const paterno = document.querySelector("#paterno")
    const materno = document.querySelector("#materno")
    const dia = document.querySelector("#dia")
    const mes = document.querySelector("#mes")
    const anio = document.querySelector("#anio")
    const resultado = document.querySelector("textarea")

    const nombre1 = [...nombre]
    const paterno1 = Array.from(paterno)
    const materno1 = materno.split('')
    let curp

    const vocal = ["o","l","á"].filter(l => "AEIOUÁÉÍÓÚ".includes(l.toUpperCase()))
    dia1= 

    resultado.innerHTML=curp

})

