document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const fullname = document.getElementById('fullname').value;
        const email = document.getElementById('email').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Basic registration logic (replace with your own registration process)
        // Here, we'll simply display a success message
        if (fullname && email && username && password) {
            successMessage.textContent = 'Registration successful!';
            errorMessage.textContent = '';
            
            window.location.href = 'index.html';
        } else {
            errorMessage.textContent = 'Please fill in all fields.';
            successMessage.textContent = '';
        }
    });
});
