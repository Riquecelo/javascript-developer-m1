
// 3) Faça um programa que calcule e imprima o salário salário a ser transferido para um funcionário.
// Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios.
// O salário salário a ser transferido é calculado da seguinte maneira: 
   
//    valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos benefícios

// Para calcular o percentual de imposto segue as aliquotas:

//     De R$ 0.00 a R$ 1100.00 = 5.00%
//     De R$ 1100.01 a R$ 2500.00 = 10.00%
//     Maior que R$ 2500.00 = 15.00%

//     Exemplo:
//         Entrada:
//             2000
//             250

//         Saída:
//             2050.00

const { gets, print } = require('./funcoes-auxiliares-ex3');

const salarioBruto = gets();
const adicionalBeneficio = gets();

const calculoImposto = function(salarioBruto, percentual){
    return salarioBruto * (percentual/100);
}
const salarioLiquido = function(){
    if(salarioBruto <= 1100){
        print(' < R$1100')
        return(salarioBruto - calculoImposto(salarioBruto, 5)) + adicionalBeneficio;
    }else if(salarioBruto > 1100 && salarioBruto <= 2500){
        print('R$1100 ~ R$2500')
        return(salarioBruto - calculoImposto(salarioBruto, 10)) + adicionalBeneficio;
    }else{
        print('> R$ 2500')
        return(salarioBruto - calculoImposto(salarioBruto, 15)) + adicionalBeneficio ;
    }
}

print(salarioLiquido())