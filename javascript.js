const toggleButton = document.querySelector(".toggle-button")
const navbarLinks = document.querySelector(".navbar-links")

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active")
    
})

const btn = document.querySelector(".btn-toggle");

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  document.getElementById("aboutus").style.backgroundColor = "#222";
  document.getElementById("fishing2").style.backgroundColor = "#222";
  document.getElementById("ourphotos").style.backgroundColor = "#222";
  document.getElementById("foot").style.backgroundColor = "black"
});

