<?php
require_once "Database.php";

class User {

    public static function create($first,$last,$email,$password) {
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            die("Invalid email");
        }
        if (strlen($password) < 8) {
            die("Weak password");
        }

        $db = Database::connect();
        $hash = password_hash($password, PASSWORD_DEFAULT);

        $stmt = $db->prepare(
            "INSERT INTO users (first_name,last_name,email,password_hash)
             VALUES (?,?,?,?)"
        );
        return $stmt->execute([$first,$last,$email,$hash]);
    }

    public static function findByEmail($email) {
        $db = Database::connect();
        $stmt = $db->prepare("SELECT * FROM users WHERE email=?");
        $stmt->execute([$email]);
        return $stmt->fetch();
    }

    public static function all() {
        return Database::connect()
            ->query("SELECT id,first_name,last_name,email,role FROM users")
            ->fetchAll();
    }
}
?>