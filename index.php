
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php include 'DB_Ops.php'; ?>
    <?php include 'Upload.php'; ?>
    <form method="POST" enctype="multipart/form-data">
        <input type="text" name="UserName" onkeyup="userInstance.checkUser(this.value)">
        <p id="response"></p>
        <input type="file" name="image" >
        <label for="whatsappNumber">Enter WhatsApp Number:</label>
        <input type="text" id="whatsappNumber" placeholder="e.g., +201000000000" name="whatsappNumber" required>
        <button type="button" onclick="validateWhatsAppNumber()">Check</button>
        <!-- button -->
        <button type="submit" name="submit" >submit</button>
    </form>

    <?php
    
    while($row = mysqli_fetch_assoc($res)) 
    {
    ?>
        <img src="Images/<?php echo $row['user_image'] ?>" />
    <?php } ?>

    
    <!-- <input type="text" name="UserName" onchange="checkUser(this.value)"> -->
    <script src="API_Ops.js"></script>
</body>
</html>