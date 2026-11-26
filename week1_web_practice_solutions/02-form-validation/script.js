const form = document.getElementById("registerForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  let isValid = true;

  document.querySelectorAll(".error").forEach((item) => item.textContent = "");
  document.getElementById("successMessage").textContent = "";

  if (name.length < 3) {
    document.getElementById("nameError").textContent = "Name must contain at least 3 characters.";
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Please enter a valid email address.";
    isValid = false;
  }

  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must contain at least 6 characters.";
    isValid = false;
  }

  if (isValid) {
    document.getElementById("successMessage").textContent = "Registration details are valid!";
    form.reset();
  }
});
