const semanasSelect = document.getElementById('semanas');
const diasSelect = document.getElementById('dias');
const agregarEstudianteButton = document.getElementById('agregarEstudiante');
const asistenciaTable = document.getElementById('asistenciaTable');
const numEstudiantes = 10;

// Generar opciones para las semanas (del 1 al 16)
for (let i = 1; i <= 16; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = `Semana ${i}`; // Corrección aquí
    semanasSelect.appendChild(option);
}

// Generar opciones para los días de la semana
const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
dias.forEach((dia, index) => {
    const option = document.createElement('option');
    option.value = index + 1; // Valor del 1 al 5
    option.textContent = dia;
    diasSelect.appendChild(option);
});

// Generar estudiantes
for (let i = 1; i <= numEstudiantes; i++) {
    const newRow = asistenciaTable.insertRow(-1);
    newRow.insertCell(0).textContent = `Estudiante ${i}`; // Corrección aquí
    for (let j = 1; j <= 6; j++) {
        const cell = newRow.insertCell(j);
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'attendance-checkbox';
        cell.appendChild(checkbox);
    }
}
