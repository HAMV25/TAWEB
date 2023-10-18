// Datos de ejemplo con 16 semanas y faltas aleatorias
const faltasPorSemana = generarDatosDeEjemplo();

document.addEventListener('DOMContentLoaded', () => {
    const menuSemanas = document.getElementById('menu-semanas');
    for (const semana in faltasPorSemana) {
        const listItem = document.createElement('li');
        listItem.textContent = semana;
        listItem.addEventListener('click', () => mostrarFaltas(semana));
        menuSemanas.appendChild(listItem);
    }

    // Mostrar las faltas de la primera semana por defecto
    const primerSemana = Object.keys(faltasPorSemana)[0];
    mostrarFaltas(primerSemana);
});

function generarDatosDeEjemplo() {
    const datos = {};
    for (let i = 1; i <= 16; i++) {
        const semana = `Semana ${i}`;
        datos[semana] = generarFaltasAleatorias();
    }
    return datos;
}

function generarFaltasAleatorias() {
    const faltasSemana = {};
    const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
    const horas = ["14:00", "15:00", "16:00", "17:00", "18:00", "19:00"];
    
    diasSemana.forEach(dia => {
        faltasSemana[dia] = {};
        horas.forEach(hora => {
            faltasSemana[dia][hora] = Math.floor(Math.random() * 2); // Faltas aleatorias de 0 a 3
        });
    });
    return faltasSemana;
}

function mostrarFaltas(semanaSeleccionada) {
    const faltasSemana = faltasPorSemana[semanaSeleccionada];
    const faltasDias = document.getElementById('faltas-dias');
    faltasDias.innerHTML = '';

    for (const dia in faltasSemana) {
        const diaElemento = document.createElement('div');
        diaElemento.className = 'dia-faltas';
        diaElemento.innerHTML = `<h3>${dia}</h3>`;

        const tabla = document.createElement('table');
        tabla.className = 'tabla-faltas';
        tabla.innerHTML = `
            <tr>
                <th>Hora</th>
                <th>Faltas</th>
            </tr>
        `;

        for (const hora in faltasSemana[dia]) {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${hora}</td>
                <td>${faltasSemana[dia][hora]}</td>
            `;
            tabla.appendChild(fila);
        }

        diaElemento.appendChild(tabla);
        faltasDias.appendChild(diaElemento);
    }
}
// ... (código previo)

function mostrarFaltas(semanaSeleccionada) {
    const faltasSemana = faltasPorSemana[semanaSeleccionada];
    const faltasDias = document.getElementById('faltas-dias');
    faltasDias.innerHTML = '';

    for (const dia in faltasSemana) {
        const diaElemento = document.createElement('div');
        diaElemento.className = 'dia-faltas';
        diaElemento.innerHTML = `<h3>${dia}</h3>`;

        const tabla = document.createElement('table');
        tabla.className = 'tabla-faltas';
        tabla.innerHTML = `
            <tr>
                <th>Hora</th>
                <th>Faltas</th>
            </tr>
        `;

        let faltasTotalesDia = 0; // Contador de faltas totales por día

        for (const hora in faltasSemana[dia]) {
            const fila = document.createElement('tr');
            const faltas = faltasSemana[dia][hora];
            fila.innerHTML = `
                <td>${hora}</td>
                <td>${faltas}</td>
            `;
            tabla.appendChild(fila);
            faltasTotalesDia += faltas;
        }

        diaElemento.appendChild(tabla);

        // Agregar el contador de faltas totales por día
        const contadorFaltasDia = document.createElement('p');
        contadorFaltasDia.className = 'contador-faltas';
        contadorFaltasDia.textContent = `Faltas totales del día: ${faltasTotalesDia}`;
        diaElemento.appendChild(contadorFaltasDia);

        faltasDias.appendChild(diaElemento);
    }

    // Calcular y mostrar el contador de faltas totales de la semana
    const faltasTotalesSemana = calcularFaltasTotalesSemana(faltasSemana);
    mostrarContadorFaltasSemana(faltasTotalesSemana);
}

function calcularFaltasTotalesSemana(faltasSemana) {
    let faltasTotales = 0;
    for (const dia in faltasSemana) {
        for (const hora in faltasSemana[dia]) {
            faltasTotales += faltasSemana[dia][hora];
        }
    }
    return faltasTotales;
}

function mostrarContadorFaltasSemana(faltasTotalesSemana) {
    const contadorFaltasSemana = document.getElementById('contador-faltas-semana');
    contadorFaltasSemana.textContent = `Faltas totales de la semana: ${faltasTotalesSemana}`;
}
