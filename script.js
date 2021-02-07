
/*function botonDePrestamo (nombre, apellido) {
let nombre = document.getElementById('nombre').value;
let apellido = document.getElementById('apellido').value;
let mail = document.getElementById('mail').value;
   alert('Señor/a ' + nombre + ' ' + apellido + ' el resultado de su prestamo se encuentra a continuacion');
}

botonDePrestamo (nombre, apellido);

function ClientData (nombre, apellido, dni, mail, fnac) {
   this.nombre = nombre
   this.apellido = apellido
   this.dni = dni
   this.mail = mail
   this.fnac = fnac 
   this.cliente = function () {return 'Este usuario ya es cliente'}
   this.noCliente = function () {return 'Este usuario ingresado todavia no es cliente'}
}

var cliente1 = new ClientData ('Ezequiel', 'Giussani', 38886611, 'exe_cien@hotmail.com', '15-02-95')
console.log(cliente1)
console.log(cliente1.cliente)


var clientsArray = ['ezequiel giussani', 'lucas gabas', 'juan fierro', 'manuel rivas', 'tomas srebro', 'ramiro careri']
console.log(clientsArray.push('lucas revuelta'))
console.log(clientsArray)
var sonClientes = clientsArray.slice(0,3)
console.log(sonClientes)
var noSonClientes = clientsArray.slice(3,7)
console.log(noSonClientes)
console.log(sonClientes.toString().toUpperCase() + ' son clientes nuestros')
console.log(noSonClientes.toString().toUpperCase() + ' no son clientes nuestros')
*/


let nombre = prompt('Ingrese su nombre')
let apellido = prompt("ingrese su apellido")
let mail = prompt('ingrese su direccion de correo electronico')
while (nombre == '' || nombre == null) {
   nombre = prompt('por favor ingrese su nombre')
}
while (apellido == '' || apellido == null) {
   apellido = prompt('por favor ingrese su apellido')
}
while (mail == '' || mail == null) {
   mail = prompt('por favor ingrese su direccion de correo electronico')
}

