const prompt = require('prompt-sync')();

let somaValores = 0;
let somaPesos = 0;

let numero = parseFloat(prompt("Digite um número decimal, ou 0 para sair: "));
while (numero !== 0) {
    if (Number.isInteger(numero)) {
        console.log("Digite um número decimal válido.");
        numero = parseFloat(prompt("Digite um número decimal válido, ou 0 para sair: "));
        continue;
    }
    let peso = parseFloat(prompt("Digite o peso para este número: "));

    somaValores += numero * peso;
    somaPesos += peso;

    numero = parseFloat(prompt("Digite um número decimal, ou 0 para sair: "));
}

let mediaPonderada = somaValores / somaPesos;

console.log("A média ponderada dos números digitados é: " + mediaPonderada);