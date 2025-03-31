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
        const url = 'https://whatsapp-number-validator3.p.rapidapi.com/WhatsappNumberHasItBulkWithToken';
        if(number == "") 
        {
            document.getElementById("whatsapp").innerText = "";
            this.checkInputs();
            return;
        }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-rapidapi-key': 'd5d5cf73d5msh07dab3eff3f0f6ep1f748ajsn4e38bde1f69f',
                'x-rapidapi-host': 'whatsapp-number-validators.p.rapidapi.com'
            },
            body: JSON.stringify({ number: number })
        };
    
        try {
            const response = await fetch('https://whatsapp-number-validators.p.rapidapi.com/v1/validate/wa_id', options);
            const data = await response.json();
            
            if (data.valid) 
            {
                document.getElementById("whatsapp").innerText = "";
                
            }
            else
            {
                document.getElementById("whatsapp").innerText = "Invalid WhatsApp number";
            }
        } catch (error) {
            console.error('Error:', error);
            // alert('Failed to validate the number. Please try again later.');
        }
        this.checkInputs();
    }
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
        let whatsappError = document.getElementById("whatsapp").innerText;
        let passwordError = document.getElementById("PasswordAlert").innerText;
        let confirmError = document.getElementById("Confirmation").innerText;
        console.log("hiii");
        console.log(usernameError);
        if (usernameError || whatsappError || passwordError || confirmError ) {
            this.button.classList.add("disabled");
        } else {
            this.button.classList.remove("disabled");
        }
    }
}



const userInstance = new User();