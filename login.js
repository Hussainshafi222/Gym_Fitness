document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("login-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // You can implement actual authentication logic here
        if (username === "yourusername" && password === "yourpassword") {
            alert("Login successful!");
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});
