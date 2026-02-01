<?php
session_start();
require "../php/classes/User.php";
require "../php/classes/Contact.php";
require "../php/classes/Order.php";

if ($_SESSION["role"] !== "admin") die("Access denied");

$users    = User::all();
$contacts = Contact::all();
$orders   = Order::all();
?>

<h1>Admin Dashboard</h1>

<h2>Users</h2>
<?php foreach ($users as $u): ?>
  <?= $u["email"] ?> (<?= $u["role"] ?>)<br>
<?php endforeach; ?>

<h2>Contacts</h2>
<?php foreach ($contacts as $c): ?>
  <b><?= $c["full_name"] ?></b>: <?= $c["subject"] ?><br>
<?php endforeach; ?>

<h2>Orders</h2>
<?php foreach ($orders as $o): ?>
  User <?= $o["user_id"] ?> – €<?= $o["total_price"] ?><br>
<?php endforeach; 
?>