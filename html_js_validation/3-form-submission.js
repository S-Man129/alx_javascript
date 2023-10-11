// Add an event listener to the form
document.addEventListener("DOMContentLoaded", function () {
    var submitForm = document.getElementById("submitForm");
    submitForm.addEventListener("submit", function (event) {
        handleFormSubmit(event);
    });
});

// Function to handle form submission
function handleFormSubmit(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Retrieve form field values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    // Check if the required fields are filled
    if (name.trim() === "" || email.trim() === "") {
        // Display an error message
        document.getElementById("error").textContent = "Please fill in all required fields.";
        document.getElementById("success").textContent = ""; // Clear success message
    } else {
        // Clear the error message
        document.getElementById("error").textContent = "";

        // Display a success message
        document.getElementById("success").textContent = "Form submitted successfully!";
    }
}
