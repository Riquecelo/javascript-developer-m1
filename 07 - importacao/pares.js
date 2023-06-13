const { gets, print } = require('./funcao-auxiliar-pares')

const quantidadeDeNumeros = gets();
let pares = [];

for(let i =0; i <= quantidadeDeNumeros; i++){
    const numero = gets();
    if(numero % 2 === 0){
        pares.push(numero)
        //print(numero)
    }
}

print(pares)