class User {
    checkUser(username) {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                
                if(this.responseText == 1) 
                {
                    document.getElementById("response").innerText = "Username already exists";
                }
                else
                {
                    document.getElementById("response").innerText = "";
                }
            }
        };
        xhr.open("GET", "DB_Ops.php?username=" + username, true);
        xhr.send();
    }
}

async function validateWhatsAppNumber() {
    const number = document.getElementById('whatsappNumber').value.trim();
    if (!number) {
        alert('Please enter a WhatsApp number');
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
        
        if (data.valid) {
            alert('The WhatsApp number is valid!');
        } else {
            alert('The WhatsApp number is NOT valid.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to validate the number. Please try again later.');
    }
}

const userInstance = new User();