"use strict";

const openModalWindow = (item) => {
    item.forEach((popup) => {
        try {
            const element = document.querySelector(`${popup.data}`);

            element.addEventListener('click', (event) => {

                const modal = document.getElementById(popup.id),
                    overlay = modal.querySelector('.overlay'),
                    wrappers = [].concat(overlay, ...modal.querySelectorAll('.form-wrapper'));
                modal.style.display = 'block';
                 if (element.matches('.fixed-gift')) {
                    element.style.display = '';
                } 
                if (event.target.matches('.btn.close-btn, .close_icon, .overlay')) {
                    element.style.display = 'none';
                }

                wrappers.forEach(formWrapper => {

                    formWrapper.addEventListener('click', (event) => {
                        const target = event.target;
      
                        if (target.matches('.close-form, .close_icon, .overlay, .form-wrapper, .btn.close-btn')) {
                            modal.style.display = 'none';
                        }
                    });
                });
            });
        } catch (event) { }
    });
};

export default openModalWindow;