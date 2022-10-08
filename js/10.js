//destructuring de arrays
const tecnologias = ['HTML','HTML', 'css','Jaavscript', 'react']

//se extraen las posiciones xd
const [html, css]= tecnologias

// console.log( css)

const cliente = {
    nombre: "Homero",
    tipo: "premium"
}
// como acceder a una posición
const [,,,vas]= tecnologias
console.log(vas)
//
// const {tipo}= cliente
// console.log(tipo)