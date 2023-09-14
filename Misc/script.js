function validateEmail() {
    let email = document.getElementById("email").value;
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    if (emailPattern.test(email)) {
        document.getElementById("result").innerHTML = "Email-Adresse ist gültig";
    } else {
        document.getElementById("result").innerHTML = "Ungültige Email-Adresse";
    }
}