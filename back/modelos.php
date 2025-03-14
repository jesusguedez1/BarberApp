<?php 
    require_once "configuraciones.php";

    
    $email = "Admin@gmail.com";
    $password = "admin";
    $name = "Admin";

    $pswHash = password_hash($password, PASSWORD_DEFAULT);

    $sql = $conexion -> prepare("INSERT INTO loginusers (email, password, name) VALUES (?, ?, ?)");
    $sql -> bind_param("sss", $email, $pswHash, $name);
    if($sql -> execute()){
        echo "Usuario registrado";
    }else{
        echo "Error al registrar usuario";
    }
    
?>