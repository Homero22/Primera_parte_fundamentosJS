//unir dos objetos o mas

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: "Homero",
    premium: true
}
//crear un nuevo objeto para no modificar el original
//const nuevoObjeto = Object.assign(producto,cliente) NO
// Spread operator : hace una copia de los objetos y no modifica el original

//const nuevoObjeto ={...producto, ...cliente}
//Pero al imprimir hay conflictos en propiedades iguales como nombre

//console.log(nuevoObjeto)

// Esto debe hacerse
const nuevoObjeto ={
    producto: {...producto},
    cliente: {...cliente}
}
console.log(nuevoObjeto)
console.log(cliente)
console.log(producto)
