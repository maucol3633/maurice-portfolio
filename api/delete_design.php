<?php

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");


include "db.php";


$sql = "SELECT * FROM design_images ORDER BY id DESC";


$result = $conn->query($sql);


if(!$result){

    die("SQL ERROR: ".$conn->error);

}


$designs=[];


while($row=$result->fetch_assoc()){

    $designs[]=$row;

}


echo json_encode($designs);

$id=$_POST['id'];


$conn->query(
"DELETE FROM images WHERE id=$id"
);


echo json_encode([
"success"=>true,
"message"=>"Deleted"
]);


?>