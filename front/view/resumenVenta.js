fetch('http://localhost:8012/BarberApp/back/apiCortes.php')
.then(respuesta => respuesta.json())
.then(datos => console.log(datos))
.catch(error => console.log("No llegaron los datos ", error))