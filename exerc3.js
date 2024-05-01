const prompt = require("prompt-sync")();

const num1 = Number(prompt("Digite o primeiro número: "));
const num2 = Number(prompt("Digite o segundo número: "));
const num3 = Number(prompt("Digite o terceiro número: "));

numA = num1 + 25
numB = num2 * 3
numC = num3 * 0.12
num4 = num1 + num2 + num3

console.log("O valor do primeiro somado a 25 é: " + numA);
console.log("O valor triplicado do segundo número é: "+ numB);
console.log("O valor do terceiro número em 12% do original é: "+ numC);
console.log("A soma dos 3 números orginais é: "+ num4);
