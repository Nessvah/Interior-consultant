const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");
const hamburguerActive = document.querySelector(".hamburguer.active");

hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("active");
  navMenu.classList.toggle("active");
  document.body.classList.add("noscroll");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburguer.classList.remove("active");
    navMenu.classList.remove("active");
    document.body.classList.remove("noscroll");
  })
);

//TODO: find a way to enable scroll if user clicks on active hamburguer instead of nav-links
