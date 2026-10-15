function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please enter username and password");
        return;
    }

    let user = {
        username: username,
        loginTime: new Date().toLocaleString()
    };

    localStorage.setItem("user", JSON.stringify(user));
    sessionStorage.setItem("loggedIn", "true");

    showDashboard();
}

function showDashboard() {
    let userData = localStorage.getItem("user");
    let loggedIn = sessionStorage.getItem("loggedIn");

    if (userData && loggedIn === "true") {
        let user = JSON.parse(userData);

        document.getElementById("displayUsername").textContent = user.username;

        document.getElementById("loginPage").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
    }
}

function logout() {
    localStorage.removeItem("user");
    sessionStorage.removeItem("loggedIn");

    document.getElementById("dashboard").style.display = "none";
    document.getElementById("loginPage").style.display = "block";

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";

    alert("Logged out successfully");
}

window.onload = function() {
    showDashboard();
};