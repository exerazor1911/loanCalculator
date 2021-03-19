
  
   let usuariosRegistrados = []

   let usuarioIngresado = []

   let nombre = ""

   let apellido = ""

   let mail = ""

   let clientData = {
      "Nombre" : "",
      "Apellido" : "",
      "E-mail" : ""
   }
   let sueldoPesos
   let dolarSeleccionado
   let montoDolar
   let montoDolarSeleccion
   let sueldoEnDolares
  
   $('.h1-title').slideDown(3000)
   $('#boton').click(function(){
      $('#cargando').fadeIn( 3000, function() { $('#cargando').fadeOut(3000)
   });
      
      mostrarDolar()
      calcularSueldo()
      montoDolar = mostrarDolar()
      montoDolarSeleccion = parseFloat(montoDolar[dolarSeleccionado].casa.compra).toFixed(2)
      sueldoEnDolares = (sueldoPesos / montoDolarSeleccion).toFixed(2)
      $('#sueldo-usd').val(sueldoEnDolares)
      sessionStorage.removeItem('nombresCliente')
      sessionStorage.removeItem('apellidosCliente')
      sessionStorage.removeItem('mailsCliente')
   })  
const up = document.querySelector("#up");
up.addEventListener("click", function () {
window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
})
})
