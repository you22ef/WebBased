
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="../Assets/bootstrap.min.css">
    <link rel="stylesheet" href="NavBar/navbar.css">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
      integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
</head>

<body>
    <?php include 'NavBar/NavBar.php'; ?>
    <?php include 'DB_Ops.php'; ?>
    <?php include 'Upload.php'; ?>
    <form method="POST" id = "myForm" enctype="multipart/form-data">
        <div class="container mt-5">
            <div class="me-3 row">
                <div class="col-lg-12 mt-3 ">
                    <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                    <input type="text" name="full_name" class="form-control" id="exampleFormControlInput1"  required>
                </div>
                <div class="col-lg-12 mt-3">
                    <label for="exampleFormControlInput1" class="form-label">User Name</label>
                    <input type="text" name="user_name" class="form-control"id="Username" required>
                    <p style="color: red;" class="mt-2" id="alert"></p>
                </div>
                <div class="col-lg-12 mt-3">
                    <label for="exampleFormControlInput1" class="form-label">Phone</label>
                    <input type="text" name="phone" class="form-control" id="exampleFormControlInput1" required>
                    <p style="color: red;" class="mt-2" id="Phone"></p>
                </div>
                <div class="col-lg-11 mt-3">
                    <label for="exampleFormControlInput1"  class="form-label">WhatsApp Number</label>
                    <input type="text" name="whatsapp" class="form-control" id="whatsappNumber" required>
                    <p style="color: red;" class="mt-2" id="whatsapp"></p>
                </div>
                <div class="col-lg-1 mt-5">
                    <button type="button" id="Check" class="btn btn-warning w-100">Check</button>
                </div>
                <div class="col-lg-12 mt-3">
                    <label for="exampleFormControlInput1" class="form-label">Address</label>
                    <input type="text" name="address" class="form-control" id="exampleFormControlInput1" required>
                    <p style="color: red;" class="mt-2" id="Adress"></p>
                </div>
                <div class="col-lg-12 mt-3">
                    <label for="exampleFormControlInput1" class="form-label">Password</label>
                    <input type="password" name="password" class="form-control" onkeyup ="userInstance.ValidatePassword(this.value)"  id="Password" aria-describedby="passwordHelpBlock" required>
                    <p style="color: red;" class="mt-2" id="PasswordAlert"></p>
                </div>
                <div class="col-lg-12 mt-3">
                    <label for="exampleFormControlInput1" class="form-label">Confirm Password</label>
                    <input type="password" class="form-control" onkeyup="userInstance.checkPassword(this.value)" id="Confirm" aria-describedby="passwordHelpBlock" required>
                    <p style="color: red;" class="mt-2" id="Confirmation"></p>
                </div>
                <div class="col-lg-12 mt-3">
                    <label for="formFile" class="form-label">User Image</label>
                    <input class="form-control" name ="image" type="file" id="formFile" required>
                    <p style="color: red;" class="mt-2" id="File"></p>
                </div>
                <div class="col-lg-12 mt-3">
                    <label for="exampleFormControlInput1"  class="form-label">Email</label>
                    <input type="email" name="email" class="form-control" id="Email" required>
                    <p style="color: red;" class="mt-2" id="Emailalert"></p>
                </div>
                <div class="col-lg-12  mb-5  mt-5">
                    <button type="submit" id="submitting" class="btn btn-primary">Submit</button>
                </div>
                
            </div>
        </div>
    
    </form>
    

    <?php include 'Footer/Footer.php'; ?>
    <script src="API_Ops.js"></script>
</body>
</html>