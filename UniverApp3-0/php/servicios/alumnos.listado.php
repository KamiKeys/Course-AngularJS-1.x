<?php
error_reporting(0);

// Incluir la clase de base de datos
include_once("../classes/class.Database.php");

// Retorna un json
header('Content-Type: application/json');

$sql = "SELECT * FROM alumnos ORDER BY nombre ASC";

// En las nuevas versiones es necesario poner el getInstancia() o no funcionará
echo Database::getInstancia()->get_json_rows($sql);

?>