const toggleButton = document.querySelector(".toggle-button")
const navbarLinks = document.querySelector(".navbar-links")

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active")
    
})

const btn = document.querySelector(".btn-toggle");
const img = document.querySelector("#button-toggle");

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  document.getElementById("aboutus").style.backgroundColor = "#222";
  document.getElementById("fishing2").style.backgroundColor = "#222";
  document.getElementById("ourphotos").style.backgroundColor = "#222";
  document.getElementById("foot").style.backgroundColor = "black"

  
    if (img.src.match("Photos/moon-regular.svg")) {
        img.src = "Photos/icons8-sun-30.png";
    }
        else {
            img.src = "Photos/moon-regular.svg";
        }

        document.body.classList.toggle("light-theme");
        document.getElementById("aboutus").style.backgroundColor = "#fff";
        document.getElementById("fishing2").style.backgroundColor = "#fff";
        document.getElementById("ourphotos").style.backgroundColor = "#fff";
        document.getElementById("foot").style.backgroundColor = "black"
});