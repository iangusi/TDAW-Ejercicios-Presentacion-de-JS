const boton = document.querySelector("button")

boton.addEventListener("click", function(){
    const input1 = document.querySelector("#vector1").value
    const input2 = document.querySelector("#vector2").value

    const vec1 = input1.split(",").map(num => Number(num.trim()));
    const vec2 = input2.split(",").map(num => Number(num.trim()));

    if(vec1.some(isNaN) || vec2.some(isNaN)){
        alert("Hay algún valor que no solo es un número.")
        return;
    }

    const vec3 = vec1.map((num, i) => num+vec2[i])

    document.querySelector("div").textContent="Resultado: " + JSON.stringify(vec3)
})