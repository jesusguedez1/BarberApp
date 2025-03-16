const comandas = document.querySelector('.comanda');
const closepButton = document.querySelector('.closepContainer h1')
.addEventListener('click', () => {
    comandas.style.transform = 'scale(0)';
})
const card = document.querySelectorAll('.card')
card.forEach( e => {
    e.addEventListener('click', () => {
        comandas.style.transform = 'scale(1)';
    })
});