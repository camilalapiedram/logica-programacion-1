
    function ordenarNumeros() {
      // Solicitar los tres números
      let num1 = Number(prompt("Ingresa el primer número:"));
      let num2 = Number(prompt("Ingresa el segundo número:"));
      let num3 = Number(prompt("Ingresa el tercer número:"));

      let resultado = document.getElementById("resultado");

      // Verificar si son iguales
      if (num1 === num2 && num2 === num3) {
        resultado.innerHTML = "<strong>Los tres números son iguales.</strong>";
      } else {
        // Guardar los números en un arreglo
        let numeros = [num1, num2, num3];

        // Ordenar los números
        let ascendente = [...numeros].sort((a, b) => a - b);
        let descendente = [...numeros].sort((a, b) => b - a);

        // Mostrar resultados en el DOM
        resultado.innerHTML = 
          document.write(`<p>Orden de menor a mayor: ${ascendente.join(", ")}</p>`);
          document.write(`<p>Orden de mayor a menor: ${descendente.join(", ")}</p>`);
         
        
      }
    }
  

