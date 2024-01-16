function contactar() {
    // Capturar los valores de los campos
    var nombre = document.getElementById('cDatoNombre').value.trim();
    var email = document.getElementById('cDatoEmail').value.trim();
    var celu = document.getElementById('cDatoCelu').value.trim();
    var departamento = document.getElementById('cDepartment').value.trim();
    var provincia = document.getElementById('cProvince').value.trim();
    var distrito = document.getElementById('cDistrict').value.trim();
    var direccion = document.getElementById('cAddress').value.trim();
    var asunto = document.getElementById('cDatoAsunto').value.trim();
    var productos = document.getElementById('cProductos').value.trim();
    var servicios = document.getElementById('cServicios').value.trim();
    var motivo = document.getElementById('cWhy').value.trim();
    var mensaje = document.getElementById('cMensaje').value.trim();

    // Verificar que todos los campos obligatorios estén llenados
    if (!nombre || !email || !celu || !departamento || !provincia || !distrito || !direccion || !asunto || !productos || !servicios || !motivo || !mensaje || !document.getElementById('cTerms').checked) {
        alert('Por favor, complete todos los campos obligatorios.');
        return false;
    }

    // Construir la URL de WhatsApp con la información del formulario
    var urlWhatsApp = 'https://api.whatsapp.com/send?phone=%2B51966257096&text=' +
        'Nombre: ' + encodeURIComponent(nombre) +
        '%0AEmail: ' + encodeURIComponent(email) +
        '%0ATeléfono: ' + encodeURIComponent(celu) +
        '%0ADepartamento: ' + encodeURIComponent(departamento) +
        '%0AProvincia: ' + encodeURIComponent(provincia) +
        '%0ADistrito: ' + encodeURIComponent(distrito) +
        '%0ADirección: ' + encodeURIComponent(direccion) +
        '%0AAsunto: ' + encodeURIComponent(asunto) +
        '%0AProductos: ' + encodeURIComponent(productos) +
        '%0AServicios: ' + encodeURIComponent(servicios) +
        '%0AMotivo: ' + encodeURIComponent(motivo) +
        '%0AMensaje: ' + encodeURIComponent(mensaje);

    // Redirigir a la URL de WhatsApp
    window.location.href = urlWhatsApp;

    // Devolver false para evitar que el formulario se envíe normalmente
    return false;
}