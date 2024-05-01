const prompt = require("prompt-sync")();

const quantMaca = parseInt(prompt("Digite a quantidade de maçãs compradas: "));

if(quantMaca >= 12){
    const valorTotal = quantMaca * 0.25
    console.log("O valor total é igual a: "+ valorTotal);
} else {
    const valorTotal = quantMaca * 0.30
    console.log("O valor total é igual a: "+ valorTotal);
}

return;