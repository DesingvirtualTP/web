const menu = document.querySelector('.nav__menu');
const menuList = document.querySelector('.nav__list');
const links = document.querySelectorAll('.nav__link');

const modal = document.querySelector('.modal');
const modalButtonClose = document.querySelector('.modal__close');

menu.addEventListener('click', function () {

    menuList.classList.toggle('nav__list--show');

});

links.forEach(function (link) {

    link.addEventListener('click', function () {

        menuList.classList.remove('nav__list--show');

    })

});

// MODAL
// Creamos una variable para almacenar el índice de la imagen actual
var index = 0;

// Creamos una función para cambiar la imagen cada dos segundos
function changeImage() {
    // Obtenemos todas las imágenes con la clase .hero__img
    var images = document.querySelectorAll(".hero__img");
    // Ocultamos la imagen actual
    images[index].style.display = "none";
    // Incrementamos el índice y, si llega al final, lo reiniciamos a cero
    index++;
    if (index == images.length) {
        index = 0;
    }
    // Mostramos la siguiente imagen
    images[index].style.display = "block";
}

// Llamamos a la función changeImage cada dos segundos (2000 milisegundos)
setInterval(changeImage, 2000);

// JavaScript para alternar la visibilidad
let images = document.querySelectorAll('.modal__figure');
let currentImage = 0;

// Se ejecuta cuando se carga el DOM
document.addEventListener('DOMContentLoaded', () => {
    // Añadimos la clase 'modal--visible' al elemento con la clase 'modal'
    modal.classList.add('modal--visible');

    // Añadimos un evento de clic al botón de cierre del modal
    modalButtonClose.addEventListener('click', () => {
        // Removemos la clase 'modal--visible' para ocultar el modal
        modal.classList.remove('modal--visible');
    });
});

// FORMULARIO DE SORTEO
const datoNombre = document.querySelector('#datoNombre');
const datoEmail = document.querySelector('#datoEmail');
const datoCelu = document.querySelector('#datoCelu');
const datoSorteo =  document.querySelector('#datoSorteo');
const btnEnviar = document.querySelector('#btnEnviar');

function validarCampos() {
    // Verificar que todos los campos estén llenados
    if (datoNombre.value.trim() === '' || datoEmail.value.trim() === '' || datoCelu.value.trim() === ''|| datoSorteo.value.trim() === '') {
        alert('Por favor, complete todos los campos antes de enviar.');
        return false;
    }

    // Verificar que se haya seleccionado el checkbox
    if (!document.getElementById('checkbox').checked) {
        alert('Debe aceptar las bases del sorteo para participar.');
        return false;
    }

    // Si todos los campos están llenos y el checkbox está seleccionado, activar el botón "Enviar"
    btnEnviar.removeAttribute('disabled');

    return true;
}

function enviar() {
    // Validar campos antes de enviar
    if (validarCampos()) {
        mensaje = `https://api.whatsapp.com/send?phone=%2B51966257096&text=${datoNombre.value}%20${datoEmail.value}%20${datoCelu.value}%20${datoSorteo.value}`;
        btnEnviar.href = mensaje;
    }
}
// AGREGADO ULTIMO POR OBSERVACION DE BRAVE Obtener el elemento por su id





document.getElementById('whatsappDiv').addEventListener('click', function () {
    window.open('https://api.whatsapp.com/send?phone=%2B51966257096&data=ARB0feDCwUpCUYzvGJunro2lcDScwG2Srto4TzQgkE4vZTfk3r2PbTApqqbisvtW9O8fhwY-aWwFWpC-OhQwMW9EVG1DIenXJ7EnNAToqmOzFTlGLYxsUOgtoFNrgXxaZUMrybL1o3sD-kSc_5l0bwTZkQ&source=FB_Page&app=facebook&entry_point=page_cta&text=Hola%21%20Le%20estoy%20contactando%20desde%20su%20p%C3%A1gina%20web%2C%20y%20estoy%20interesado%20en%3A', '_blank');
    document.getElementById('whatsappText').style.display = 'block';
});
