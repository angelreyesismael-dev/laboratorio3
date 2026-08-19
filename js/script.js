<<<<<<< HEAD
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
=======
console.log("Fit Wear cargado correctamente.");

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

// Alternar menú hamburguesa en dispositivos móviles
if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}

// Confirmación de envío del formulario de contacto
const formulario = document.querySelector("form");

if (formulario) {
  formulario.addEventListener("submit", () => {
    alert("¡Gracias por contactar a Fit Wear! Hemos recibido tu mensaje.");
  });
>>>>>>> 9f89062c1d4d05153fd321d85ec7bc462136397a
}