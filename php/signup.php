<?php
require "config.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $first = trim($_POST["first_name"]);
    $last  = trim($_POST["last_name"]);
    $email = trim($_POST["email"]);
    $pass  = $_POST["password"];
    $confirm = $_POST["confirm_password"];

    if ($pass !== $confirm) {
        die("Passwords do not match");
    }

    $hash = password_hash($pass, PASSWORD_DEFAULT);
    $stmt = $pdo->prepare(
        "INSERT INTO users (first_name, last_name, email, password_hash)
         VALUES (?, ?, ?, ?)"
    );

    $stmt->execute([$first, $last, $email, $hash]);
    header("Location: ../signin.html");
    exit;
}
?>