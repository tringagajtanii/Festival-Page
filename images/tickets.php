<?php
session_start();
require "classes/Ticket.php";
require "classes/Order.php";

if (!isset($_SESSION["user_id"])) {
    die("Please sign in first");
}

$ticket = Ticket::find($_POST["ticket_id"]);
$total  = $ticket["price"] * $_POST["quantity"];

Order::create(
    $_SESSION["user_id"],
    $_POST["ticket_id"],
    $_POST["quantity"],
    $total
);

header("Location: ../tickets.html?success=1");
exit;
?>