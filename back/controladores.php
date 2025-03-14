<?php

header("Content-Type: application/json");
session_start();
require_once "configuraciones.php";
$response = ["error" => true, "message" => "Error desconocido"];
if(isset($_POST['email']) && isset($_POST['password'])) {  
    $usuario = $_POST['email'];
    $password = $_POST['password'];

    $query = $conexion -> prepare("SELECT * FROM `loginusers` WHERE email = ?");
    $query -> bind_param('s', $usuario); 
    $query -> execute();
    $resultado = $query -> get_result();


    if($resultado -> num_rows == 1) { 
        $fila = $resultado -> fetch_assoc();

        if(password_verify($password, $fila['password'])) { 
            $_SESSION['user_id'] = $fila['id']; 
            $_SESSION['user_email'] = $fila['email'];
            $_SESSION['user_name'] = $fila['name'];
            
            $response = [
                "success" => true, 
                "message" => "Inicio exitoso",
                "name" => $fila['name']
            ];
            
        } else {
            $response["message"] = "Contraseña incorrecta";
        }  
    } else {
        $response["message"] = "Usuario no encontrado";
    }

}

echo json_encode($response);


    exit;

?>