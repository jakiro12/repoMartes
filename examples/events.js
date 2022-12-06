let mydiv=document.querySelector('div')
mydiv.addEventListener('click',function changeColor(){
    mydiv.style.background='blue'
})
mydiv.addEventListener('dblclick',function removeColor(){
    mydiv.style.background='white'
})