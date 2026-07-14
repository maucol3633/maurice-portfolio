<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Content-Type: application/json");

include "db.php";

$sql = "SELECT * FROM albums ORDER BY id DESC";
$result = $conn->query($sql);
$albums = [];

while($row = $result->fetch_assoc()){
    $albums[] = $row;
}

echo json_encode($albums);
?>