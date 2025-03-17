let cerrarSesion = document.querySelector(".cerrarSecionBtn");

cerrarSesion.addEventListener("click", function() {
    fetch("../back/logout.php") 
        .then(() => {
            window.location.href = "http://localhost:8012/BarberApp/front/login/login.html";
        });
})

fetch("../back/verificarSecsion.php", {
})
    .then(response => response.json())
    .then(data => {        
        if (data.status !== "autenticado") {
            window.location.href = "http://localhost:8012/BarberApp/front/login/login.html";
        } 
    })
    .catch(error => console.error("Error verificando sesión:", error));