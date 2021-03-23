"use strict";

const sendForms = () => {

    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'В процессе загрузки...',
        statusMessage = document.createElement('div'),
        allInput = document.querySelectorAll('.cards-types > input[name="card-type"]');

    allInput.forEach(input => {
        input.value = input.nextElementSibling.querySelectorAll('.cost')[0].firstChild.textContent;
    });

    const forms = document.querySelectorAll('form');
    
    const addStyle = (text) => {
        
        const style = document.createElement('style');
        style.id = 'styleMessage';
        style.textContent = `
                .glo-style__textmessage {
                margin: 25px 0px 0px; color: ${text};}`;
        document.head.appendChild(style);
    };

    const postData = (url, body) => {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then((response) => {

                if (response.status !== 200) {
                    throw new Error('status network not 200');
                }
                document.getElementById('free_visit_form').style.display = 'none';
                document.getElementById('callback_form').style.display = 'block';
                document.getElementById('thanks').style.display = 'block';
                document.getElementById('price-total').textContent = 'block';

            })
            .catch(() => {

                statusMessage.textContent = loadMessage;
            });
    };

    forms.forEach((form) => {
        form.addEventListener('submit', (event) => {

            event.preventDefault();
            form.appendChild(statusMessage);
            statusMessage.innerHTML = loadMessage;

            if (form.matches('#card_order')) {
                addStyle('black');
            } else {
                addStyle('white');
            }
            
            statusMessage.classList.add('glo-style__textmessage');
            const formData = new FormData(form);

            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });

            postData('./server.php', body);

            form.reset();
            setTimeout(() => document.getElementById('thanks').style.display = 'none', 5000);
            setTimeout(() => statusMessage.remove(), 500);
        });
    });
};
export default sendForms;
