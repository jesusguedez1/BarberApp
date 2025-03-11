fetch("../back/verificarSecsion.php", {
})
    .then(response => response.json())
    .then(data => {        
        if (data.status !== "autenticado") {
            window.location.href = "../front/login/login.html";
        } 
    })
    .catch(error => console.error("Error verificando sesión:", error));