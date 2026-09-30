const numero1 = Number(prompt("Escribe el primer número:"));
const numero2 = Number(prompt("Escribe el segundo número:"));
const numero3 = Number(prompt("Escribe el tercer número:"));

if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
  alert("Escribe números, porfavor");
} else {
  console.log(numero1, numero2, numero3);

  console.log(numero1 + numero2);
  console.log(typeof numero1);

  const mayor = Math.max(numero1, numero2, numero3);
  const menor = Math.min(numero1, numero2, numero3);
  console.log(mayor, menor);

  const centro = numero1 + numero2 + numero3 - mayor - menor;
  console.log("mayor:", mayor, "centro:", centro, "menor:", menor);

  console.log("De mayor a menor: " + mayor + ", " + centro + ", " + menor);
  console.log("De menor a mayor: " + menor + ", " + centro + ", " + mayor);

  document.getElementById("contenido-mayor").innerHTML =
    "De mayor a menor: " + mayor + ", " + centro + ", " + menor;
  document.getElementById("contenido-menor").innerHTML =
    "De menor a mayor: " + menor + ", " + centro + ", " + mayor;
  if (numero1 === numero2 && numero2 === numero3) {
    document.getElementById("mensaje").innerHTML = "Los números son iguales";
  }
}
