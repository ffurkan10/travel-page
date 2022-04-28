const hamburger = document.querySelector(".hamburger");
const navUL = document.querySelector(".list");
const closeMenu = document.querySelector(".close-hamburger");

hamburger.addEventListener("click", () => {
  navUL.classList.toggle("show");
  hamburger.classList.toggle("burger-click");
  closeMenu.classList.toggle("close-menu");
});

closeMenu.addEventListener("click", () => {
  navUL.classList.remove("show");
  closeMenu.classList.toggle("close-menu");
  hamburger.classList.toggle("burger-click");
});

ScrollReveal().reveal(".ani1", { delay: 250 });
ScrollReveal().reveal(".ani2", { delay: 500 });
ScrollReveal().reveal(".ani3", { delay: 750 });
ScrollReveal().reveal(".ani4", { delay: 1000 });
ScrollReveal().reveal(".ani5", { delay: 1250 });
ScrollReveal().reveal(".ani6", { delay: 1500 });
ScrollReveal().reveal(".ani7", { delay: 1750 });
ScrollReveal().reveal(".ani8", { delay: 2000 });

window.sr = ScrollReveal();

sr.reveal(".anime-left", {
  origin: "left",
  duration: 1000,
  distance: "25rem",
  delay: 300,
});
sr.reveal(".anime-right", {
  origin: "right",
  duration: 1000,
  distance: "25rem",
  delay: 500,
});
sr.reveal(".anime-top", {
  origin: "top",
  duration: 1000,
  distance: "25rem",
  delay: 300,
});
sr.reveal(".anime-bottom", {
  origin: "bottom",
  duration: 1000,
  distance: "25rem",
  delay: 300,
});
