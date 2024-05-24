document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var message = document.getElementById('message');
    
    // Simple email validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        message.textContent = 'Please enter a valid email address.';
        message.style.color = 'red';
        return;
    }
    
    // Dummy login check
    if (email === "user@example.com" && password === "password") {
        message.textContent = 'Login successful!';
        message.style.color = 'green';
    } else {
        message.textContent = 'Invalid email or password.';
        message.style.color = 'red';
    }
});
