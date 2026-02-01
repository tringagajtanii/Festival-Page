<?php

class Database
{
    private static $host = "localhost";
    private static $db   = "prifest_db";
    private static $user = "root";
    private static $pass = "";
    private static $conn = null;

    private function __construct() {}

    public static function connect()
    {
        if (self::$conn === null) {
            try {
                self::$conn = new PDO(
                    "mysql:host=" . self::$host . ";dbname=" . self::$db . ";charset=utf8",
                    self::$user,
                    self::$pass,
                    [
                        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
                    ]
                );
            } catch (PDOException $e) {
                die("Database connection failed");
            }
        }

        return self::$conn;
    }
}
?>