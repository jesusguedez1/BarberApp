const comandas = document.querySelector('.comanda');
let formu = document.querySelector('#formServicios');

let botonEnviar = document.querySelector('.btnEviar');
botonEnviar.addEventListener('click', (e) => {  
    e.preventDefault();

    let nombreCliente = document.querySelector('#nombreCliente').value;
    let nombreBarbero = document.querySelector('#nombreBarber').value;
    let tipoDePago = document.querySelector('#TipoPago').value;
    
    let serv = document.querySelector("#servicio").textContent.trim();  
    let price = document.querySelector("#precio").textContent.trim();

    const dataFinal = {
        corte: serv,
        nbarber: nombreBarbero,
        ncliente: nombreCliente,
        tPago: tipoDePago,
        precio: price,
    };
    const jsonData = JSON.stringify(dataFinal, null, 2);
    console.log("Enviando datos a la API:");
    let formData = new FormData(formu);
    
    fetch("http://localhost:8012/BarberApp/back/apiCortes.php" , {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: jsonData
    })
    .then(resp => resp.json())
    .then(datoss => console.log(datoss))
    .catch(error => console.log(error));
});

const card = document.querySelectorAll('.card');
fetch("../JSON/servicioDeCortes.json")
.then(response => response.json())
.then(data => {
    card.forEach(e => {
        e.addEventListener('click', (event) => {
            comandas.style.transform = 'scale(1)';

            let cardElement = event.target.closest('.card'); 
            let datos = cardElement.dataset.id;

            document.querySelector("#servicio").innerHTML += data.servicioDeCortes[datos - 1].nombre;    
            document.querySelector("#precio").innerHTML += data.servicioDeCortes[datos - 1].precio;
            document.querySelector("#descripcion").innerHTML += data.servicioDeCortes[datos - 1].descripcion;
            document.querySelector("#incluye").innerHTML += data.servicioDeCortes[datos - 1].servicio;
        });
    });

    const closepButton = document.querySelector('.closepContainer h1');
    closepButton.addEventListener('click', () => {   
        comandas.style.transform = 'scale(0)';
        document.querySelector("#servicio").innerHTML = '';   
        document.querySelector("#precio").innerHTML = '';
        document.querySelector("#descripcion").innerHTML = '';
        document.querySelector("#incluye").innerHTML = '';
        formu.reset();
    });
});


