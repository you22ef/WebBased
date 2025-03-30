
<?php
class Uploading
{
    private $conn; 
    public function __construct() {
        $host = "localhost";  // Database host
        $username = "root";  // Database username
        $password = "";  // Database password
        $dbname = "user_registration";  // Database name

        $this->conn = new mysqli($host, $username, $password,$dbname);
    }
    public function UploadImage()
    {
        $file_name = $_FILES['image']['name'];
        $tempname = $_FILES['image']['tmp_name'];
        $folder = 'Images/'.$file_name;
        echo $file_name;
        $sql = "
            INSERT INTO users (full_name, user_name, phone, whatsapp, address, password, email, user_image)
            VALUES (
                'yousse', 
                'youssef1', 
                '01126847652', 
                '01126847652', 
                'saftt', 
                '1234', 
                'yousseff@gmail.com', 
                '$file_name'
            )
        ";
        $query = mysqli_query($this->conn, $sql);
    
        if(move_uploaded_file($tempname, $folder)) {
            
            echo "<h2>File uploaded successfully</h2>";
        } else {
            echo "<h2>File uploaded successfully</h2>";
        }
        
    }

    function getResult()
    {
        $res = mysqli_query($this->conn, "select user_image from users");
        return $res;
    }

}

const ImageInstance = new Uploading();
if(isset($_POST['submit'])) 
{
    echo "Hello";
    ImageInstance->UploadImage();
            
}
$res = ImageInstance->getResult();

?>
