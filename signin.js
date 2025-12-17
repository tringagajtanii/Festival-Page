const form = document.querySelector(".signin-form");
const emailInput = form.querySelector('input[type="email"]');
const passwordInput = form.querySelector('input[type="password"]');
const togglePassword = document.querySelector(".toggle-password");

let attempts = 0;
const MAX_ATTEMPTS = 3;

const accounts = [
  { email: "user1@example.com", password: "password123" },
  { email: "admin@prifest.com", password: "admin123" }
];

togglePassword.addEventListener("click", () => {
  const isHidden = passwordInput.type === "password";
  passwordInput.type = isHidden ? "text" : "password";
  togglePassword.textContent = isHidden ? "Hide" : "Show";
});

function validateField(field){
  const errorEl = field.closest(".form-group").querySelector(".error-message");
  const value = field.value.trim();

  if (!value) {
    errorEl.textContent = "This field is required";
    errorEl.style.display = "block";
    return false;
  }

  if (field.type === "email") {
    if (!field.validity.valid) {
      errorEl.textContent = "Please enter a valid email address";
      errorEl.style.display = "block";
      return false;
    }
  }

  if (field.type === "password") {
    if (value.length < 6) {
      errorEl.textContent = "Password must be at least 6 characters long";
      errorEl.style.display = "block";
      return false;
    }
    if (!/[A-Z]/.test(value)) {
      errorEl.textContent = "Password must contain at least one uppercase letter";
      errorEl.style.display = "block";
      return false;
    }
    if (!/[a-z]/.test(value)) {
      errorEl.textContent = "Password must contain at least one lowercase letter";
      errorEl.style.display = "block";
      return false;
    }
    if (!/[0-9]/.test(value)) {
      errorEl.textContent = "Password must contain at least one number";
      errorEl.style.display = "block";
      return false;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
      errorEl.textContent = "Password must contain at least one special character";
      errorEl.style.display = "block";
      return false;
    }
  }
  errorEl.textContent = "";
  errorEl.style.display = "none";
  return true;
}

form.querySelectorAll("input").forEach((field) => {
  field.addEventListener("blur", () => validateField(field));
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;

  const emailValid = validateField(emailInput);
  const passwordValid = validateField(passwordInput);
  
  if (!validateField(emailInput) || !validateField(passwordInput)) return;

  const account = accounts.find(acc => acc.email === emailInput.value.trim());
    if (!account) {
    emailError.textContent = "No account found with this email";
    emailError.style.display = "block";
    return;
  }

  if (account.password !== passwordInput.value.trim()) {
    attempts++;
    passwordError.textContent = "Incorrect password";
    passwordError.style.display = "block";

    if (attempts >= MAX_ATTEMPTS) {
      passwordError.textContent = "Too many attempts. Try again later.";
      form.querySelector("button").disabled = true;
    }
    return;
  }

  alert("Signed in successfully!");
  attempts = 0;
  form.reset();
});