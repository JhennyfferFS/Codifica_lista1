const prompt = require("prompt-sync")();


const limite = 2000;
let contador = 1000;

while (contador < limite) {
    if (contador % 11 === 5) {
       console.log(contador + " Dividido por 11 sobra 5") 
    }
    contador++;
}

