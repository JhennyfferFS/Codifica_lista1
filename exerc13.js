const prompt = require("prompt-sync")();

const limite = 5;
let contador = 0;

while (contador < limite) {
const numero = Number(prompt("Digite um número: "));

for (let i = 1; i <= numero; i++) {
    console.log(i + " x " + numero + " = " + (i * numero));
}
    contador++;
}