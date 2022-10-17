//eventos del DOm inputs
const inputNombre = document.querySelector('.nombre')

inputNombre.addEventListener('input', function(evt){
    //console.log('escribiendo en el input')
    console.log(evt.target.value)
})

const inputPassword = document.querySelector('.password')
inputPassword.addEventListener('input', funcionPassword)

function funcionPassword(){
    inputPassword.type='text'
    setTimeout(()=>{
        inputPassword.type='password'
    }, 100);
}
// existen además del input, el keydown, keyup