//Evento DOM formulario: creando html desde js
const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', e=>{
    
    e.preventDefault()
    const nombre= document.querySelector('.nombre')
    const pass= document.querySelector('.nombre').value
    
    const alertaPrevia = document.querySelector('.alerta')
    if(alertaPrevia){
        alertaPrevia.remove()
    }
    const alerta = document.createElement('DIV')
    alerta.classList.add('alerta')
    

    if(nombre==='' || pass ===''){
        alerta.textContent='Todos los campos son obligatorios'
        alerta.classList.add('error')
    }else{
        alerta.textContent='Todo bien...'
        alerta.classList.add('exito')
    }
        formulario.appendChild(alerta)
})