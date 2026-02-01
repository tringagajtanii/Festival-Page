const form = document.querySelector(".signup-form");
const inputs = form.querySelectorAll("input");

form.addEventListener("submit", (e) => {
  let isValid = true;

  const firstName = inputs[0];
  const lastName = inputs[1];
  const email = inputs[2];
  const password = inputs[3];
  const confirmPassword = inputs[4];

  form.querySelectorAll(".error-message").forEach(el => el.style.display = "none");

  if (!firstName.value.trim()) isValid = false;
  if (!lastName.value.trim()) isValid = false;
  if (!email.value.trim()) isValid = false;
  if (password.value.length < 8) isValid = false;
  if (password.value !== confirmPassword.value) isValid = false;

  if (!isValid) {
    e.preventDefault(); 
    return;
  }

});
