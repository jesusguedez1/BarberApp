window.addEventListener('load', function() {
    let form = document.querySelector('form');
    let usuario = document.querySelector('#email');
    let password = document.querySelector('#contraseña');

    function data(){
        let datos = new FormData();
        datos.append('usuario', usuario.value);
        datos.append('password', password.value);

        fetch('/BarberApp/back/controladores.php', {
            method: 'POST', 
            body: datos
        })
        .then(response => response.text()) 
        .then(text => {
            console.log("Respuesta del servidor:", text); 
            return text ? JSON.parse(text) : {}; 
        })
        .then(datoss => {
            if (datoss.success) {
                window.location.href = "http://localhost:8012/BarberApp/front/index.html";
            }
            else {
                alert("Usuario o contraseña incorrectos");
            }
        })
        .catch(error => console.error("Error en el fetch:", error));
    }

    form.addEventListener('submit', function(e){
        e.preventDefault();
        data();
    });
});