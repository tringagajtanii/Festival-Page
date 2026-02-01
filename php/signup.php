<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
require "classes/User.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    if ($_POST["password"] !== $_POST["confirm_password"]) {
        die("Passwords do not match");
    }

    User::create(
    $_POST["first_name"],
    $_POST["last_name"],
    $_POST["email"],
    $_POST["password"]
);
    header("Location: ../signin.html");
    exit;
}
?>
