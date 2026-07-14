<?php

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Content-Type: application/json");

include "db.php";


$sql = "

SELECT

albums.id AS album_id,
albums.name AS album_name,
albums.description AS album_description,

design_images.id AS image_id,
design_images.image_name,
design_images.title,
design_images.description

FROM albums
LEFT JOIN design_images
ON albums.id = design_images.album_id
ORDER BY albums.id DESC
";

$result = $conn->query($sql);

$albums = [];

while($row = $result->fetch_assoc()){
    $albumId = $row['album_id'];
    if(!isset($albums[$albumId])){
        $albums[$albumId] = [
            "id"=>$albumId,
            "name"=>$row['album_name'],
            "description"=>$row['album_description'],
            "images"=>[]
        ];
    }

    if($row['image_id']){
        $albums[$albumId]["images"][] = [
            "id"=>$row['image_id'],
            "image_name"=>$row['image_name'],
            "title"=>$row['title'],
            "description"=>$row['description']
        ];
    }
}

echo json_encode(array_values($albums));

?>