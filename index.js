/* CALCULADORA EM JAVASCRIPT*/
const n = +prompt('Digite um numero');

for (let cont = 0; cont < 11; cont++) {
    let resultado = cont * n;
    console.log(`${n} x ${cont} =  ${resultado}`);
};

