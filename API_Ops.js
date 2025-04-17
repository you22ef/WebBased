class User {

    constructor() {
        this.button = document.getElementById("submitting");
    }


    check(data, field, callback) {
        if (data == "") {
            document.getElementById("alert").innerText = "";
            return false;
        }
    
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => { 
            if (xhr.readyState == 4 && xhr.status == 200) {
                if (xhr.responseText == "1") {
                    if(field == "username")
                    {
                        document.getElementById("alert").innerText = "Username '" + data + "' already exists";
                    }
                    else if(field == "email")
                    {
                        document.getElementById("Emailalert").innerText = "Email '" + data + "' already exists";
                    }
                    callback(false);
                } else {
                    if(field == "username")
                    {
                        document.getElementById("alert").innerText = "";
                    }
                    else if(field == "email")
                    {
                        document.getElementById("Emailalert").innerText = "";
                    }
                    callback(true);
                }
            }
        };
    
        xhr.open("GET", "DB_Ops.php?" + field + "=" + data, true);
        xhr.send();
    }
    
    
    async validateWhatsAppNumber(number) 
    {
        number = String(number);
        if(number == "") 
        {
            document.getElementById("whatsapp").innerText = "";
            this.checkInputs();
            return false;
        }
        const url = 'https://whatsapp-number-validator3.p.rapidapi.com/WhatsappNumberHasItWithToken';
        const options = {
            method: 'POST',
            headers: {
                'x-rapidapi-key': 'd92e305f3emsh1d7d5ae73f847cap1086d5jsn40e66925b762',
                'x-rapidapi-host': 'whatsapp-number-validator3.p.rapidapi.com',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                phone_number: number,
            })
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result.status);
            console.log(number);
            if(result.status =="valid")
            {
                document.getElementById("whatsapp").innerText = "";
                return true;
            }
            else
            {
                document.getElementById("whatsapp").innerText = "Invalid WhatsApp number";
                return false
            }
        } catch (error) {
            console.error(error);
        }
    
        this.checkInputs();
    return true;
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
        let passwordError = document.getElementById("PasswordAlert").innerText;
        let confirmError = document.getElementById("Confirmation").innerText;
        let password = document.getElementById("Password").value;
        let confirm = document.getElementById("Confirm").value;
        if(password == confirm)
        {
            this.button.classList.remove("disabled");
        }
        else if (passwordError || confirmError ) {
            this.button.classList.add("disabled");
        } else {
            this.button.classList.remove("disabled");
        }
    }
}
const userInstance = new User();

document.getElementById("Check").addEventListener("click", async function(event) 
{
    let whatsapp = document.getElementById("whatsappNumber").value;
    const isValidWhatsApp = await userInstance.validateWhatsAppNumber(whatsapp);
});

document.getElementById("myForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent default form submission

    let whatsapp = document.getElementById("whatsappNumber").value;
    let username = document.getElementById("Username").value;
    let email = document.getElementById("Email").value;

    // Validate WhatsApp number asynchronously
    const isValidWhatsApp = await userInstance.validateWhatsAppNumber(whatsapp);

    // Check username, email, and WhatsApp asynchronously
    userInstance.check(username, 'username', (isValidUsername) => {
        if (!isValidUsername) {
            console.log("Username is invalid");
            return;
        }

        userInstance.check(email, 'email', (isValidEmail) => {
            if (!isValidEmail) {
                console.log("Email is invalid");
                return;
            }

            // Check WhatsApp number validity
            if (!isValidWhatsApp) {
                console.log("WhatsApp number is invalid");
                return;
            }

            // If all validations pass, submit the form
            console.log("Valid inputs");
            document.getElementById("myForm").submit(); // Submit the form manually
        });
    });
});



