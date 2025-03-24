document.addEventListener("DOMContentLoaded", () => {
    const obtenerDatosVenta = () => {
        let ventas = localStorage.getItem("ventasGuardadas");
        return ventas ? JSON.parse(ventas) : [];
    };

    const guardarDatosVenta = (nuevaVenta) => {
        let ventas = obtenerDatosVenta();
        ventas.push(nuevaVenta);
        localStorage.setItem("ventasGuardadas", JSON.stringify(ventas));
    };

    const mostrarResumen = () => {
        let ventas = obtenerDatosVenta();
        let totalList = document.querySelector(".resumenDeVenta");

        if (!totalList) return;

        totalList.innerHTML = "";

        ventas.forEach(datos => {
            let createList = document.createElement("li");
            createList.classList.add("venta-item");
            createList.textContent = `Cliente: ${datos.ncliente} - Barbero: ${datos.nbarber} - Servicio: ${datos.corte} - Precio: $${datos.precio} - Tipo de Pago: ${datos.tPago}`;
        
            let createButton = document.createElement("button");
            createButton.textContent = "Eliminar";
            createButton.classList.add("eliminarBtn");
        
            createList.appendChild(createButton); 
            totalList.appendChild(createList);
        });
    };

    mostrarResumen();

    const nuevaVenta = JSON.parse(localStorage.getItem("ventaActual"));
    if (nuevaVenta) {
        guardarDatosVenta(nuevaVenta);
        mostrarResumen();
        localStorage.removeItem("ventaActual");
    }
});
