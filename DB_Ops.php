<?php
// Handles all database operations and creates the database and table

class DB_Ops {
    private $conn; 
    public function __construct() {
        $host = "localhost";  // Database host
        $username = "root";  // Database username
        $password = "";  // Database password
        $dbname = "user_registration";  // Database name

        $this->conn = new mysqli($host, $username, $password);

        if ($this->conn->connect_error) {
            die("Database connection failed: " . $this->conn->connect_error);
        }

        $this->conn->query("CREATE DATABASE IF NOT EXISTS $dbname");

        $this->conn->select_db($dbname);

        $this->createTable();
    }

    private function createTable() {
        $sql = "
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                full_name VARCHAR(255) NOT NULL,
                user_name VARCHAR(255) NOT NULL UNIQUE,
                phone VARCHAR(15) NOT NULL,
                whatsapp VARCHAR(15) NOT NULL,
                address TEXT NOT NULL,
                password VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                user_image VARCHAR(255) NOT NULL
            )
        ";
        $this->conn->query($sql);
    }

    public function insertUser($userData) {
        $name = $_FILES['image']['name'];
        $file_name = time() . '_' . $name;
        $sql = "
            INSERT INTO users (full_name, user_name, phone, whatsapp, address, password, email, user_image)
            VALUES (
                '{$userData['full_name']}', 
                '{$userData['user_name']}', 
                '{$userData['phone']}', 
                '{$userData['whatsapp']}', 
                '{$userData['address']}', 
                '{$userData['password']}', 
                '{$userData['email']}', 
                '{$file_name}'
            )
        ";

        return $this->conn->query($sql);
    }

    public function checkUserName($user_name)
    {
        $sql = "SELECT * FROM users WHERE user_name = '$user_name'";
        $result = $this->conn->query($sql);
        echo $result->num_rows > 0;
        
    }
    public function checkEmail($email)
    {
        $sql = "SELECT * FROM users WHERE email = '$email'";
        $result = $this->conn->query($sql);
        echo $result->num_rows > 0;
        
    }

    public function __destruct() {
        $this->conn->close();
    }
}

// $user = new DB_Ops();
// $userDta = [
//     'full_name'  => 'John Doe',
//     'user_name'  => 'johndoe123',
//     'phone'      => '1234567890',
//     'whatsapp'   => '0987654321',
//     'address'    => '123 Main Street, New York, NY',
//     'password'   => 'securepassword',
//     'email'      => 'johndoe@example.com',
//     'user_image' => 'profile_pics/johndoe.jpg' // Path to the user's image
// ];
// $user->insertUser($userDta);
$userData = new DB_Ops();
if (isset($_GET['username'])) 
{
    
    $userData->checkUserName($_GET['username']);
}
if (isset($_GET['email'])) 
{
    
    $userData->checkEmail($_GET['email']);
}

if($_SERVER["REQUEST_METHOD"] == "POST") 
{
    $userData->insertUser($_POST);
}

?>
