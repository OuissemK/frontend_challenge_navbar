const menuToggle = document.querySelector(".menu-toggle");
const mainMenu = document.querySelector(".main-menu");
const closeToggle = document.querySelector(".close__toggle");

menuToggle.addEventListener ("click",() => {
    mainMenu.classList.toggle("is-open")
});

closeToggle.addEventListener("click",() => {
    mainMenu.classList.remove("is-open")
});
