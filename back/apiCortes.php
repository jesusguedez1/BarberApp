<?php
header("Content-Type: application/json");


echo json_encode([
    "status" => "debug",
    "GET" => $_GET,
    "POST" => $_POST,
    "REQUEST" => $_REQUEST
], JSON_PRETTY_PRINT);
?>