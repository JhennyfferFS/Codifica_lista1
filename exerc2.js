function numeroVotos (eleitores, brancos, nulos){
    let invalidos = Number(brancos) + Number(nulos)
    let validos = Number (eleitores) - Number(invalidos)

    return validos
};
let prompt = require("prompt-sync")();

let eleitores = prompt("Digite o número de eleitores: ");
let brancos = prompt("Digite o número de votos brancos: ");
let nulos = prompt("Digite o número de votos nulos: ");
let validos = numeroVotos (eleitores, brancos, nulos);
console.log("O número de votos válidos é: "+ validos);


function calcularVotos (total, voto){
    let percentual = (voto / total) * 100
    return percentual
};

let percentualBrancos = calcularVotos(eleitores ,brancos);
let percentualNulos = calcularVotos(eleitores, nulos);
let percentualValidos = calcularVotos(eleitores, validos);

console.log("Percentual de votos em branco: " + percentualBrancos);
console.log("Percentual de votos nulos: " + percentualNulos);
console.log("Percentual de votos válidos: " + percentualValidos);




