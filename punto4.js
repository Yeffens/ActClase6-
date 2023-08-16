let valuebyhour = 3000
let quantityOfhour = prompt("Ingrese la cantidad de horas utilizadas")
let quantityOfminutes = prompt("Ingrese de los minutos ")

let totalprice = 0
 if (quantityOfminutes > 0) {
    quantityOfhour = parseInt(quantityOfhour) + 1
}
totalprice = quantityOfhour * valuebyhour
alert("El Precio Total De Tu Servicio Es:" + totalprice)