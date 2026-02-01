<?php
require_once "Database.php";

class Contact {

    public static function save($name,$email,$subject,$message) {
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            die("Invalid email");
        }

        $db = Database::connect();
        $stmt = $db->prepare(
            "INSERT INTO contacts (full_name,email,subject,message)
             VALUES (?,?,?,?)"
        );
        return $stmt->execute([$name,$email,$subject,$message]);
    }

    public static function all() {
        return Database::connect()
            ->query("SELECT * FROM contacts ORDER BY sent_at DESC")
            ->fetchAll();
    }
}
?>