const prompt = require("prompt-sync")();

const valor1 = parseInt(prompt("Digite o primeiro valor: "));
const valor2 = parseInt(prompt("Digite o segundo valor: "));

if (valor1 === valor2) {
    console.log("Primeiro valor deve ser diferente do segundo");
    return  
} else if (valor1 > valor2) {
    console.log(valor2, valor1);
} else {
    console.log(valor1, valor2);
}

return 