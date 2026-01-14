document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".main-nav");

  if (!hamburger || !nav) {
    console.error("Hamburger or nav not found");
    return;
  }

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
    hamburger.classList.toggle("active");
  });
});