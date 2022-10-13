//Arrow functions y Array methods
const tecnologias = ['HTML','HTML', 'css','Jaavscript', 'react']

// const nuevoArray= tecnologias.map(tech =>{
//     if(tech === 'HTML'){
//         return 'MOngo'
//     }else{
//         return tech
//     }
// })


const nuevoArray2 = tecnologias.filter( tech => tech!=='HTML' )

console.log(nuevoArray2)

