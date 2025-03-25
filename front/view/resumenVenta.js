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
    
        let totalResumen = 0; 
    
        ventas.forEach((datos, index) => {
            let createList = document.createElement("li");
            createList.classList.add("venta-item");
            createList.innerHTML = `Barbero: ${datos.nbarber} <br> Cliente: ${datos.ncliente} <br> Servicio: ${datos.corte} <br> Tipo de Pago: ${datos.tPago} <br>  Precio: S/${datos.precio}`;
    
            let dineroVentas = parseFloat(datos.precio); 
            totalResumen += dineroVentas; 
    
            let createButton = document.createElement("button");
            createButton.innerHTML = '<img src="../imagenes/iconsBasura.png" alt="Eliminar">';
            createButton.classList.add("eliminarBtn");
    
            createList.appendChild(createButton);
            totalList.appendChild(createList);
            
            createButton.addEventListener("click", () => {
                let containerElm = document.querySelector(".containerEliminar");
                containerElm.style.transform = "scale(1)";
                
                let retroceder = document.querySelector(".volverAtras");
                retroceder.addEventListener("click", () => {
                    containerElm.style.transform = "scale(0)";
                });

                let eliminarServ = document.querySelector(".eliminarRegistro");
                eliminarServ.addEventListener("click", () => {
                    let ventasActualizadas = obtenerDatosVenta().filter((_, i) => i !== index);
    
                    totalResumen -= parseFloat(datos.precio);
    
                    localStorage.setItem("ventasGuardadas", JSON.stringify(ventasActualizadas));
    
                    createList.remove();
    
                    let totalElement = document.querySelector(".totalV");
                    if (totalElement) {
                        totalElement.textContent = `Total: S/${totalResumen.toFixed(2)}`;
                    }
                    containerElm.style.transform = "scale(0)";
                });
            });
        });
    
        let totalElement = document.querySelector(".totalV");
        if (totalElement) {
            totalElement.textContent = `Total: S/${totalResumen.toFixed(2)}`;
        }
    };
    
    mostrarResumen();

    const nuevaVenta = JSON.parse(localStorage.getItem("ventaActual"));
    if (nuevaVenta) {
        guardarDatosVenta(nuevaVenta);
        mostrarResumen();
        localStorage.removeItem("ventaActual");
    }
});