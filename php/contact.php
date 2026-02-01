<?php
require "classes/Contact.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    Contact::save(
        $_POST["full_name"],
        $_POST["email"],
        $_POST["subject"],
        $_POST["message"]
    );
    header("Location: ../contact.html?sent=1");
    exit;
}
?>