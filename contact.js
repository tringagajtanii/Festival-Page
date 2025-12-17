const form = document.querySelector(".contact-form");
function validateField(field) {
    const errorEl = field.closest(".form-group").querySelector(".error-message");  

  if (!field.validity.valid) {
    let message = "This field is required";

    if (field.type === "email" && field.value !=="") {
      message = "Please enter a valid email address";
    }

    errorEl.textContent = message;
    errorEl.style.display = "inline";
    return false;
  }

  errorEl.textContent = "";
  errorEl.style.display = "none";
  return true;
}

form.querySelectorAll("input, textarea").forEach((field) => {
  field.addEventListener("blur", () => {
    validateField(field);
  });
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isValid = true;
  const fields = form.querySelectorAll("input, textarea");

  fields.forEach((field) => {
    const fieldValid = validateField(field);
    if (!fieldValid) {
      isValid = false;
    }
  });

  if (isValid) {
    alert("Message sent successfully!");
    form.reset();
  } else {
    form.querySelector(":invalid").focus();
  }
});