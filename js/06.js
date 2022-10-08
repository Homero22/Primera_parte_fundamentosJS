//Objetos - destructuring con 2 o mas 

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}
const cliente = {
    nombre: "Homero",
    premium: true
}

const {nombre, precio, disponible}= producto
//ALIAS
const {nombre:nombreCliente, premium}= cliente

console.log(nombre, precio, disponible)
console.log(nombreCliente, premium)