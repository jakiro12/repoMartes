## Mouse
Cuando hace clic en un elemento, se activan no menos de tres eventos del mouse en la siguiente secuencia:
El mousedown se activa cuando presiona el botón del mouse sobre el elemento.
El mouseup se activa cuando suelta el botón del mouse sobre el elemento.
El clic se activa cuando se detecta un mousedown y un mouseup en el elemento.

#  mousemove
El evento mousemove se activa repetidamente cuando mueve el cursor del mouse alrededor de un elemento. Incluso cuando mueve el mouse un píxel, el evento mousemove aún se activa. Hará que la página sea lenta, por lo tanto, solo registra el controlador de eventos mousemove solo cuando lo necesita e inmediatamente elimina el controlador de eventos tan pronto como ya no se usa.

## mouseover / mouseout
El mouseover se dispara cuando el cursor del mouse está fuera del elemento y luego se mueve dentro de los límites del elemento.

El mouseout se dispara cuando el cursor del mouse está sobre un elemento y luego mueve otro elemento.

## mouseenter / mouseleave
El mouseenter se dispara cuando el cursor del mouse está fuera de un elemento y luego se mueve dentro de los límites del elemento.

El mouseleave se dispara cuando el cursor del mouse está sobre un elemento y luego se mueve hacia el exterior de los límites del elemento.

Tanto mouseenter como mouseleave no burbujean ni se disparan cuando el cursor del mouse se mueve sobre elementos descendientes.