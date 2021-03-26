"use strict";

const openModalWindow = (dataPopup) => {

    
    dataPopup.forEach((popup) => {
        try {
            const elem = document.querySelector(`${popup.data}`);

            elem.addEventListener('click', (e) => {

                const modal = document.getElementById(popup.id),
                    overlay = modal.querySelector('.overlay'),
                    formWrappers = [].concat(overlay, ...modal.querySelectorAll('.form-wrapper'));

                modal.style.display = 'block';

                 if (elem.matches('.fixed-gift')) {
                    
                    elem.style.display = 'none';
                } 
                if (e.target.matches('.btn.close-btn, .close_icon, .overlay')) {
                    elem.style.display = 'none';
                }

                formWrappers.forEach(formWrapper => {

                    formWrapper.addEventListener('click', (e) => {
                        const target = e.target;
      
                        if (target.matches('.close-form, .close_icon, .overlay, .form-wrapper, .btn.close-btn')) {
                            modal.style.display = 'none';
                        }
                    });
                });
            });
        } catch (e) { }
    });
};

//     item.forEach((openPopUp) => {
        
//             const element = document.querySelector(`${openPopUp.data}`);

//             function openCloseModal (event) {
                
//                 const modal = document.getElementById(openPopUp.id),
//                     overlay = modal.querySelector('.overlay'),
//                     wrappers = [].concat(overlay, ...modal.querySelectorAll('.form-wrapper'));
//                 modal.style.display = 'block';
//                  if (element.matches('.fixed-gift')) {
//                     element.style.display = '';
//                 } 
//                 if (event.target.matches('.btn.close-btn, .close_icon, .overlay')) {
//                     element.style.display = 'none';
//                 }

//                 for (let i = 0; i < wrappers.length; i++) {

//                     wrappers[i].addEventListener('click', (event) => {
//                         const target = event.target;
                
//                           if (target.matches('.close-form, .close_icon, .overlay, .form-wrapper, .btn.close-btn')) {
//                               modal.style.display = 'none';
//                           }
//                      });
//                  }
//         }
//         element.addEventListener('click', openCloseModal );
//     });
// };

export default openModalWindow;