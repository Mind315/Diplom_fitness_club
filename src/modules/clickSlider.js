"use strict";

const clickSlider = ({ main, wraper, position = 0, slidesToShow, infinity = false }) => {

    const mainSlider = document.querySelector(main),
        wrap = document.querySelector(wraper),
        slides = document.querySelector(wraper).children;

    let num = position,
        widthSlide = Math.ceil(100 / slidesToShow);

    function addClass() {

        for (const item of slides) {
            item.classList.add('glo-slider__item');
        }
        wrap.classList.add('glo-slider__wrap');
    }
    function addArrow(direction, imgArrow) {
      mainSlider.setAttribute('id', 'wrapper');
      mainSlider.insertAdjacentHTML('beforeend', `
      <a href="#" class="slider-arrow ${direction}"><span data-arrow="${direction}">
      <img src='${imgArrow}' data-arrow="${direction}"><img></span></a>
      `);
  }
   
    function addStyle() {
        const style = document.createElement('style');
        style.id = 'sliderCarusel-style';
        style.textContent = `
            .glo-slider__item {
            margin: 0 !important;
            flex: 0 0 ${widthSlide}% !important;
            }
            .glo-slider__wrap {
                display: flex !important;
                transition: transform 0.5s!important;
                will-change: transform !important;
                padding: 0 !important;
            }
        `;
        document.head.appendChild(style);
    }

    function prevSlider() {
        if (infinity || num > 0) {
            --num;
            if (num < 0) {
                num = slides.length - slidesToShow;
            }
            wrap.style.transform = `translateX(-${num * widthSlide}%)`;
        }
    }
    function nextSlider() {
        if (infinity || num < slides.length - slidesToShow) {
            ++num;

            if (num > slides.length - slidesToShow) {
                num = 0;
            }
            wrap.style.transform = `translateX(-${num * widthSlide}%)`;
        }
    }

    function init() {
      addClass();
      addStyle();
      addArrow('prev', './images/arrow-left.png');
      addArrow('next', './images/arrow-right.png');

  }
    mainSlider.addEventListener('click', (e) => {

        e.preventDefault();
        let target = e.target;


        if (target.dataset.arrow === 'prev') {
            prevSlider();
        }

        if (target.dataset.arrow === 'next') {
            nextSlider();
        }

    });

    init();

};

export default clickSlider;