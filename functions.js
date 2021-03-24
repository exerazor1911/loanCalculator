// CALCULAR SUELDO
function calcularSueldo () {

    nombre = $('#nombre').val().toUpperCase()
    apellido = $('#apellido').val().toUpperCase()
    mail = $('#mail').val().toUpperCase()

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
      const mailsSinDuplicado = [...new Set(mails)]
      sessionStorage.setItem('mailsCliente', JSON.stringify(mailsSinDuplicado))
      // Creamos parrafo que se muestra al ingresar datos   
      let content = document.createTextNode('')
      
      if (nombresSinDuplicado.length == 1 && nombresSinDuplicado != "") { 
         for (i = 0 ; i < nombresSinDuplicado.length ; i++) {
            
            content.nodeValue = ""
            
            let myParagraph = ""

             myParagraph = $('<p></p>')

            content.nodeValue="Bienvenido señor/a: " + nombresSinDuplicado[i] + " " + apellidosSinDuplicado[i] + ", su correo electronico es: " + mailsSinDuplicado[i] + "."

            myParagraph.append(content)

            $('#resultadoPrestamo').append(myParagraph)
            myParagraph.css({
               'color' : '#28a745',
               'text-align' : 'center',
            }
            );
            
   }
     
  } else if (nombresSinDuplicado.length > 1) { 
   
   
   let myParagraph = ""

   content.nodeValue = ""

    myParagraph = $('<p></p>')

     content.nodeValue="No puede ingresar 2 usuarios en una misma sesion, refresque la pagina e ingrese nuevamente"

   myParagraph.append(content)

   $('#resultadoPrestamo').append(myParagraph)

   myParagraph.css({
      'color' : '#f0ab0c',
      'text-align' : 'center',
   });
   
  }
     else  {

     

      content.nodeValue = ""

      let myParagraph = ""

      myParagraph = $('<p></p>')

     content.nodeValue="Debe ingresar su usuario. Refresque la pagina e ingrese nuevamente"

     myParagraph.append(content)

     $('#resultadoPrestamo').append(myParagraph)

     myParagraph.css({
      'color' : 'red',
      'text-align' : 'center',
   });
   
  }
  // Mostrar sueldo $ARG
   sueldoPesos = $('#monto').val()
  $('#sueldo-pesos').val(sueldoPesos)

  //Switch de casos que mostrara el tipo de dolar seleccionado
   dolarSeleccionado = parseInt($('#select-list').val())
  switch (dolarSeleccionado) {
     case 1:
        $('#dolar-seleccion').val("Dolar Oficial")
        $('#sueldo-usd').val()
        break;

      case 2:
         $('#dolar-seleccion').val("Dolar Blue")
         $('#sueldo-usd').val()
        break;

      case 3:
         $('#dolar-seleccion').val("Dolar Soja")
         $('#sueldo-usd').val()
        break;

      case 4:
         $('#dolar-seleccion').val("Dolar Contaddo con Liqui")
         $('#sueldo-usd').val()
        break;

      case 5:
         $('#dolar-seleccion').val("Dolar Bolsa")
         $('#sueldo-usd').val()
        break;

      case 6:
         $('#dolar-seleccion').val("Dolar Bitcoin")
         $('#sueldo-usd').val()
        break;

      case 7:
         $('#dolar-seleccion').val("Dolar Turista")
         $('#sueldo-usd').val()
         break;
  
     default:
        $('#dolar-seleccion').val("Debe Seleccionar un Dolar")
        $('#sueldo-usd').val()
        break;
  }

  // Display de texto que te hara largar una lagrima
  $('#resultado').css('display', 'block')
}
  // MOSTRAR DOLAR   
   function mostrarDolar () {
      var data
      $.ajax ({
         url: 'https://www.dolarsi.com/api/api.php?type=valoresprincipales',
         type: 'GET',
         dataType: 'json' ,
          async: false,
         
      })
      .done(function(result) {
          data = result
      })
      .fail(function (xhr,status,error) {
         console.log(xhr)
         console.log(status)
         console.log(error)
      })
      return data
   }

   window.onunload = function () {
      sessionStorage.removeItem('nombresCliente');
      sessionStorage.removeItem('apellidosCliente');
      sessionStorage.removeItem('mailsCliente');
   }