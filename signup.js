const form = document.querySelector(".signup-form");
const inputs = form.querySelectorAll("input");
let accounts = JSON.parse(localStorage.getItem("accounts")) || [];

function showError(input, message) {
  const errorEl = input.closest(".form-group").querySelector(".error-message");
  errorEl.textContent = message;
  errorEl.style.display = "block";
}

function clearError(input) {
  const errorEl = input.closest(".form-group").querySelector(".error-message");
  errorEl.textContent = "";
  errorEl.style.display = "none";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;

  const firstName = inputs[0];
  const lastName = inputs[1];
  const email = inputs[2];
  const password = inputs[3];
  const confirmPassword = inputs[4];

  inputs.forEach(clearError);

  if (!firstName.value.trim()) {
    showError(firstName, "This field is required");
    isValid = false;
  }

  if (!lastName.value.trim()) {
    showError(lastName, "This field is required");
    isValid = false;
  }

  if (!email.value.trim()) {
    showError(email, "This field is required");
    isValid = false;
  } else if (!email.validity.valid) {
    showError(email, "Please enter a valid email address");
    isValid = false;
  } else if (accounts.some(acc => acc.email === email.value.trim())) {
    showError(email, "An account with this email already exists");
    isValid = false;
  }

  const passwordValue = password.value.trim();

  if (!passwordValue) {
    showError(password, "This field is required");
    isValid = false;
  } else if (passwordValue.length < 8) {
    showError(password, "Password must be at least 8 characters long");
    isValid = false;
  } else if (!/[A-Z]/.test(passwordValue)) {
    showError(password, "Password must contain at least one uppercase letter");
    isValid = false;
  } else if (!/[0-9]/.test(passwordValue)) {
    showError(password, "Password must contain at least one number");
    isValid = false;
  } else if (!/[!@#$%^&*(),.?\":{}|<>]/.test(passwordValue)) {
    showError(password, "Password must contain at least one special character");
    isValid = false;
  }

  if (confirmPassword.value !== passwordValue) {
    showError(confirmPassword, "Passwords do not match");
    isValid = false;
  }

  if (!isValid) return;

  accounts.push({
    email: email.value.trim(),
    password: passwordValue
  });

  localStorage.setItem("accounts", JSON.stringify(accounts));

  alert("Form is valid ");
    form.reset();
  }
);