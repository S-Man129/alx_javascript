document.addEventListener("DOMContentLoaded", function () {
    var passwordForm = document.getElementById("passwordForm");
    var errorElement = document.getElementById("error");

    passwordForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Retrieve the password input value
        var passwordInput = document.getElementById("password");
        var password = passwordInput.value;

        // Call the validatePassword function to check password strength
        if (validatePassword(password)) {
            errorElement.textContent = "";
            passwordForm.submit();
        } else {
            errorElement.textContent = "Password does not meet the criteria.";
        }
    });

    function validatePassword(password) {
        // Define the password criteria
        var lengthRegex = /.{8,}/;
        var uppercaseRegex = /[A-Z]/;
        var lowercaseRegex = /[a-z]/;
        var digitRegex = /\d/;
        var specialCharRegex = /[!@#$%^&*]/;

        // Check if the password meets all criteria
        return (
            lengthRegex.test(password) &&
            uppercaseRegex.test(password) &&
            lowercaseRegex.test(password) &&
            digitRegex.test(password) &&
            specialCharRegex.test(password)
        );
    }
});
