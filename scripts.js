const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

var typed = new Typed("#element", {
  strings: ["<b>UPSC</b> Aspirant", "Tech Enthusiast", "Web Developer."],
  typeSpeed: 50,
});
