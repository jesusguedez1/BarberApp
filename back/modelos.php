<?php 
    require_once "configuraciones.php";

    $email = "Admin@gmail.com";
    $password = "admin";

    $pswHash = password_hash($password, PASSWORD_DEFAULT);

    $sql = $conexion -> prepare("INSERT INTO loginusers (email, password) VALUES (?, ?)");
    $sql -> bind_param("ss", $email, $pswHash);
    if($sql -> execute()){
        echo "Usuario registrado";
    }else{
        echo "Error al registrar usuario";
    }
?>