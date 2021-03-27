"use strict";

const calculator = (elem, club) => {
   let timeSelected = null,
        clubSelected = null,
        promoSelected = null,
        result = 0;

    const data = {
        'mozaika': {
            '1': 1999,
            '6': 9900,
            '9': 13900,
            '12': 19900,
        },
        'schelkovo': {
            '1': 2999,
            '6': 14999,
            '9': 21990,
            '12': 24999,
        }
    };

    function selectedValue(data, name) {

      for(let i = 0; i < data.length; i++) {
                if (data[i].checked && name === 'time') {
                timeSelected = data[i].value;
            } else if (data[i].checked && name === 'allClub') {
                clubSelected = data[i].value;
            }
      }
      //   data.forEach(elem => {
      //       if (elem.checked && name === 'time') {
      //           timeSelected = elem.value;
      //       } else if (elem.checked && name === 'allClub') {
      //           clubSelected = elem.value;
      //       }
      //   });
    }

    const dataForCalculator = (id, month, promo) => {
        if (promo === 'ТЕЛО2021') {
            return Math.floor(data[id][month] * 0.7);
        } else {
            return data[id][month];
        }
    };

    try {
        const mainBlock = document.querySelector('#card_order'),
            priceTotal = mainBlock.querySelector('#price-total'),
            allClub = mainBlock.querySelectorAll('.club > input'),
            checkTime = mainBlock.querySelectorAll('.time > input'),
            promo = mainBlock.querySelector('.price-message input');

        priceTotal.textContent = result;

        selectedValue(checkTime, 'time');
        selectedValue(allClub, 'allClub');

        mainBlock.addEventListener('change', function (event) {

            if (event.target.matches('[name=card-type]')) {

                selectedValue(checkTime, 'time');
            } else if (event.target.matches('[name=club-name]')) {

                selectedValue(allClub, 'allClub');
            }

            priceTotal.textContent = dataForCalculator(`${clubSelected}`, `${timeSelected}`, `${promo.value}`);
        });

        priceTotal.textContent = dataForCalculator(`${clubSelected}`, `${timeSelected}`, `${promo.value}`);
    } catch (event) { }
};

export default calculator;