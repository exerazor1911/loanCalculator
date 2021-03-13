
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
     
   function mostrarDatosBcra () {
      $.ajax ({
         url: 'https://api.estadisticasbcra.com',
         Header : {
            Authorization: 'BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDcxODYxMzksInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJleGVfY2llbkBob3RtYWlsLmNvbSJ9.k8vIGikLc8YAQKxAQmGsIhMTz-evIH7qu3Miq6HouRCCXiS-rHmKpAyzijGDlmGq_wBNdgmh2H9gPPv4nykp3g' 
         },
         type: 'GET',
         dataType: 'json' ,
         
      })
      .done(function(result) {
         console.log(result)
      })
      .fail(function (xhr,status,error) {
         console.log(xhr)
         console.log(status)
         console.log(error)
      })
   }

