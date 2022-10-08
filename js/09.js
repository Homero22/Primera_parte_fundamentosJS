//Operaciones con los arreglos
const tecnologias = ['HTML','HTML', 'css','Jaavscript', 'react']

//Añadir elementos
// tecnologias.push('SQL') //añade al final del array
// tecnologias.unshift('SQL') //añade al inicio del array


//Para react ( no modificar el arreglo original)

// const nuevoArray = [...tecnologias,"fffff"]
// const nuevoArray1 =["inicio", ...tecnologias]

//Eliminar elementos
//tecnologias.pop() //elimina del final
//tecnologias.shift() ////elimina del inicio
//tecnologias.splice(2,1) //elimina desde la posición 2, 1 elemento

//para react
// const nuevoA = tecnologias.filter( function(tech){
//     return tech==='HTML' // !==
// })

//reemplazar

const nuevoArray= tecnologias.map(function(tech){
    if(tech === 'HTML'){
        return 'MOngo'
    }else{
        return tech
    }
})

//Mostrar

console.table(tecnologias)
console.table(nuevoArray)