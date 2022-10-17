//Fetch API - Async Await

const url = "https://jsonplaceholder.typicode.com/comments"


const consultarApi2 = async() =>{
    const respuesta= await fetch(url)
    const resultado = await respuesta.json()
}
consultarApi2();