// script.js
function verificarCredenciales() {
    // Obtener los valores de nombre de usuario y contraseña
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Verificar si el nombre de usuario y la contraseña son correctos
    if (username === 'pepito' && password === 'pepito') {
        mostrarMensajeBienvenida(username); // Mostrar mensaje de bienvenida
    } else {
        alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.'); // Mostrar mensaje de error
    }
}

function mostrarMensajeBienvenida(username) {
    // Actualizar el contenido y el estilo del cuerpo de la página
    var contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '<h1><span style="color: black;">Welcome:</span> <span style="color: blue;">' + username + '</span><button onclick="cerrarSesion()" style="float: right;">Logout</button></h1>';
    contentDiv.style.backgroundColor = 'white';
}

function cerrarSesion() {
    alert('Sesión cerrada');
}
