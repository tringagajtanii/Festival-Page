CREATE DATABASE prifest_db;
USE prifest_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin','user') DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    subject VARCHAR(150) NOT NULL,
    message TEXT NOT NULL,
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE tickets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ticket_name VARCHAR(50) NOT NULL,
    price DECIMAL(6,2) NOT NULL
);

INSERT INTO tickets (ticket_name, price) VALUES
('Day Pass', 25.00),
('Weekend Pass', 60.00),
('VIP', 120.00);

CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    ticket_id INT NOT NULL,
    quantity INT NOT NULL,
    total_price DECIMAL(8,2) NOT NULL,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (ticket_id) REFERENCES tickets(id)
);

