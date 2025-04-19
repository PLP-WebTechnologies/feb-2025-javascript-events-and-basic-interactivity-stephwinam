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

form.addEventListener("submit", (e) => {
  errorMessage.textContent = "";

  if (!email.value || !username.value) {
    e.preventDefault();
    errorMessage.textContent = "Please fill in all fields!";
    return;
  }

  if (username.value.length < 5) {
    e.preventDefault();
    errorMessage.textContent = "Username must be at least 5 characters.";
  }
});
