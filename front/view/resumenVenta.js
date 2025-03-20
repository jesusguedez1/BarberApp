fetch('http://localhost:8012/BarberApp/back/apiCortes.php')
.then(respuesta => respuesta.json())
.then(datos => console.log(datos))