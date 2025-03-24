<?php
    require_once "configuraciones.php";
    $db = "SELECT * FROM serviciocortes";

    $result = $conexion -> query($db);

    $data = [];

    if($result -> num_rows > 0 ){
        while($fila = $result -> fetch_assoc()){
         
         $data [] = $fila;
    }}
    
    echo json_encode($data, JSON_UNESCAPED_UNICODE);

?>