const boton = document.querySelector("button")

boton.addEventListener("click", function(){
    const numero = Number(document.querySelector("input").value)
    numero%2==0? alert("Es par!") : alert("No es par!")
})