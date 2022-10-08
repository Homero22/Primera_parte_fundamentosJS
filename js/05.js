// Manipulación de Objetos
const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}
//ya no se puede hacer nada con esta funnción
//Object.freeze(producto)
//se reescribe pero no se añade ni se quita
Object.seal(producto)

// Reescribir un valor
producto.nombre = "Monitor curvo"
//si no existe lo añade
producto.imagen = "imagen.jpg"
//eliminar
delete producto.dispo

console.table(producto)