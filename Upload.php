
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
        $name = $_FILES['image']['name'];
        $file_name = time() . '_' . $name;
        $tempname = $_FILES['image']['tmp_name'];
        $folder = 'Images/'.$file_name;
    
        move_uploaded_file($tempname, $folder);

        
    }

    function getResult()
    {
        $res = mysqli_query($this->conn, "select user_image from users");
        return $res;
    }

}

const ImageInstance = new Uploading();
if($_SERVER["REQUEST_METHOD"] == "POST") 
{
    ImageInstance->UploadImage();       
}


?>
