document.addEventListener("DOMContentLoaded", function () {
  
    document.getElementById("nav").innerHTML = `
        <nav class="menu">
            <div class="logo">
                <img src="imagenes/camara-removebg-preview.png" alt="Logo" width="90">
            </div>
            <ul class="nav-links hidden" id="navLinks">
                <li><a href="index.html">Inicio</a></li>
                <li><a href="pagina1.html">Fotos</a></li>
                <li><a href="pagina2.html">Contacto</a></li>
            </ul>
            <div class="boton-final">
                <button id="toggleMenu">Menu</button>
            </div>
        </nav>
    `;
    
    const toggleButton = document.getElementById("toggleMenu");
    const navLinks = document.getElementById("navLinks");
    
    toggleButton.addEventListener("click", function () {
    navLinks.classList.toggle("hidden");
    });
    
});