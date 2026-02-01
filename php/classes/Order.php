<?php
require_once "Database.php";

class Order {
    public static function create($user,$ticket,$qty,$total) {
        $stmt = Database::connect()->prepare(
            "INSERT INTO orders (user_id,ticket_id,quantity,total_price)
             VALUES (?,?,?,?)"
        );
        return $stmt->execute([$user,$ticket,$qty,$total]);
    }

    public static function all() {
        return Database::connect()
            ->query("SELECT * FROM orders")
            ->fetchAll();
    }
}
?>