// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get the form and error message elements
  const form = document.getElementById("giveAwayForm");
  const errorMessage = document.getElementById("error-message");
  const emailInput = document.getElementById("currentOwnerEmail");

  // Regular expression for email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Submit event listener
  form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting immediately

      // Clear any previous error messages
      errorMessage.style.display = "none";

      // Validate email
      const emailValue = emailInput.value.trim();

      if (emailValue === "") {
          // If email is empty, show error
          errorMessage.textContent = "Email field cannot be empty.";
          errorMessage.style.display = "block";
      } else if (!emailRegex.test(emailValue)) {
          // If email is invalid, show error message
          errorMessage.textContent = "Please enter a valid email address.";
          errorMessage.style.display = "block";
      } else {
          // If email is valid, simulate form submission (you can replace this with actual submission code)
          alert("Form submitted successfully!");
          // Uncomment below line to allow actual form submission
          // form.submit();
      }
  });

  // Clear button functionality
  const clearButton = document.querySelector('button[type="clear"]');
  clearButton.addEventListener("click", function () {
      form.reset(); // Reset the form inputs
      errorMessage.style.display = "none"; // Hide error message on clear
  });
});