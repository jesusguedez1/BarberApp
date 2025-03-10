<?php

    $server = "localhost";
    $user = "root";
    $password = "";
    $db = "login";
    $port = ini_get(8012);

    $conexion = new mysqli($server, $user, $password, $db, $port);
?>