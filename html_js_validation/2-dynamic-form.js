var dynamicForm = document.getElementById("dynamicForm");
var inputContainer = document.getElementById("inputContainer");
var errorElement = document.getElementById("error");

// Add a change event listener to the dropdown menu
var numFieldsSelect = document.getElementById("numFields");
numFieldsSelect.addEventListener("change", function () {
    generateInputFields(numFieldsSelect.value);
});

dynamicForm.addEventListener("submit", function (event) {
    if (!validateForm()) {
        event.preventDefault();
    }
});

// Function to generate dynamic input fields
function generateInputFields(numFields) {
    inputContainer.innerHTML = "";

    for (var i = 1; i <= numFields; i++) {
        var input = document.createElement("input");
        input.type = "text";
        input.name = "field" + i;
        input.placeholder = "Field " + i;

        inputContainer.appendChild(input);
    }
}

// Function to validate the form
function validateForm() {
    var inputs = inputContainer.querySelectorAll("input");

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            // Display an error message and prevent form submission
            errorElement.textContent = "Please fill in all fields.";
            return false;
        }
    }

    errorElement.textContent = "";
    return true;
}

generateInputFields(numFieldsSelect.value);