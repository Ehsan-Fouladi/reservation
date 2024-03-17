const menu = document.querySelector(".menu");
const close = document.querySelector(".close");

AOS.init();

menu.addEventListener("click", () => {
    close.classList.toggle("hidden")
})