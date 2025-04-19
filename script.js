// Toggle hidden text
const magicButton = document.getElementById("magicButton");
const magicText = document.getElementById("magicText");

magicButton.addEventListener("click", () => {
  magicText.classList.toggle("hidden");

  if (magicText.classList.contains("hidden")) {
    magicButton.textContent = "Click me";
  } else {
    magicButton.textContent = "Hide me";
  }
});

// Form validation
const form = document.getElementById("cuteForm");
const email = document.getElementById("email");
const username = document.getElementById("username");
const errorMessage = document.getElementById("errorMessage");
const usernameError = document.getElementById("usernameError");

// Real-time username feedback
username.addEventListener("input", () => {
  if (username.value.length < 5) {
    usernameError.textContent = "Username must be at least 5 characters.";
  } else {
    usernameError.textContent = "";
  }
});

// Form submission validation
form.addEventListener("submit", (e) => {
  errorMessage.textContent = "";

  if (!email.value || !username.value) {
    e.preventDefault();
    errorMessage.textContent = "Please fill in all fields!";
    return;
  }
  if (!email.value.includes("@")) {
    e.preventDefault();
    errorMessage.textContent = "Please enter a valid email address.";
  }

  if (username.value.length < 5) {
    e.preventDefault();
    usernameError.textContent = "Username must be at least 5 characters.";
  }
});
