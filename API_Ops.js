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

const userInstance = new User();