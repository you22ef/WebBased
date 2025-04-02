class User {

    constructor() {
        this.button = document.getElementById("submit");
    }


    checkUser(username) {
        if(username == "") 
        {
            document.getElementById("alert").innerText = "";
            this.checkInputs();
            return;
        }
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => { 
            if (xhr.readyState == 4 && xhr.status == 200) {
                if (xhr.responseText == "1") {
                    document.getElementById("alert").innerText = "Username already exists";
                } else {
                    document.getElementById("alert").innerText = "";
                }
                this.checkInputs(); 
            }
        };
        
        xhr.open("GET", "DB_Ops.php?username=" + username, true);
        xhr.send();
        
    }
    
    async validateWhatsAppNumber(number) {

        const response = await fetch('http://api/whatsapp-number-validator/rltsvuouydi1', {
            method: 'POST',
            headers: {
                'X-Luckdata-Api-Key': '191b7ab91276e4832792f627a222c3a1',
            },
            body: JSON.stringify({ "phone_number": number })
        });
        const data = await response.json();
        console.log(data);

    }
    
    
    // Example usage
    
    
    checkPassword(Confirm)
    {
        if(Confirm == "") 
        {
            document.getElementById("Confirmation").innerText = "";
            this.checkInputs();
            return;
        }
        let password = document.getElementById("Password");
        let alert = document.getElementById("Confirmation");
        if(password.value != Confirm)
        {
            alert.innerText = "Passwords do not match";
            
        }
        else
        {
            alert.innerText = "";
    
        }
        this.checkInputs();
    }
    ValidatePassword(Password)
    {
        const passwordRegex = /^(?=.*\d)(?=.*[\W_]).{8,}$/;
        if(Password == "") 
        {
            document.getElementById("PasswordAlert").innerText = "";
            this.checkInputs();
            return;
        }
        let alert = document.getElementById("PasswordAlert");
        if(passwordRegex.test(Password))
        {
            alert.innerText = "";
    
        }
        else
        {
            alert.innerText = "Must be at least 8 characters, include 1 number and 1 special character.";
            
        }
        this.checkInputs();
    }
    checkInputs() {
        let usernameError = document.getElementById("alert").innerText;
        // let whatsappError = document.getElementById("whatsapp").innerText;
        let passwordError = document.getElementById("PasswordAlert").innerText;
        let confirmError = document.getElementById("Confirmation").innerText;
        console.log("hiii");
        console.log(usernameError);
        if (usernameError  || passwordError || confirmError ) {
            this.button.classList.add("disabled");
        } else {
            this.button.classList.remove("disabled");
        }
    }
}



const userInstance = new User();