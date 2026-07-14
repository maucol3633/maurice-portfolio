<?php

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");


$conn = new mysqli(
    "localhost",
    "root",
    "",
    "maurice_portfolio"
);


if($conn->connect_error){

    die("Database connection failed");

}

$host = "localhost";
$user = "root";
$password = "";
$database = "maurice_portfolio";


$conn = new mysqli(
    $host,
    $user,
    $password,
    $database
);


if ($conn->connect_error) {

    die("Database connection failed: " . $conn->connect_error);

}


$conn->set_charset("utf8mb4");

?>