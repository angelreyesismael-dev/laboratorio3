console.log("Fit Gym cargado.");

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}

const formulario = document.querySelector("form");

if (formulario) {
  formulario.addEventListener("submit", () => {
    alert("¡Mensaje enviado correctamente!");
  });
}