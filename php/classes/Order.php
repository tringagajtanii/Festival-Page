<?php
require_once "Database.php";

class Order {

    public static function create($user_id, $ticket_id, $quantity, $total) {
        $db = Database::connect();
        $stmt = $db->prepare(
            "INSERT INTO orders (user_id, ticket_id, quantity, total_price)
             VALUES (?, ?, ?, ?)"
        );
        return $stmt->execute([$user_id, $ticket_id, $quantity, $total]);
    }
}
