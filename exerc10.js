const prompt = require("prompt-sync")();

const numero = parseInt(prompt("Digite um número: "));

const limite = 10;
let contador = 0;

while (contador < limite) {
    console.log(numero);
    contador++;
}