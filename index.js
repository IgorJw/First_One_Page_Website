var about_btn = document.getElementById("about_btn")
var home_btn = document.getElementById("home")
var about = document.getElementById("about")
var services_btn = document.getElementById("services_btn")
var services = document.getElementById("services")

about_btn.addEventListener("click", function() {
    about.style.display = "block"
})
home_btn.addEventListener("click", function() {
    about.style.display = "none"
    services.style.display = "none"
})

services_btn.addEventListener("click", function() {
    about.style.display = "none"
    services.style.display = "block"
})
