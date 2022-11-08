const toggleButton = document.querySelector(".toggle-button")
const navbarLinks = document.querySelector(".navbar-links")

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active")

})

const btn = document.querySelector(".btn-toggle");
const img = document.querySelector("#button-toggle");

// Here I am assigning some JS variable to store whether I am in dark mode.
let isThemeDark = false;

btn.addEventListener("click", function () {
  isThemeDark = !isThemeDark;
  if (isThemeDark) {
    img.src = "Photos/sun-solid.svg";
  } else {
    img.src = "Photos/moon-regular.svg";
  }
  document.body.className = isThemeDark ? "dark-theme" : "";
});
