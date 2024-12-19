function validarFormulario() {
    let esValido = true;

    // Obtener los elementos
    const usuario = document.getElementById('usuario');
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const correo = document.getElementById('correo');
    const contrasena = document.getElementById('contrasena');
    const empresa = document.getElementById('contrasena');
    const telefono = document.getElementById('telefono');

    // Obtener los elementos de error
    const errorUsuario = document.getElementById('error-usuario');
    const errorNombre = document.getElementById('error-nombre');
    const errorApellido = document.getElementById('error-apellido');
    const errorCorreo = document.getElementById('error-correo');
    const errorContrasena = document.getElementById('error-contrasena');
    const errorEmpresa = document.getElementById('error-contrasena');
    const errorTelefono = document.getElementById('error-telefono');

    // Limpiar los mensajes de error previos
    errorUsuario.textContent = '';
    errorNombre.textContent = '';
    errorApellido.textContent = '';
    errorCorreo.textContent = '';
    errorContrasena.textContent = '';
    errorEmpresa.textContent = '';
    errorTelefono.textContent = '';

    // Validar el campo usuario
    if (usuario.value.trim() === '') {
        errorUsuario.textContent = 'El usuario es obligatorio.';
        esValido = false;
    }

    // Validar el campo nombre
    if (nombre.value.trim() === '') {
        errorNombre.textContent = 'El nombre es obligatorio.';
        esValido = false;
    }

    // Validar el campo apellido
    if (apellido.value.trim() === '') {
        errorApellido.textContent = 'El apellido es obligatorio.';
        esValido = false;
    }

    // Validar el correo
    const regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regexCorreo.test(correo.value)) {
        errorCorreo.textContent = 'Por favor, ingresa un correo válido.';
        esValido = false;
    }

    // Validar la contraseña
    if (contrasena.value.length < 6) {
        errorContrasena.textContent = 'La contraseña debe tener al menos 6 caracteres.';
        esValido = false;
    }
    
    // Validar el teléfono
    const regexTelefono = /^\d{10}$/; // Asumimos que el teléfono tiene 10 dígitos (ajustar según el formato local)
    if (!regexTelefono.test(telefono.value)) {
        errorTelefono.textContent = 'Por favor, ingresa un teléfono válido (10 dígitos).';
        esValido = false;
    }

    return esValido; // Si alguna validación falla, se previene el envío del formulario
}


    