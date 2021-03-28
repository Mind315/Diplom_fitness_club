"use strict";

import modalWindow from './modal';

const validator = () => {
    const allInputsValid = document.querySelectorAll('input'),
        allButton = document.querySelectorAll('button[type = submit]');
    let elementClone = document.getElementById('thanks').cloneNode(true);

 

    const newModalAdd = (text) => { 

        elementClone.id = 'messageAfter';
        document.body.appendChild(elementClone);

        modalWindow([{ data: '#messageAfter', id: 'messageAfter' }]);
       
        elementClone.querySelector('.form-content h4').textContent = 'Данные не отправлены';
        elementClone.querySelector('.form-content p').innerHTML = text;
        elementClone.querySelector('.form-content p').style.color = 'white';
    };
    const checkRadio = (data) => { 
        let check = [...data].some(radio => {
            return radio.checked ? true : false;
        });
        // return check;
    };

  


    allButton.forEach(button => {
        button.addEventListener('click', (e) => {
            const target = e.target,
                form = target.closest('form'),
                inputs = form.querySelectorAll('input');
            function noChecked() { 
                const messageAfter = document.getElementById('messageAfter');
                messageAfter.style.display = 'block';
                setTimeout(() => {
                    messageAfter.style.display = 'none';
                    button.disabled = false;
                }, 3000);
            }
            
            function blocked(messageText) {
                newModalAdd(messageText);
                button.disabled = true;
                noChecked();
            }
            const inputText = (data) => {

                data.forEach((input) => {
                    if (input.matches('[name=name]') && input.value.length < 2) {
                        blocked('Имя должно содержать не менее 2 символов!');
                    }
                    if (input.matches('[type=tel]') && input.value.length < 14) {
                        blocked('Поле телефон должно содержать не менее 11 цифр!');
                    }
                });

                
            };
            if (inputs) {
                inputText(inputs);
            }
            if (form.matches('#footer_form')) {
                const radios = form.querySelectorAll('[type=radio]');
                if (!checkRadio(radios)) { 
                    blocked('Необходимо выбрать клуб!');
                }
            }
            else if (form.matches('#banner-form, #card_order, #form1, #form2')) {
                const checkbox = form.querySelector('[type=checkbox]');
                if (!checkbox.checked) {
                    blocked('Необходимо подтвердить согласие');
                }
            } 
        });
    });

   
    allInputsValid.forEach((input) => { 
        input.addEventListener('input', (event) => {

            const target = event.target;
            if (target.parentElement.matches('.price-message') && target.matches('[name=promo]')) {
                target.value = target.value.replace(/[a-z]+/ig, '');
            }
            if (target.matches('[name=name]')) {
                target.value = target.value.replace(/[^\W\s]+|[!-@]/ig, '');

            }
        });
    });
    
    function maskPhone(selector, masked = '+7 (___) ___-__-__') {
        const elems = document.querySelectorAll(selector);
    
        function mask(event) {
            const keyCode = event.keyCode;
            const template = masked,
                def = template.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, "");
            
            let i = 0,
                newValue = template.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
                });
            i = newValue.indexOf("_");
            if (i != -1) {
                newValue = newValue.slice(0, i);
            }
            let reg = template.substr(0, this.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}";
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
                this.value = newValue;
            }
            if (event.type == "blur" && this.value.length < 5) {
                this.value = "";
            }
    
        }
    
        for (const elem of elems) {
            elem.addEventListener("input", mask);
            elem.addEventListener("focus", mask);
            elem.addEventListener("blur", mask);
        }
    }


    maskPhone('type=tel'); 
};

export default validator;

