const comandas = document.querySelector('.comanda');
let formu = document.querySelector('#formServicios');

const cerrarPopup = () => {   
    comandas.style.transform = 'scale(0)';
    document.querySelector("#servicio").innerHTML = '';   
    document.querySelector("#precio").innerHTML = '';
    document.querySelector("#descripcion").innerHTML = '';
    document.querySelector("#incluye").innerHTML = '';
    formu.reset();
};

let botonEnviar = document.querySelector('.btnEviar');
botonEnviar.addEventListener('click', (e) => {  
    e.preventDefault();

    let nombreCliente = document.querySelector('#nombreCliente')?.value 
    let nombreBarbero = document.querySelector('#nombreBarber')?.value 
    let tipoDePago = document.querySelector('#TipoPago')?.value 

    let serv = document.querySelector("#servicio")?.textContent.trim()  
    let price = document.querySelector("#precio")?.textContent.trim() 

    let url = `http://localhost:8012/BarberApp/back/apiCortes.php?corte=${encodeURIComponent(serv)}&nbarber=${encodeURIComponent(nombreBarbero)}&ncliente=${encodeURIComponent(nombreCliente)}&tPago=${encodeURIComponent(tipoDePago)}&precio=${encodeURIComponent(price)}`;
    
    console.log("la url es:" , url);

    console.log("Enviando datos a la API con GET:", url);
    
    fetch(url, {
        method: "GET",
    })
    .then(resp => resp.json())
    .then(datoss => console.log(datoss))
    .catch(error => console.log(error));

    let check = document.querySelector('.aprobado');
    check.style.transform = "scale(1)"
    setTimeout(()=> {
        check.style.transform = "scale(0)";
        comandas.style.transform = 'scale(0)';
        cerrarPopup();
    }, 1500);
});


const card = document.querySelectorAll('.card');
fetch("../JSON/servicioDeCortes.json")
.then(response => response.json())
.then(data => {
    card.forEach(e => {
        let funcionCard = function (event) { 
            comandas.style.transform = 'scale(1)';

            let cardElement = event.target.closest('.card'); 
            let datos = cardElement.dataset.id;

            document.querySelector("#servicio").innerHTML = data.servicioDeCortes[datos - 1].nombre;    
            document.querySelector("#precio").innerHTML = data.servicioDeCortes[datos - 1].precio;
            document.querySelector("#descripcion").innerHTML = data.servicioDeCortes[datos - 1].descripcion;
            document.querySelector("#incluye").innerHTML = data.servicioDeCortes[datos - 1].servicio;
        };

        e.addEventListener('click', funcionCard); 
    });

    const closepButton = document.querySelector('.closepContainer h1');
    closepButton.addEventListener('click', cerrarPopup);
});

