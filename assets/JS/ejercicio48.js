const contenedor1 = document.querySelector("#contenedor1")
const contenedor2 = document.querySelector("#contenedor2")
const pares = []
let suma=0

for (i=1; i<101; i++){
    i%2==0? pares.push(i):null
    suma+=i;
}

contenedor1.innerHTML += pares.join(", ")
contenedor2.innerHTML += suma