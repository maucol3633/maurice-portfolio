<?php

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Content-Type: application/json");

$directory = "../uploads/designs/";

$albums = [];

if (is_dir($directory)) {

    $folders = scandir($directory);

    foreach ($folders as $folder) {

        if ($folder === "." || $folder === "..") {
            continue;
        }

        $folderPath = $directory . $folder;

        if (is_dir($folderPath)) {

            $images = [];

            $files = scandir($folderPath);

            foreach ($files as $file) {

                $extension = strtolower(pathinfo($file, PATHINFO_EXTENSION));

                if (in_array($extension, ["jpg", "jpeg", "png", "gif", "webp"])) {

                    $images[] = $file;

                }

            }

            $albums[] = [
                "name" => $folder,
                "images" => $images
            ];

        }

    }

}

echo json_encode($albums);

?>