<?php
header("Content-Type: application/json"); 
$opciones = array("ssl"=>array("verify_peer"=>false,"verify_peer_name"=>false));
$dataJson = file_get_contents("php://input",false,stream_context_create($opciones));
$objResp = json_decode($dataJson, true);

$resFront = json_encode($objResp);

echo $resFront;



?>