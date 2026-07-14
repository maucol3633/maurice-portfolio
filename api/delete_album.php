<?php

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

header("Content-Type: application/json");

include "db.php";


if(isset($_POST["id"])){

    $id = $_POST["id"];


    // Delete images connected to album
    $deleteImages = $conn->prepare(
        "DELETE FROM design_images WHERE album_id=?"
    );

    $deleteImages->bind_param(
        "i",
        $id
    );

    $deleteImages->execute();



    // Delete album
    $deleteAlbum = $conn->prepare(
        "DELETE FROM albums WHERE id=?"
    );


    $deleteAlbum->bind_param(
        "i",
        $id
    );


    if($deleteAlbum->execute()){

        echo json_encode([
            "success"=>true,
            "message"=>"Album deleted successfully"
        ]);

    }
    else{

        echo json_encode([
            "success"=>false,
            "message"=>"Failed to delete album"
        ]);

    }


}
else{

    echo json_encode([
        "success"=>false,
        "message"=>"No album ID received"
    ]);

}

?>