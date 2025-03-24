<?php
    require_once "configuraciones.php";

    if (isset($_GET['id'])) {
        $id = intval($_GET['id']); 

        $query = "SELECT * FROM serviciocortes WHERE id = $id";
        $result = $conexion->query($query);

        if ($result->num_rows > 0) {
            echo json_encode($result->fetch_assoc(), JSON_UNESCAPED_UNICODE);
        } else {
            echo json_encode(["error" => "No se encontraron datos"]);
        }
    } else {
        echo json_encode(["error" => "ID no proporcionado"]);
    }
?>