<?php
require_once "Database.php";

class Ticket {
    public static function find($id) {
        $stmt = Database::connect()
            ->prepare("SELECT * FROM tickets WHERE id=?");
        $stmt->execute([$id]);
        return $stmt->fetch();
    }
}
?>