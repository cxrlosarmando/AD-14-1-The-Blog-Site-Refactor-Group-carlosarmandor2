document.addEventListener("DOMContentLoaded", function() {
    // Espera a que la página se cargue completamente antes de asignar eventos
    var formulario = document.getElementById("formularioContacto");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault(); 

       
        setTimeout(function() {
            location.reload();
        }, 1000);
    });
});
