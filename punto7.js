 //Realizar un descuento a un producto 
let precio = promptfloat("Ingrese El Valor A Pagar");
let total = precio;
let descuento = parsefloat(precio) * (0.20);
let total_a_pagar = precio-descuento;

total_a_pagar=total_a_pagar* (1.15);

alert("El Valor Sin Descuento Es:" + precio)
alert("El Valor Total A Pagar Con Decuento Es:" + total_a_pagar);



