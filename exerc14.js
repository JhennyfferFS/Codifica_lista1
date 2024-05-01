const prompt = require("prompt-sync")();

let valores = Array();
let somaNum = 0;
let contador = 0;

let valorAdicional = parseFloat(prompt("Digite um valor decimal, ou 0 para sair: "));
while (valorAdicional !== 0) {
    if (!Number.isInteger(valorAdicional)) {
        valores.push(valorAdicional);
    } else {
        console.log("Por favor, digite um número decimal válido, ou 0 para sair.");
    }
    valorAdicional = parseFloat(prompt("Digite um valor decimal, ou 0 para sair: "));
console.log(valores)
} 

while (contador < valores.length) {
    somaNum += valores[contador];
    contador++;
}

const media = valores.length > 0 ? somaNum / valores.length : 0;
console.log("A média dos números é:", media);