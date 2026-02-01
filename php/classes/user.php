<?php
echo"THIS USER FILE IS LOADED";
exit;
require_once "Database.php";

class User {

    public static function create($firstName, $lastName, $email, $password)
{
    $pdo = Database::connect();

    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    $stmt = $pdo->prepare(
        "INSERT INTO users (first_name, last_name, email, password)
         VALUES (?, ?, ?, ?)"
    );

    return $stmt->execute([
        $firstName,
        $lastName,
        $email,
        $hashedPassword
    ]);
}
}
?>