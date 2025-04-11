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


async function login() {
  const username = document.getElementById("userName").value;
  const password = document.getElementById("password").value;
  const response = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  });
  const data = await response.json();
  if (data.success) {
    document.getElementById("loginError").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("giveAway").style.display = "block";
    sessionStorage.setItem("username", data.username);
  } else {
    document.getElementById("loginError").textContent = data.message;
    document.getElementById("loginError").style.display = "block";
    document.getElementById("giveAway").style.display = "none";
  }
}
document.getElementById("login").addEventListener("submit", login);
document.getElementById("giveAway").style.display = "none";

async function giveAwaySubmit() {
    const petType = document.querySelector('input[name="petType"]:checked').value;
    const breed = document.getElementById("breed").value;
    const age = document.querySelector('select[name="age"]').value;
    const gender = document.querySelector('select[name="gender"]').value;
    const getAlong = document.querySelectorAll('input[name="getAlong"]:checked').map(cb => cb.value);
    const currentOwnerEmail = document.getElementById("currentOwnerEmail").value;
    const description = document.getElementById("description").value;
    const photo = document.getElementById("photo").files[0];
    const currentOwner = document.getElementById("currentOwner").value;
    const formData = new FormData();
    formData.append("petType", petType);
    formData.append("breed", breed);
    formData.append("age", age);
    formData.append("gender", gender);
    formData.append("getAlong", JSON.stringify(getAlong));
    formData.append("currentOwnerEmail", currentOwnerEmail);
    formData.append("description", description);
    formData.append("photo", photo);
    formData.append("currentOwner", currentOwner);
    const response = await fetch('/give-away', {
        method: 'POST',
        body: formData
    });
    const data = await response.json();
    alert(data.message);
}

document.getElementById("giveAwaySubmit").addEventListener("submit", giveAwaySubmit);
document.getElementById("logOut").addEventListener("click", () => {
    sessionStorage.removeItem("username");
    document.getElementById("login").style.display = "block";
    document.getElementById("giveAway").style.display = "none";
});