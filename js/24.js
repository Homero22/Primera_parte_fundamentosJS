//Eventos del DOM



// const clickheading = ()=>{
//     console.log('diste click en heading')
// }
const heading =document.querySelector('.heading')
heading.addEventListener('click', ()=>{
    heading.textContent= 'holaaa'
})
const enlaces = document.querySelectorAll('.navegacion a')

enlaces.forEach(enlace =>{
    enlace.addEventListener('click', ()=>{
        console.log('Diste click a un enlace')
    })
})
// function clickheading(){
//   console.log('Diste click en heading')
// }