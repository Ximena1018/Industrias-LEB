// Variable para almacenar el inventario (simulación de base de datos)
var inventario = [];

// Función para validar y agregar inventario
function validarYAgregarInventario() {
    var nombre = document.getElementById('nombre').value.trim();
    var apellido = document.getElementById('apellido').value;
    var rh = document.getElementById('rh').value;
    var empresaAporte = document.getElementById('empresa-aporte').value;
    var tipodocumento = document.getElementById('tipo-documento').value;
    var numerodocumento = document.getElementById('numero-documento').value.trim();
    var email = document.getElementById('email').value.trim();   
    var ntelefono = document.getElementById('ntelefono').value.trim();
    var etelefono = document.getElementById('ntelefono').value.trim();
    

    // Validación de campos
    if (nombre === '' || apellido === '' || rh === '' || empresaAporte === '' ||
        tipodocumento === '' || numerodocumento === '' || email === '' || ntelefono === '' || etelefono === '') {
        alert('Por favor, complete todos los campos.');
        return;
    }

    // Validación adicional (puedes ajustar según tus necesidades)
    if (!validarEmail(email)) {
        alert('Ingrese un correo electrónico válido.');
        return;
    }

    // Crear un objeto con los datos del formulario
    var nuevoInventario = {
        nombre: razonSocial,
        apellido: tipoDocumento,
        rh: numeroDocumento,
        empresaAporte: telefono,
        tipodocumento: email,
        numerodocumento: tipoInsumo,
        email: cantidad,
        valor: valor,
        ntelefono: marca,
        etelefono: unidadMedida
    };

    // Agregar el nuevo inventario al arreglo de inventario
    inventario.push(nuevoInventario);

    // Mostrar mensaje de éxito (puedes ajustar según tu interfaz)
    alert('Se agregó el inventario correctamente.');

    // Limpiar campos del formulario después de agregar inventario (opcional)
    limpiarCamposFormulario();

    // Redirigir a la página de inventario (si es necesario)
    window.location.href = 'inventario.html'; // Ajusta según la estructura de tu proyecto
}

// Función para limpiar los campos del formulario después de agregar inventario
function limpiarCamposFormulario() {
    document.getElementById('razon-social').value = '';
    document.getElementById('tipo-documento').value = 'dni'; // Reiniciar a valor por defecto
    document.getElementById('numero-documento').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('email').value = '';
    document.getElementById('tipo-insumo').value = '';
    document.getElementById('cantidad').value = '';
    document.getElementById('valor').value = '';
    document.getElementById('marca').value = '';
    document.getElementById('unidad-medida').value = '';
}

// Función para validar formato de correo electrónico
function validarEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}