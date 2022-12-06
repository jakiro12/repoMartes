let input=document.querySelector('input')

const seeData = (e) =>{
    console.log(e.target.value)
}
input.addEventListener('input',seeData)

let link = document.querySelector('a');

link.addEventListener('click',function(event) {
    console.log('clicked');
    event.preventDefault();
});
let btn = document.querySelector('button');

btn.addEventListener('click', function(event) {
    console.log('The button was clicked!');
    event.stopPropagation();
});

document.body.addEventListener('click',function(event) {
    console.log('The body was clicked!');
});
