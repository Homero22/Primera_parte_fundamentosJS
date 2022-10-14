//Evento DOM formulario
const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', e=>{
    
    e.preventDefault()
    const nombre= document.querySelector('.nombre')
    const pass= document.querySelector('.nombre').value
    console.log(nombre.value)
    console.log(pass)
    if(nombre==='' || pass ===''){
        console.log('Todos los campos son obligatorios')
    }else{
        console.log('Todo bien, enviando...')
    }

    // console.log('Enviaste formulario')
})