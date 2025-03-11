<?php
error_reporting(0);
session_start();
header("Content-Type: application/json"); 

if (!isset($_SESSION['user_id'])) {
    echo json_encode(["status" => "no autenticado"]);
    exit();
}

echo json_encode(["status" => "autenticado"]);
exit();
?>