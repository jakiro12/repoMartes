const myForm = document.querySelector('form')


const sendAll=(e)=>{
    e.preventDefault()
    const data = new FormData(e.target)
    const datosCompletos = Object.fromEntries(data.entries()); //lo combierte en un JSON
console.log(datosCompletos)
}
myForm.addEventListener('submit',sendAll)