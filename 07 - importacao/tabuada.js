const { gets, print } = require('./funcao-auxiliar-tabuada')

const tabuada = gets()

for(let i = 0; i <= 10; i++){
    print( tabuada +' x '+ i + ' = '+ tabuada * i)
}