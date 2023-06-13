const { gets, print } = require('./funcao-auxiliar-maiorMenor');

const numero = gets()
let maiorValor = 0;
let menorValor = 0;

for(let i =0; i < numero; i++){
    const numeroAtual = gets()
    //console.log(numeroAtual)
    if(numeroAtual > maiorValor){
        maiorValor = numeroAtual;
    }
    if(menorValor === 0 || numeroAtual < menorValor){
        menorValor = numeroAtual;
    }
}

print(maiorValor);
print(menorValor);