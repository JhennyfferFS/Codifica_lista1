function calcularTemperatura(Celsius) {
let Fahrenheit = Celsius * 9/5 + 32
return Fahrenheit}

const prompt = require("prompt-sync")();

let Celsius = parseInt(prompt("Insira a temperatura em celsius: "));

let resultado = calcularTemperatura(Celsius);

console.log("A temperatura em Fahrenheit é: " + resultado + "F");
