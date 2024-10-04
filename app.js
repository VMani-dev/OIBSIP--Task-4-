function register() {
    const username = document.getElementById("regUsername").value;
    const password = document.getElementById("regPassword").value;

    if (username && password) {
        if (localStorage.getItem(username)) {
            document.getElementById("message").innerHTML = "User already exists. Try logging in.";
        } else {
            localStorage.setItem(username, password); 
            document.getElementById("message").innerHTML = "User registered successfully!";
        }
    } else {
        document.getElementById("message").innerHTML = "Please fill in both fields.";
    }
}

function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    const storedPassword = localStorage.getItem(username);

    if (storedPassword) {
        if (storedPassword === password) {
            localStorage.setItem("loggedInUser", username);
            window.location.href = "secure.html"; 
        } else {
            document.getElementById("message").innerHTML = "Incorrect password.";
        }
    } else {
        document.getElementById("message").innerHTML = "User does not exist. Please register.";
    }
}