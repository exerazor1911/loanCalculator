
   let usuariosRegistrados = ['LUCAS', 'EZEQUIEL', 'JUAN', 'MANUEL', 'RAMIRO']

   let usuarioIngresado = []

   let nombre = ""

   let apellido = ""

   let mail = ""

   let clientData = {
      "Nombre" : "",
      "Apellido" : "",
      "E-mail" : ""
   }

   $('#boton').click(function(){
      mostrarCliente()
   })
