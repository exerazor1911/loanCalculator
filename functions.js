
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
         type: 'GET',
         dataType: 'json' ,
         beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDY1OTYzNjAsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJleGVfY2llbkBob3RtYWlsLmNvbSJ9.v66Gl3ng8Wjogvfc_jojS96MBvTxq99PXK7opRaduortbcZ2WVPyJ-S3_a3q5ryvBeLoE5DlrSXlVX88cq08kA' )
         }
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

