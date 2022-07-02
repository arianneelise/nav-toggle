const menu = document.querySelector("ul");
const hamburger = document.querySelector(".fa-bars");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
  hamburger.classList.toggle("fa-bars");
  hamburger.classList.toggle("fa-xmark");
});
