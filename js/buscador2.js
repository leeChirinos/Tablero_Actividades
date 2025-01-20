document.addEventListener("DOMContentLoaded", function () {
	const buscador = document.getElementById("buscador");
	const tabla = document.getElementById("miTabla");
	const filas = tabla

		.getElementsByTagName("tbody")[0]
		.getElementsByTagName("tr");

	// Elemento para mostrar el mensaje de "No se encontraron resultados"
	const mensajeNoResultados = document.createElement("p");
	mensajeNoResultados.textContent = "No se encontraron resultados";
	mensajeNoResultados.id = "mensaje-no-resultados"; // Asigna un ID para estilos personalizados
	mensajeNoResultados.style.display = "none";
	tabla.appendChild(mensajeNoResultados);

	buscador.addEventListener("input", function () {
		const textoBusqueda = buscador.value.toLowerCase();
		let hayResultados = false;

		for (let i = 0; i < filas.length; i++) {
			const celdas = filas[i].getElementsByTagName("td");
			let coincide = false;
			for (let j = 0; j < celdas.length; j++) {
				const contenidoCelda = celdas[j].textContent.toLowerCase();
				if (contenidoCelda.includes(textoBusqueda)) {
					coincide = true;
					break;
				}
			}
			if (coincide) {
				hayResultados = true;
			}
		}

		// Mostrar u ocultar el mensaje y las filas según haya resultados
		mensajeNoResultados.style.display = hayResultados ? "none" : "";
		for (let i = 0; i < filas.length; i++) {
			filas[i].style.display = hayResultados ? "" : "none";
		}
	});
});
