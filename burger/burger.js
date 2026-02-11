const menuToggle = document.querySelector('.menu-toggle');
const offCanvas = document.querySelector('.off-canvas');
const body = document.querySelector('body');

menuToggle.addEventListener('click',()=>{
    const isOpen = offCanvas.classList.toggle("is-open");

/* Open & Close Icons  */
    menuToggle.classList.toggle("is-open",isOpen);

/* Scrolling Lock when the menu is Open */
    body.classList.toggle('menu-open');

/* Scroll Rest when the Panel is Closed */
    if (!isOpen) {
        offCanvas.scrollTop =0;
    }

});
