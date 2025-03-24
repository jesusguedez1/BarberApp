<?php

$validTokens = ["12345abcd"]; 
$headers = getallheaders();
if (!isset($headers["Authorization"])) {
    http_response_code(403);
    echo json_encode(["error" => "Acceso denegado"]);
    exit;
}
$token = str_replace("Bearer ", "", $headers["Authorization"]);
if (!in_array($token, $validTokens)) {
    http_response_code(403);
    echo json_encode(["error" => "Token no válido"]);
    exit;
}
$input = json_decode(file_get_contents("php://input"), true);

echo json_encode(["success" => "Datos recibidos", "data" => $input]);
?>