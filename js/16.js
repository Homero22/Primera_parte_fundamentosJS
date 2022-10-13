//Arrow functions y Array methods
const tecnologias = ['HTML','HTML', 'css','Jaavscript', 'react']
const numeros =[10,20,30]

let nuevoArray;
//filter
const nuevoArray2 = tecnologias.filter( tech => tech!=='HTML' )

//comprobar si existe un elemento de un array
//const resultado = tecnologias.includes('css')

//SOME: si al menos 1 cumple la condicion
//const resultado= numeros.some(numero=> numero >15)

//FIND: retorna el primero que cumpla la condicion
//const resultado= numeros.find(numero => numero >15)

//EVERY: si todo cumplen la condicion

//const resultado = numeros.every(numero => numero >2)


//REDUCE: acumulando en el total

//const resultado= numeros.reduce( (total, numero)=>numero + total, 0)


//Filter: crea un nuevo array en base a una condición
 //const resultado = tecnologias.filter( tech => tech =="css")
 //const resultado = numeros.filter( numero => numero >15)


 //Foreach (una vez por cada elemento del arreglo)
tecnologias.forEach((tech, index)=> console.log(index))

//map ( permite crear un nuevo arreglo)
const arrayMap= tecnologias.map(tech => tech)
console.log(arrayMap)

// console.log(resultado)
//console.log(nuevoArray2)