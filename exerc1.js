//Instalar o node e VS code por meio do google
//Abrir o vs code
//Abrir o terminal atráves do comando 'crtl + "'
//Escrever "npm install prompt-sync" e dar enter para solicitar entrada do usuário
//Criar uma pasta dentro dos arquivos do computador
//Abrir a pasta apertando o botão direito do mouse e selecionando "abrir com vs code"
//Criar um arquivo e nomear
//Definir uma função para calcular a temperatura 
function calcularTemperatura(Celsius) {
    let Fahrenheit = Celsius * 9/5 + 32
return Fahrenheit}

//Importar a biblioteca prompt-sync
const prompt = require("prompt-sync")();

//Definir as variáveis e solicitar ao usuário que digite a temperatura em celsius
let Celsius = parseInt(prompt("Insira a temperatura em celsius: "));

//Chamar a função
let resultado = calcularTemperatura(Celsius);

//Exibir o resultado
console.log("A temperatura em Fahrenheit é: " + resultado + "F");
// Escrever no terminal "node exerc1.js" para executar o código