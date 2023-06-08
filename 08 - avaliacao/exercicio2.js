
// 2) Faça um programa que receba N (quantidade de números) e seus respectivos valores.
// Imprima o maior número par e o menor número impar.

//     Exemplo:
//         Entrada:
//             5
//             3
//             4
//             1
//             10
//             8

//         Saída:
//             Maior número par: 10
//             Menor número impar: 1

const { gets, print } = require('./funcoes-auxiliares-ex2');

const numero = gets();
let numeroMaior = null;
let numeroMenor = null;

for(let i = 0; i < numero; i++){
    const n = gets()
   // print('for -> ' + n)
    if(n % 2  === 0){
        if(numeroMaior === null || n > numeroMaior){
            numeroMaior = n;
        }
    }else{
        if(numeroMenor === null || n < numeroMenor){
            numeroMenor = n
        }
    }
}
print(numeroMaior);
print(numeroMenor)