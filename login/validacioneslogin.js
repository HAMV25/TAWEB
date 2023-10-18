document.addEventListener("DOMContentLoaded", function () {
    // Obtener el formulario de inicio de sesión
    const formularioLogin = document.querySelector(".formulario__login");

    // Agregar un controlador de evento para el envío del formulario
    formularioLogin.addEventListener("submit", function (e) {
        e.preventDefault();

        // Obtener los valores de los campos de entrada
        const correo = document.querySelector(".formulario__login input[type='text']").value;
        const contrasena = document.querySelector(".formulario__login input[type='password']").value;

        if (correo === "" || contrasena === "") {
            alert("Por favor, complete todos los campos.");
        } else {
            if (correo === "e1313465880@live.uleam.edu.ec" && contrasena === "12345"){
// Validación exitosa, redirigir al usuario a la página de inicio
window.location.href = "../estudiante/estudiante.html";
            }else{
                if (correo === "p1313465880@live.uleam.edu.ec" && contrasena === "12345"){
                    // Validación exitosa, redirigir al usuario a la página de inicio
                    window.location.href = "../profesor/profesor.html";
                                }else{
                                    alert("El correo o la contraseña son incorrectos");
                                }
                                        }
            
        }
    });

});

