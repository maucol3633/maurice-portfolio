<?php

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

header("Content-Type: application/json");

include "db.php";


if(isset($_POST["id"])){

    $id = $_POST["id"];


    // Get image filename first
    $find = $conn->prepare(
        "SELECT image_name FROM design_images WHERE id=?"
    );

    $find->bind_param("i",$id);
    $find->execute();

    $result = $find->get_result();

    $image = $result->fetch_assoc();



    // Delete database record
    $delete = $conn->prepare(
        "DELETE FROM design_images WHERE id=?"
    );

    $delete->bind_param(
        "i",
        $id
    );


    if($delete->execute()){


        // Delete actual image file
        if($image){

            $file = "../uploads/designs/".$image["image_name"];

            if(file_exists($file)){
                unlink($file);
            }

        }


        echo json_encode([
            "success"=>true,
            "message"=>"Image deleted successfully"
        ]);


    } else {


        echo json_encode([
            "success"=>false,
            "message"=>"Delete failed"
        ]);

    }


}
else{


    echo json_encode([
        "success"=>false,
        "message"=>"No image ID received"
    ]);


}


exit;

?>