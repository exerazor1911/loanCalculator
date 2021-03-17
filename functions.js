// CALCULAR SUELDO
function calcularSueldo () {

    nombre = $('#nombre').val().toUpperCase()
    apellido = $('#apellido').val().toUpperCase()
    mail = $('#mail').val().toUpperCase()

    console.log(nombre)
    console.log(apellido)
    console.log(mail)

    clientData = {
      "nombre" : nombre,
      "apellido" : apellido,
      "mail" : mail
      }
      //NOMBRES
      const sessionStorageContenido = sessionStorage.getItem('nombresCliente')
      let nombres;
      if (sessionStorageContenido === null) {
         nombres = [];
      } else {
            nombres = JSON.parse(sessionStorageContenido)
         }
         nombres.push(clientData.nombre);
         const nombresSinDuplicado = [...new Set(nombres)]
         sessionStorage.setItem('nombresCliente', JSON.stringify(nombresSinDuplicado))
      //APELLIDOS
      const sessionStorageContenido2 = sessionStorage.getItem('apellidosCliente')
      let apellidos;
      if (sessionStorageContenido2 === null) {
      apellidos = [];
      } else {
      apellidos = JSON.parse(sessionStorageContenido2)
         }
      apellidos.push(clientData.apellido);
      const apellidosSinDuplicado = [...new Set(apellidos)]
      sessionStorage.setItem('apellidosCliente', JSON.stringify(apellidosSinDuplicado))
      //MAILS
      const sessionStorageContenido3 = sessionStorage.getItem('mailsCliente')
      let mails;
      if (sessionStorageContenido3 === null) {
      mails = [];
      } else {
      mails = JSON.parse(sessionStorageContenido3)
         }
      mails.push(clientData.mail);
      console.log(mails)
      const mailsSinDuplicado = [...new Set(mails)]
      sessionStorage.setItem('mailsCliente', JSON.stringify(mailsSinDuplicado))

      let content = document.createTextNode('')
      
      if (nombresSinDuplicado.length == 1 && nombresSinDuplicado != "") { 
   for (i=0 ; i < nombresSinDuplicado.length ; i++) {

     let myParagraph = $('<p></p>')

     content.nodeValue="Bienvenido señor/a: " + nombresSinDuplicado[i] + " " + apellidosSinDuplicado[i] + ", su correo electronico es: " + mailsSinDuplicado[i] + "."

     myParagraph.append(content)

     $('#resultadoPrestamo').append(myParagraph)

     console.log(content.text)

     myParagraph.css({
      'color' : '#28a745',
      'text-align' : 'center',
     
    });
    
   }
     

  } else if (nombresSinDuplicado.length > 1) { 

   let myParagraph = $('<p></p>')

     content.nodeValue="No puede ingresar 2 usuarios en una misma sesion, refresque la pagina e ingrese nuevamente"

   myParagraph.append(content)

   $('#resultadoPrestamo').append(myParagraph)

   console.log(content.text)

   myParagraph.css({
      'color' : '#f0ab0c',
      'text-align' : 'center',
   });
   
  }
     else  {

     let myParagraph = $('<p></p>')

     content.nodeValue="Debe ingresar su usuario"

     myParagraph.append(content)

     $('#resultadoPrestamo').append(myParagraph)

     console.log(content.text)

     myParagraph.css({
      'color' : 'red',
      'text-align' : 'center',
   });
  }
  // Mostrar sueldo $ARG
  let sueldoPesos = $('#monto').val()
  $('#sueldo-pesos').val(sueldoPesos)

  // Display de texto que te hara largar una lagrima
  $('#resultado h5').css('display', 'block')
}
  // MOSTRAR DOLAR   
   function mostrarDolar () {
      $.ajax ({
         url: 'https://www.dolarsi.com/api/api.php?type=valoresprincipales',
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
