const menu = document.getElementById("menu");
const navbar = document.getElementById("navbar");
const insideNav = document.getElementById("insideNav");

function ToggleHidden() {
  navbar.classList.toggle("hidden");
  menu.classList.toggle("marks");
}

function hideNavbar() {
  navbar.classList.add("hidden");
}

menu.addEventListener("click", (event) => {
  event.stopPropagation();
  ToggleHidden();
  console.log("hidden");
});

document.addEventListener("click", (event) => {
  if (!insideNav.classList.contains(event.target)) {
    hideNavbar();
  } else {
    console.log("it contains it");
  }
});

window.addEventListener("scroll", () => {
  hideNavbar();
});
