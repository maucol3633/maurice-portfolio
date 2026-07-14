<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

include "db.php";

$sql = "SELECT * FROM design_images ORDER BY id DESC";

$result = $conn->query($sql);

if(!$result){

    echo json_encode([
         "error" => $conn->error
    ]);
    exit;
}

$designs = [];

while($row = $result->fetch_assoc()){
    $designs[] = $row;
}

echo json_encode($designs);
exit;
?>