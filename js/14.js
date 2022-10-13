//funciones Arrow function

//normal
const multi = ()=>{
    return 'hola'
}

// cuando se tiene una linea de codigo se quita las llaves y el return
const sumar1 = (numero1, numero2)=> (numero1+numero2) 
//cuando solo existe un parámetro se quita los paréntesis de los parámetros
const restar = numero => numero-2
console.log(restar(5))
//--------------------
const resultado =sumar1(30,30)
console.log(resultado)

const r = multi()
console.log(r)