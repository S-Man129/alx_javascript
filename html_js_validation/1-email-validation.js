document.addEventListener("DOMContentLoaded", function () {
    // Retrieve the form and error elements
    var emailForm = document.getElementById("emailForm");
    var errorElement = document.getElementById("error");

    // Add a submit event listener to the form
    emailForm.addEventListener("submit", function (event) {
        event.preventDefault();

        var emailInput = document.getElementById("email");
        var email = emailInput.value;

        if (validateEmail(email)) {
            errorElement.textContent = "";
            emailForm.submit();
        } else {
            errorElement.textContent = "Please enter a valid email address.";
        }
    });

    function validateEmail(email) {
        // Define a regular expression to match the standard email format
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        // Check if the email matches the regular expression
        return emailRegex.test(email);
    }
});
