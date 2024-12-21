document.getElementById("registrationForm").addEventListener("submit", function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Get form values
    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Clear previous error messages
    document.getElementById("fullnameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    let valid = true;

    // Validate Full Name
    if (fullname === "") {
        document.getElementById("fullnameError").textContent = "Full Name is required.";
        valid = false;
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email.";
        valid = false;
    }

    // Validate Password
    if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters long.";
        valid = false;
    }

    // Submit the form if valid
    if (valid) {
        alert("Registration successful!");
        // Here you can send data to the server or redirect the user
        document.getElementById("registrationForm").reset(); // Reset the form after successful registration
    }
});
