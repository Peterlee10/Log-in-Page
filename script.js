document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); //prevent from submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    //Clear previous error messages

    document.getElementById('usernameError').textContent = '';

    document.getElementById('passwordError').textContent = '';
    message.textContent = '';

    //Simple validation
    if (username.length < 3) {

        document.getElementById('usernameError').textContent = 'Username must be at least 3 characters long.';
        return;
    }
    if (password.length < 6) {

        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
        return;
    }

    //Simulating successful login (you can replace this with actual login logic)
    message.textContent = 'Login successful! Welcome, ' + username + '!';
    message.style.color = '#4CAF50'; // Green color for success message
});