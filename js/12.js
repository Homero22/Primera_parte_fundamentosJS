//Funciones - Function declaration


//parámetros
// function sumar(numero, numero2){
//     console.log(numero+numero2)
// }

// //argumentos
// sumar(5,8)

function sumar(numero, numero2){
    return {
        valor: numero+numero2 ,
        mensaje:'Holaaa'
    }
}
const {valor,mensaje} = sumar(10, 20)
console.log(mensaje, valor)


