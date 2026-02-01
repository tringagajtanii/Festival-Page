<?php
session_start();
require "classes/Ticket.php";
require "classes/Order.php";

if (!isset($_SESSION["user_id"])) {
    die("Please sign in first");
}

$data = json_decode(file_get_contents("php://input"), true);

foreach ($data as $item) {
    $ticket = Ticket::findByName($item["name"]);

    if ($ticket) {
        Order::create(
            $_SESSION["user_id"],
            $ticket["id"],
            1,
            $ticket["price"]
        );
    }
}

echo "OK";
?>