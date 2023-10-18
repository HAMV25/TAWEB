document.addEventListener("DOMContentLoaded", function () {
    const asistenciaForm = document.getElementById("asistencia-form");
    const listaAsistencia = document.getElementById("lista-asistencia");

    asistenciaForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombreEstudiante = document.getElementById("nombre").value;

        if (nombreEstudiante) {
            const li = document.createElement("li");
            li.textContent = nombreEstudiante;
            listaAsistencia.appendChild(li);
            document.getElementById("nombre").value = "";
        } else {
            alert("Por favor, ingresa el nombre del estudiante.");
        }
    });
});
