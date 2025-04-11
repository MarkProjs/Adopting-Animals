function checkUsername() {
    let username = document.getElementById("username").value;
    let userNameError = document.getElementById("usernameError");
    if (RegExp(/^[a-zA-Z0-9]+$/).test(username)) {
        userNameError.textContent = "";
        return true;
    } else {
        userNameError.textContent = "Username must contain only letters and numbers";
        return false;
    }
}

function checkPassword() {
    let password = document.getElementById("password").value;
    let passwordError = document.getElementById("passwordError");
    if (RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/).test(password)) {
        passwordError.textContent = "";
        return true;
    } else {
        passwordError.textContent = "Password must contain at least 4 characters, including at least one letter and one number";
        return false;
    }
}

function validateForm(e) {
    if (checkUsername() && checkPassword()) {
        alert ("Form submitted successfully!");
    }
    else {
        alert ("Please fill out the form correctly.");
        e.preventDefault();
    }
}

document.getElementById("createAccount").addEventListener("submit", validateForm);