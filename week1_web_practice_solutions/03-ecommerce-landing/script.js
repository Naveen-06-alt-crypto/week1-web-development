const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
}));
document.querySelectorAll(".product button").forEach(button => {
  button.addEventListener("click", () => {
    button.textContent = "Added!";
    setTimeout(() => button.textContent = "Add to Cart", 1000);
  });
});
