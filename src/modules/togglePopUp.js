"use strict";

const togglePopUp = () => {

    const popupMenu = document.querySelector('.popup-menu'),
        headerMain = document.querySelector('.header-main');

    headerMain.addEventListener('click', (event) => {
        const target = event.target;

        if (target.matches('.menu-button img')) {
            popupMenu.style.display = 'flex';
        }
        if (target.matches('img.close-btn, a, .close-menu-btn img')) {
            popupMenu.style.display = 'none';
        }
    });
};

export default togglePopUp;