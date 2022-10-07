
//prueba 
//Objetos

// const nombre ="Tabblet"
// const precio = 300
// const disponible= true

const producto ={
    nombre : "Tablet",
    precio : 300,
    disponible : true
}

//acceder a las propiedades

console.table(producto.disponible)
//Destructuring
const {nombre, precio, disponible} = producto
console.log(nombre)

//Object Literal enhacement
const autenticado = true
const usuario = "Homero"
//deben llamarse igual  y se puede poner 
const nuevoUsuario ={
    autenticado,
    usuario
}
console.table(nuevoUsuario)