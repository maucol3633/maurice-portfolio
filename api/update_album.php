<?php

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

header("Content-Type: application/json");

include "db.php";


$response = [];


if(isset($_POST["id"])){

    $id = $_POST["id"];
    $name = $_POST["name"];
    $description = $_POST["description"];


    $stmt = $conn->prepare(
        "UPDATE albums 
         SET name=?, description=? 
         WHERE id=?"
    );


    $stmt->bind_param(
        "ssi",
        $name,
        $description,
        $id
    );


    if($stmt->execute()){

        $response = [
            "success"=>true,
            "message"=>"Album updated successfully"
        ];

    } else {

        $response = [
            "success"=>false,
            "message"=>"Update failed"
        ];

    }


} else {

    $response = [
        "success"=>false,
        "message"=>"Missing album ID"
    ];

}


echo json_encode($response);

exit;

?>