
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

$(document).ready(function(){
   $('.h1-title').slideDown(3000)
   $('#boton').click(function(){
      $('#cargando').fadeIn( 3000, function() { $('#cargando').fadeOut(3000)
   });
      calcularSueldo()
      mostrarDolar()
   })
});


const up = document.querySelector("#up");
up.addEventListener("click", function () {
window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
})
})
