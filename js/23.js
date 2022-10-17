const heading = document.querySelector('#heading')
heading.textContent= 'Un nuevo heading '
console.log(heading.textContent)

const inputNombre = document.querySelector('#nombre')
inputNombre.value = 'Valoress'

const enlaces = document.querySelectorAll('.navegacion a')
enlaces.forEach(enlace => enlace.textContent = 'nuevo enlacesss')

console.log(inputNombre)