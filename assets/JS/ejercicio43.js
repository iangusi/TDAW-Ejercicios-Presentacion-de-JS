const botonComparar = document.querySelector("#comparar");
console.log(botonComparar)
botonComparar.addEventListener("click", function() {
    // Obtener los valores de los inputs y convertirlos a números
    const num1 = document.querySelector("#num1").value;
    const num2 = document.querySelector("#num2").value;
    const num3 = document.querySelector("#num3").value;

      // Comparar los números
      if (num1 > num2 && num1 > num3) {
        alert("El número 1 es el mayor");
      } else if (num2 > num1 && num2 > num3) {
        alert("El número 2 es el mayor");
      } else if (num3 > num1 && num3 > num2) {
        alert("El número 3 es el mayor");
      } else {
        alert("Hay números iguales o no se pudo determinar el mayor.");
      }
});