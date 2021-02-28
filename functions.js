
function mostrarCliente () {

    nombre = $('#nombre').val().toUpperCase()
    apellido = $('#apellido').val().toUpperCase()
    mail = $('#mail').val().toUpperCase()

    console.log(nombre)
    console.log(apellido)
    console.log(mail)


     for (let i = 0; i <= usuariosRegistrados.length; i++) {

        if (nombre == usuariosRegistrados[i]) {

           usuarioIngresado.push(nombre)

        }
  }
  if (usuarioIngresado.length == 1) {
    

     let myParagraph = $('<p></p>')

     let content = document.createTextNode("Bienvenido señor/a: " + nombre + " " + apellido + ", su correo electronico es: " + mail + ".")

     myParagraph.append(content)

     $('#resultadoPrestamo').append(myParagraph)

     console.log(content.text)

     myParagraph.css({
      'color' : '#28a745',
      'text-align' : 'center',
   });

    

     

  } else if  (usuarioIngresado.length == 0) {

     let myParagraph = $('<p></p>')

     let content = document.createTextNode("Usted no es un usuario registrado")

     myParagraph.append(content)

     $('#resultadoPrestamo').append(myParagraph)

     console.log(content.text)

     myParagraph.css({
      'color' : 'red',
      'text-align' : 'center',
   });

  }
  clientData = {
    "Nombre" : nombre,
    "Apellido" : apellido,
    "E-mail" : mail
    }
    let userString = JSON.stringify(clientData);
    localStorage.setItem('datosCliente', userString);   
}
     

