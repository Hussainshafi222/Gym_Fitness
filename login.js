document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Basic authentication logic (replace with your own authentication process)
        if (username === 'user' && password === 'pass') {
            // Redirect to the gym website's dashboard or another page
            window.location.href = 'index.html';
        } else {
            errorMessage.textContent = 'Invalid username or password.';
        }
    });
});
