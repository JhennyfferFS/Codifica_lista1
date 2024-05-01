let numero = 101;

while (numero < 150) {
    let divisor = 2;
    let primo = true;

    while (divisor < numero) {
        if (numero % divisor === 0) {
            primo = false;
            break;
        }
        divisor++;
    }

    if (primo) {
        console.log(numero + " é um número primo");
    }

    numero++;
}