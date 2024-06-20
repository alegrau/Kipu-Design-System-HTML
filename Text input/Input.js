const emailInput = document.getElementById('email');
const errorMessage = document.getElementById('error-message');

// Function to show error message and apply error styles
function showError() {
    errorMessage.style.display = 'block'; // Show the error message
    emailInput.classList.add('error'); // Apply error styles to the input
}

// Function to hide error message and remove error styles
function hideError() {
    errorMessage.style.display = 'none'; // Hide the error message
    emailInput.classList.remove('error'); // Remove error styles from the input
}

// Add event listener to the input element for input and blur events


emailInput.addEventListener('blur', function() {
    if (!emailInput.validity.valid) {
        showError(); // Show error message on blur if input is not valid
    }
});

