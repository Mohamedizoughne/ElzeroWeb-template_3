// Scroll to top button
let toTop = document.getElementById("scroll-to-top");
window.onload = window.onscroll = function () {
    if (window.scrollY > 600) {
        toTop.style.transition = "5s";
        toTop.style.display = "block";
        toTop.onclick = function (e) {
            window.scrollTo(window.scrollX, 0)
        }
    } else {
        toTop.style.display = "none";
    }
}

// Mega Menu
const linksBtn = document.querySelector(".other-links");
const megaMenu = document.querySelector(".mega-menu");
const landing = document.querySelector(".landing");
const header = document.querySelector("header");

linksBtn.addEventListener("click", function appear() {
    megaMenu.style.display = "grid";
    landing.onclick = function () {
        megaMenu.style.display = "none";
    };
});
