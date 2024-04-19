// Variables para identificar el estado actual (inicio de sesión o registro)
let modoRegistro = false;

// Cambiar el modo entre inicio de sesión y registro
function cambiarModo() {
    modoRegistro = !modoRegistro;
    const submitBtn = document.getElementById("submit-btn");
    const accionBtn = document.getElementById("accion-btn");
    const form = document.getElementById("login-registro-form");
    const correoLabel = document.querySelector("label[for='correo']");
    const passwordLabel = document.querySelector("label[for='password']");
    if (modoRegistro) {
        submitBtn.textContent = "Registrarse";
        accionBtn.textContent = "Iniciar Sesión";
        correoLabel.textContent = "Correo electrónico:";
        passwordLabel.textContent = "Contraseña:";
    } else {
        submitBtn.textContent = "Iniciar Sesión";
        accionBtn.textContent = "Registrarse";
        correoLabel.textContent = "Dirección de correo electrónico:";
        passwordLabel.textContent = "Contraseña:";
    }
    form.reset(); // Reiniciar el formulario
}

// Mostrar el formulario de viaje y souvenir después de iniciar sesión correctamente
function mostrarFormularios() {
    document.getElementById("formulario").style.display = "none";
    document.getElementById("reto1-form").style.display = "block";
    document.getElementById("souvenir-form").style.display = "block";
}

// Función para verificar si un correo ya está registrado
async function verificarCorreoRegistrado(correo) {
    try {
        const response = await fetch(`http://localhost:4000/usuarios?correo=${correo}password=${password}`);
        const data = await response.json();
        return data.length > 0;
    } catch (error) {
        alert("Error al verificar el correo registrado:", error);
        return false;
    }
}

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Agregar listeners después de que el DOM esté cargado
    document.getElementById("accion-btn").addEventListener("click", cambiarModo);

    document.getElementById("login-registro-form").addEventListener("submit", async function(event) {
        event.preventDefault();
        const correoElement = document.getElementById("corre");
        const passwordElement = document.getElementById("password");
        
        // Verificar si los elementos del formulario existen
        if (correoElement && passwordElement) {
            const correo = correoElement.value.trim();
            const password = passwordElement.value;
            
            // Verificar si se han proporcionado valores para correo y contraseña
            if (correo !== "" && password !== "") {
                if (modoRegistro) {
                    // Registro
                    // Verificar si el correo ya está registrado
                    const correoRegistrado = await verificarCorreoRegistrado(correo);
                    if (correoRegistrado) {
                        alert("El correo ya está registrado");
                        return;
                    }
                    // Si el correo no está registrado, realizar el registro
                    fetch("http://localhost:4000/usuarios", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            correo: correo,
                            password: password
                        })
                    })
                    .then(response => response.json())
                    .then(data => {
                        console.log("Registro exitoso:", data);
                        mostrarFormularios(); // Mostrar los formularios después de registrarse
                    })
                    .catch(error => console.error("Error:", error));
                } else {
                    // Inicio de sesión
                    fetch(`http://localhost:4000/usuarios?correo=${correo}&password=${password}`)
                    .then(response => response.json())
                    .then(data => {
                        if (data.length > 0) {
                            // console.log("Inicio de sesión exitoso:", data[0]);
                            mostrarFormularios(); // Mostrar los formularios después de iniciar sesión
                        } else {
                            alert("Correo o contraseña incorrectos");
                        }
                    })
                    .catch(error => console.error("Error:", error));
                }
            } else {
                console.log("Por favor, completa todos los campos.");
            }
        } else {
            console.log("No se encontraron elementos del formulario.");
        }
    });
});

