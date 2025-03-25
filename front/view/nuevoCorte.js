document.addEventListener("DOMContentLoaded", () => {
    const comandas = document.querySelector('.comanda');
    const formu = document.querySelector('#formServicios');
    const botonEnviar = document.querySelector('.btnEviar');
    const check = document.querySelector('.aprobado');

    const cerrarPopup = () => {   
        comandas.style.transform = 'scale(0)';
        document.querySelector("#servicio").textContent = '';   
        document.querySelector("#precio").textContent = '';
        document.querySelector("#descripcion").textContent = '';
        document.querySelector("#incluye").textContent = '';
        formu.reset();
    };

    document.querySelector('.closepContainer h1').addEventListener('click', cerrarPopup);

    botonEnviar.addEventListener('click', (e) => {  
        e.preventDefault();

        let nombreCliente = document.querySelector('#nombreCliente')?.value.trim();
        let nombreBarbero = document.querySelector('#nombreBarber')?.value;
        let tipoDePago = document.querySelector('#TipoPago')?.value;
        let serv = document.querySelector("#servicio")?.textContent.trim();
        let price = document.querySelector("#precio")?.textContent.trim();

        if (!nombreCliente || !nombreBarbero || !tipoDePago || !serv || !price) {
            console.error("Faltan datos por completar.");
            return;
        }

        const dataFinal = {
            corte: serv,
            nbarber: nombreBarbero,
            ncliente: nombreCliente,
            tPago: tipoDePago,
            precio: price,
        };

        localStorage.setItem("ventaActual", JSON.stringify(dataFinal));

        const script = document.createElement("script");
        script.src = "./resumenVenta.js";
        document.body.appendChild(script);

        check.style.transform = "scale(1)";
        setTimeout(() => {
            check.style.transform = "scale(0)";
            cerrarPopup();
        }, 1500);
    });

    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', function () {
            let id = this.dataset.id; 

            fetch(`http://localhost:8012/BarberApp/back/getServicios.php?id=${id}`)
                .then(response => response.json())
                .then(data => {
                    if (data.error) {
                        console.error("Error:", data.error);
                        return;
                    }

                    document.querySelector("#servicio").textContent = data.nombre;
                    document.querySelector("#precio").textContent = data.precio;
                    document.querySelector("#descripcion").textContent = data.descripcion;
                    document.querySelector("#incluye").textContent = data.servicio;

                    comandas.style.transform = 'scale(1)';
                })
                .catch(error => console.error("Error al obtener datos:", error));
        });
    });
});
