class User {

    constructor() {
        this.button = document.getElementById("submitting");
    }


    checkUser(username,callback) {
        if(username == "") 
        {
            document.getElementById("alert").innerText = "";
            return false;
        }
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => { 
            if (xhr.readyState == 4 && xhr.status == 200) {
                if (xhr.responseText == "1") {
                    document.getElementById("alert").innerText = "Username already exists";
                    callback(false);
                } else {
                    document.getElementById("alert").innerText = "";
                    callback(true);
                }
            }
        };
        
        xhr.open("GET", "DB_Ops.php?username=" + username, true);
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


document.getElementById("myForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    let whatsapp = document.getElementById("whatsappNumber").value;
    let username = document.getElementById("Username").value;

    const isValidWhatsApp = await userInstance.validateWhatsAppNumber(whatsapp);
    userInstance.checkUser(username, function(isValidUser) {
        console.log(isValidUser + " " + isValidWhatsApp);

        if (!isValidWhatsApp || !isValidUser) {
            console.log("Invalid inputs");
            return;
        } else {
            console.log("Valid inputs");
            document.getElementById("myForm").submit(); 
        }
    });
});



