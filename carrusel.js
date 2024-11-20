let indiceImagen = 0;

function cambiarImagen(direccion) {
    const imagenes = document.querySelector('.imagenes');
    const totalImagenes = imagenes.children.length;

    // Actualizar el índice de la imagen
    indiceImagen = (indiceImagen + direccion + totalImagenes) % totalImagenes;

    // Mover el carrusel para mostrar la imagen correcta
    imagenes.style.transform = `translateX(-${indiceImagen * 100}%)`;
}

// Cambiar automáticamente la imagen cada 5 segundos
setInterval(() => cambiarImagen(1), 5000);

// Botones de navegación
document.querySelector('.prev').addEventListener('click', () => cambiarImagen(-1));
document.querySelector('.next').addEventListener('click', () => cambiarImagen(1));



function toggleMenu() {
    const menuItems = document.getElementById('menuItems');
    if (menuItems.style.display === 'none' || menuItems.style.display === '') {
        menuItems.style.display = 'block'; // Muestra el menú
    } else {
        menuItems.style.display = 'none'; // Oculta el menú
    }
}