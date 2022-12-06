let parrafo= document.querySelector('.info')
const mySubmitValues=document.querySelector('form')

mySubmitValues.addEventListener('submit',sendData)

const myNewText=document.createElement('p')
myNewText.style.width='150px'
myNewText.style.height='30px'
myNewText.style.background='green'
myNewText.style.color='white'

function sendData(e){
    e.preventDefault()
    let myInfo = parrafo.value
    console.log(myInfo)
    myNewText.innerText=myInfo
    mySubmitValues.appendChild(myNewText)

}
