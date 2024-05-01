const prompt = require("prompt-sync")();

while (true) {
const numero = Number(prompt("Digite um número: "));

    if (isNaN(numero) || numero <= 0 || !Number.isInteger(numero)) {
        console.log("Numero invalido.");
        break;
    } if (numero % 2 === 0) {
        console.log("O número " + numero + " é PAR.");
    } else {
        console.log("O número " + numero + " é ÍMPAR.");
    }
} 