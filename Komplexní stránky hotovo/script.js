// Přepínání dark a light módu
const darkModeToggle = document.getElementById("toggle-dark-mode");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Formulář - kontrola shody hesel a zobrazení zprávy
const form = document.getElementById("registration-form");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const messageBox = document.getElementById("message-box");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (password1.value === password2.value) {
    messageBox.textContent = "Registrace proběhla v pořádku.";
    messageBox.className = "success";
  } else {
    messageBox.textContent = "Hesla bohužel nejsou stejná.";
    messageBox.className = "error";
  }

  messageBox.style.display = "block";
});

// Ikona zpět nahoru
const backToTopButton = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
