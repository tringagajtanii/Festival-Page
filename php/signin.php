<?php
session_start();
require "config.php";
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $email = trim($_POST["email"]);
    $pass  = $_POST["password"];

    $stmt = $pdo->prepare(
        "SELECT * FROM users WHERE email = ?"
    );
    $stmt->execute([$email]);
    $user = $stmt->fetch();
    if ($user && password_verify($pass, $user["password"])) {
    $_SESSION["user_id"] = $user["id"];
    $_SESSION["role"] = $user["role"];

    if ($user["role"] === "admin") {
        header("Location: ../admin/dashboard.php");
    } else {
        header("Location: ../main.html");
    }
    exit;
    }else {
        die("Invalid email or password");
    }
}
?>