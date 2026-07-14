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

header("Content-Type: application/json");


if ($_SERVER["REQUEST_METHOD"] === "POST") {


    $name = $_POST["name"];
    $description = $_POST["description"] ?? "";


    if(empty($name)){

        echo json_encode([
            "success" => false,
            "message" => "Album name is required"
        ]);

        exit;

    }


    $sql = "INSERT INTO albums (name, description)
            VALUES (?, ?)";


    $stmt = $conn->prepare($sql);


    $stmt->bind_param(
        "ss",
        $name,
        $description
    );


    if($stmt->execute()){


        echo json_encode([
            "success" => true,
            "message" => "Album created successfully"
        ]);


    } else {


        echo json_encode([
            "success" => false,
            "message" => "Failed to create album"
        ]);

    }


}

?>