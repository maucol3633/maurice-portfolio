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


if(isset($_FILES["image"])) {


    $album_id = $_POST["album_id"];
    $title = $_POST["title"];
    $description = $_POST["description"];


    $imageName = time() . "_" . basename($_FILES["image"]["name"]);


    $target = "../uploads/designs/" . $imageName;


    if(move_uploaded_file($_FILES["image"]["tmp_name"], $target)){


        $sql = "
        INSERT INTO design_images
        (album_id,image_name,title,description)
        VALUES (?,?,?,?)
        ";


        $stmt = $conn->prepare($sql);


        $stmt->bind_param(
            "isss",
            $album_id,
            $imageName,
            $title,
            $description
        );


        if($stmt->execute()){


            echo json_encode([
                "success"=>true,
                "message"=>"Image uploaded"
            ]);


        }


    }


}

?>