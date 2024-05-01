const prompt = require("prompt-sync")();

const nota1 = parseInt(prompt("Digite a primeira nota: "));
const nota2 = parseInt(prompt("Digite a segunda nota: "));

media = (nota1 + nota2) /2

console.log("A média semestral foi igual a: "+ media);
if (media >= 6) {
    console.log("PARABÉNS! Você foi aprovado ")
} else {
    console.log("Você foi REPROVADO. Estude mais ")
}

return
