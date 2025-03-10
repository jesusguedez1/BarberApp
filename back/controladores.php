<?php
header("Content-Type: application/json");
require_once "configuraciones.php";

$response = ["error" => true, "message" => "Error desconocido"];

if(isset($_POST['usuario']) && isset($_POST['password'])) {  
    $usuario = $_POST['usuario'];
    $password = $_POST['password'];

    $query = $conexion -> prepare("SELECT * FROM `loginusers` WHERE email = ?");
    $query -> bind_param('s', $usuario);
    $query -> execute();
    $resultado = $query -> get_result();

    if($resultado -> num_rows == 1) {  
        $fila = $resultado -> fetch_assoc();
        if(password_verify($password, $fila['password'])) {  
            $response = ["success" => true, "message" => "Inicio exitoso"];
        } else {
            echo($response);
            $response["message"] = "Contraseña incorrecta";
        }  
    } else {
        $response["message"] = "Usuario no encontrado";
    }
}

echo json_encode($response);
exit;

?>