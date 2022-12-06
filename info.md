## Obtener los atributos con JavaScript
Obtener el valor de los atributos en javaScript es muy optimo a la hora de manejar ciertas validaciones u datos que acepta y proporciona dicha etiqueta.
Un caso muy concreto de esto son los formularios, cada campo a llenar acepta valores pero tambien debemos recibirlos y poder manipular el contenido.

Ejemplo 
<input type='text' id='nombre'>
<script>
    let input= document.querySelector('input')//lo busco por etiqueta
    console.log(input.type)
    console.log(input.id)
</script>

Esta es la manera mas sencilla de consultar el valor dentro del atributo, pero existen otros metodos mas complejos y concretos
* element.getAttribute(name) – get the attribute value
* element.setAttribute(name, value) – set the value for the attribute
* element.hasAttribute(name) – check for the existence of an attribute
* element.removeAttribute(name) – remove the attribute

<input type='text' id='nombre'>
<script>
    let input= document.querySelector('input')//lo busco por etiqueta
   let value= input.getAttribute('type')
    input.setAttribute(saludar, 'hola')
    let hasAttrValue= input.hasAttribute('name') //resultado booleano
   // input.removeAttribute('saludar')
</script>

## Manejo del valor dentro de un input
Para recibir y manipular datos dentro de input se requiere del manejo optimo de sus atributos y alguna funcion que envie sus valores.

La manera sencilla

<input type='text' id='nombre'>
<script>
    let input= document.querySelector('input')//lo busco por etiqueta
    function inputValue(){
        console.log(input.value) //si ejecutamos esta funcion dentro de la etiqueta form
    } //por fuera de la etiqueta form no ocurre nada
</script>

Si queres el valor se un input en especifico debemos llamar a la funcion para escuchar eventos
* addEventListener('evento',funcionAEjecutar)
<script>
    let input=document.querySelector('input')

const seeData = (e) =>{
    console.log(e.target.value)
}
input.addEventListener('input',seeData)

</script>

## addEventListener Que es?
Un evento es una acción que ocurre en el navegador web, que el navegador web le informa para que pueda responder.

Por ejemplo, cuando los usuarios hacen clic en un botón de una página web, es posible que desee responder a este evento de clic mostrando un cuadro de diálogo.

Cada evento puede tener un controlador de eventos que es un bloque de código que se ejecutará cuando ocurra el evento.

Un controlador de eventos también se conoce como detector de eventos. Escucha el evento y se ejecuta cuando ocurre el evento.

De manera resumida esta funcion es la encargada de escuchar el tipo de evento y retornar la funcion deseada,
Algunas funciones requieren que el evente maneje en flujo del elemento dentro de la funcion.

## preventDefault() 
Para evitar el comportamiento predeterminado de un evento, utilice el método preventDefault().

Algunos eventos generan una recarga indeseada del navegador, este es el caso de los form; por lo tanto 
se utiliza este metodo para evitar que ocurra.

## stopPropagation()
El método stopPropagation() detiene inmediatamente el flujo de un evento a través del árbol DOM. Sin embargo, no detiene el comportamiento predeterminado de los navegadores.

Sin el método stopPropagation(), vería dos mensajes en la ventana de la consola.

Sin embargo, el evento de clic nunca llega al cuerpo porque se llamó a stopPropagation() en el controlador de eventos de clic del botón.

## removeEventListener()
Es igual al addEventListener(), remueve el evento agrego y se le deben pasar por parametro los mismos que se agrega con addEventListener().
<script>
    let btn = document.querySelector('#btn');

// add the event listener
let showAlert = function() {
    alert('Clicked!');
};
btn.addEventListener('click', showAlert);

// remove the event listener
btn.removeEventListener('click', showAlert);

</script>