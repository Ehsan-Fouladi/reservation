const menu = document.querySelector(".menu");
const close = document.querySelector(".close");

AOS.init();

menu.addEventListener("click", () => {
  close.classList.toggle("hidden");
});

const items = document.querySelectorAll("#accordion .item .header");

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    items.forEach((header) => {
      header.closest(".item").classList.remove("active");
    });
    e.currentTarget.closest(".item").classList.toggle("active");
  });
});