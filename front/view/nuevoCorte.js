const comandas = document.querySelector('.comanda');
let formu = document.querySelector('#formServicios')

const card = document.querySelectorAll('.card')
fetch("../JSON/servicioDeCortes.json")
.then(response => response.json())
.then(data => {
    card.forEach( e => {
        e.addEventListener('click', (event) => {
            comandas.style.transform = 'scale(1)';
    
            let cardElement = event.target.closest('.card'); 
            let datos = cardElement.dataset.id
            const serv = document.querySelector("#servicio").innerHTML += data.servicioDeCortes[datos - 1].nombre    
            const price = document.querySelector("#precio").innerHTML += data.servicioDeCortes[datos - 1].precio
            const desc = document.querySelector("#descripcion").innerHTML += data.servicioDeCortes[datos - 1].descripcion
            const includ = document.querySelector("#incluye").innerHTML += data.servicioDeCortes[datos - 1].servicio
            data.servicioDeCortes[datos - 1]
        })
    })
    const closepButton = document.querySelector('.closepContainer h1')
    .addEventListener('click', () => {   
    comandas.style.transform = 'scale(0)';
    const serv = document.querySelector("#servicio").innerHTML = '';   
    const price = document.querySelector("#precio").innerHTML = '';
    const desc = document.querySelector("#descripcion").innerHTML = '';
    const includ = document.querySelector("#incluye").innerHTML = '';
    formu.reset()
    
})
  })


