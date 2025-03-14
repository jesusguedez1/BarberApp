window.addEventListener('load', function() {
    let form = document.querySelector('form');
    let gmail = document.querySelector('#email');
    let password = document.querySelector('#contraseña');

    function data(){
        let datos = new FormData();
        datos.append('email', gmail.value);
        datos.append('password', password.value);

        fetch('/BarberApp/back/controladores.php', {
            method: 'POST', 
            body: datos
        })
        .then(response => response.json()) 
        
        .then(datoss => {
            if (datoss.success) {
                console.log(datoss);
                window.location.href = "http://localhost:8012/BarberApp/front/index.html";
            }
            else {
                console.log("Usuario o contraseña incorrectos");
            }
        })
        .catch(error => console.error("Error en el fetch:", error));
    }   
    

    form.addEventListener('submit', function(e){
        e.preventDefault();
        data();
    });
});