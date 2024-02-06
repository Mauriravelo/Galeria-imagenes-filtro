$(document).ready(function () {
    // Funcion para filtrar las imagenes por categoria, al hacer clic en los botones de filtrado
    $(".filter-btn").click(function () {
      var categoria = $(this).data("category");
  
      console.log({ categoria });
  
      if (categoria === "todos") {
        $(".imagen").show();
      } else {
        $(".imagen").hide(); // Oculta todas las imágenes
  
        // Muestra solo las imágenes de la categoría seleccionada
        $("." + categoria).show();
      }
    });
  });
  

