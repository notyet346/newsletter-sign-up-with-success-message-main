const form = document.getElementById("newsletter-form");
const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("error-message");
const successMessage = document.getElementById("success-message");
const userEmail = document.getElementById("user-email");
const dismissBtn = document.getElementById("dismiss-btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailValue = emailInput.value.trim();

  if (!emailValue) {
    errorMessage.textContent = "Email is required";
    emailInput.classList.add("error");
    return;
  }

  if (!validateEmail(emailValue)) {
    errorMessage.textContent = "Valid email required";
    emailInput.classList.add("error");
    return;
  }

  errorMessage.textContent = "";
  emailInput.classList.remove("error");

  form.style.display = "none";
  successMessage.style.display = "flex";
  userEmail.textContent = emailValue;
});

dismissBtn.addEventListener("click", () => {
  successMessage.style.display = "none";
  form.style.display = "block";
  emailInput.value = "";
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}