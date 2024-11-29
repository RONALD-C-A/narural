// Función para cambiar el slide del carrusel
function cambiarSlide() {
    var slides = document.querySelectorAll(".carousel .slide");
    var slideActual = document.querySelector(".carousel .slide.active");
    var siguienteSlide = slideActual.nextElementSibling;
  
    if (!siguienteSlide) {
      siguienteSlide = slides[0];
    }
  
    slideActual.classList.remove("active");
    siguienteSlide.classList.add("active");
  }
  
  // Evento para el clic en el botón de siguiente slide
  document.querySelector(".carousel .button.next").addEventListener("click", cambiarSlide);
  
  // Función para añadir un producto al carrito
  function añadirAlCarrito() {
    // Obtenemos el producto que se ha seleccionado
    var producto = this.parentElement.parentElement;
  
    // Añadimos el producto al carrito
    // ...
  }
  
  // Evento para el clic en el botón "Añadir al carrito"
  document.querySelectorAll(".productos-list .add-to-cart").forEach(function(botón) {
    botón.addEventListener("click", añadirAlCarrito);
  });
  