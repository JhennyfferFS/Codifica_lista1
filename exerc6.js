const prompt = require("prompt-sync")();

let ladoA = parseInt(prompt("Digite o comprimento do primeiro lado: "));
let ladoB = parseInt(prompt("Digite o comprimento do segundo lado: "));
let ladoC = parseInt(prompt("Digite o comprimento do terceiro lado: "));

if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
    console.log("As medidas formam um triângulo ");
  
    if (ladoA != ladoB && ladoB != ladoC && ladoC != ladoA) {
        console.log("O triângulo formado é escaleno")
    }  if (ladoA === ladoB && ladoB === ladoC) {
            console.log("O triângulo formado é equilátero")
    } else if (ladoA === ladoB  || ladoB === ladoC  || ladoC === ladoA) {
        console.log("O triângulo formado é isósceles") }
        
        
} else {
    console.log("As medidas não formam um triângulo");
}