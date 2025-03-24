<?php
require_once "configuraciones.php";

$instruccion = $conexion ->prepare("INSERT INTO serviciocortes(id,nombre,precio,descripcion,servicio) VALUE(NULL,?,?,?,?) ");

$instruccion -> bind_param("sdss", $nombre, $precio, $descripcion, $servicio);

$nombre = "Corte clasico";
$precio = 15.00;
$descripcion = "Corte de pelo clasico, con maquina, tijera y navajas";
$servicio = "Hojilla nuevas, cuellera de barberia, loción";
$instruccion -> execute();

$nombre = "Corte degradado";
$precio = 20.00;
$descripcion = "Corte de pelo con degradados, con maquina, tijera y navajas";
$servicio = "Hojilla nuevas, cuellera de barberia, loción";
$instruccion -> execute();

$nombre = "Barba";
$precio = 10.00;
$descripcion = "Corte de barba con maquina, tijera y navajas";
$servicio = "Hojilla nuevas, loción";
$instruccion -> execute();

$nombre = "Corte de niños";
$precio = 15.00;
$descripcion = "Corte de pelo para niños, con maquina, tijera y navajas";
$servicio = "Hojilla nuevas, cuellera de barberia, loción o talco";
$instruccion -> execute();

$nombre = "Corte clasico mas barba";
$precio = 25.00;
$descripcion = "Corte de pelo clasico, con maquina, tijera y navajas";
$servicio = "Hojilla nuevas, cuellera de barberia, loción";
$instruccion -> execute();

$nombre = "Corte degradado mas barba";
$precio = 30.00;
$descripcion = "Corte de pelo con degradados, con maquina, tijsera y navajas";
$servicio = "Hojilla nuevas, cuellera de barberia, loción";
$instruccion -> execute();

$nombre = "Trenzas";
$precio = 80.00;
$descripcion = "Trenzas para hombres";
$servicio = "Ligas de cabello, limpieza de patillas y posterior, gel, locion";
$instruccion -> execute();

$nombre = "Tinte y teñido mas corte";
$precio = 150.00;
$descripcion = "Tinte y teñido de cabello mas corte";
$servicio = "Hojilla nuevas, cuellera de barberia, loción, decoloración, tinte, mallas de cabello, shampoo, acondicionador, ampolla de cuidado";
$instruccion -> execute();

$nombre = "Diseño de dibujos";
$precio = 50.00;
$descripcion = "Corte degradado con diseños personalizados";
$servicio = "Hojilla nuevas, cuellera de barberia, locion";
$instruccion -> execute();

$conexion -> close();

?>